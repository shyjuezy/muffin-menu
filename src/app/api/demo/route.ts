import { Resend } from "resend";

// Route Handlers are not cached for POST; run on the Node.js runtime for the
// Resend SDK. See node_modules/next/dist/docs/.../15-route-handlers.md
export const runtime = "nodejs";

const LOCATION_OPTIONS = ["1", "2-5", "6-20", "20+"] as const;
type Locations = (typeof LOCATION_OPTIONS)[number];

interface DemoPayload {
  name?: unknown;
  email?: unknown;
  restaurant?: unknown;
  locations?: unknown;
  phone?: unknown;
  bestTime?: unknown;
  message?: unknown;
  consent?: unknown;
  // honeypot — real users never fill this (hidden field)
  company_website?: unknown;
  // Cloudflare Turnstile token (optional until configured)
  turnstileToken?: unknown;
}

interface CleanLead {
  name: string;
  email: string;
  restaurant: string;
  locations: Locations | "";
  phone: string;
  bestTime: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyTurnstile(
  token: string,
  ip: string | null,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Not configured yet → skip verification (honeypot + validation still apply).
  if (!secret) return true;
  if (!token) return false;
  try {
    const form = new URLSearchParams({ secret, response: token });
    if (ip) form.set("remoteip", ip);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: form },
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: DemoPayload;
  try {
    body = (await request.json()) as DemoPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // 1. Honeypot — silently accept and drop so bots don't learn they failed.
  if (str(body.company_website, 200) !== "") {
    return Response.json({ ok: true }, { status: 200 });
  }

  // 2. Turnstile (no-op until TURNSTILE_SECRET_KEY is set).
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const turnstileOk = await verifyTurnstile(str(body.turnstileToken, 4000), ip);
  if (!turnstileOk) {
    return Response.json(
      { error: "Verification failed. Please try again." },
      { status: 400 },
    );
  }

  // 3. Validate + normalise.
  const lead: CleanLead = {
    name: str(body.name, 100),
    email: str(body.email, 200),
    restaurant: str(body.restaurant, 150),
    locations: (LOCATION_OPTIONS as readonly string[]).includes(
      str(body.locations, 10),
    )
      ? (str(body.locations, 10) as Locations)
      : "",
    phone: str(body.phone, 40),
    bestTime: str(body.bestTime, 100),
    message: str(body.message, 2000),
  };

  const errors: Record<string, string> = {};
  if (!lead.name) errors.name = "Name is required.";
  if (!EMAIL_RE.test(lead.email))
    errors.email = "A valid work email is required.";
  if (body.consent !== true) errors.consent = "Please agree to be contacted.";
  if (Object.keys(errors).length > 0) {
    return Response.json(
      { error: "Please check the form.", errors },
      { status: 400 },
    );
  }

  // 4. Config — fail loudly rather than silently dropping a lead.
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.DEMO_FROM ?? "Muffin Menu <notifications@send.muffinmenu.com>";
  const notifyTo = process.env.DEMO_NOTIFY_TO ?? "sales@muffinmenu.com";
  const salesReplyTo = process.env.DEMO_REPLY_TO ?? "sales@muffinmenu.com";
  const bcc = process.env.DEMO_BCC;

  if (!apiKey) {
    // Floor-level capture so a misconfig never means a lost lead.
    console.error("[demo] RESEND_API_KEY missing — lead not delivered:", lead);
    return Response.json(
      {
        error:
          "We couldn't submit your request right now. Please email us directly.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const locationsLabel: Record<Locations, string> = {
    "1": "1 location",
    "2-5": "2–5 locations",
    "6-20": "6–20 locations",
    "20+": "20+ locations",
  };
  const locText = lead.locations
    ? locationsLabel[lead.locations]
    : "Not specified";

  // Notification to the team — Reply-To is the prospect so a reply goes to them.
  const notifyHtml = `
    <h2>New demo request</h2>
    <table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px">
      <tr><td><b>Name</b></td><td>${escapeHtml(lead.name)}</td></tr>
      <tr><td><b>Email</b></td><td>${escapeHtml(lead.email)}</td></tr>
      <tr><td><b>Restaurant</b></td><td>${escapeHtml(lead.restaurant) || "—"}</td></tr>
      <tr><td><b>Locations</b></td><td>${escapeHtml(locText)}</td></tr>
      <tr><td><b>Phone</b></td><td>${escapeHtml(lead.phone) || "—"}</td></tr>
      <tr><td><b>Best time</b></td><td>${escapeHtml(lead.bestTime) || "—"}</td></tr>
      <tr><td valign="top"><b>Message</b></td><td>${escapeHtml(lead.message).replace(/\n/g, "<br>") || "—"}</td></tr>
    </table>`;
  const notifyText =
    `New demo request\n\n` +
    `Name: ${lead.name}\nEmail: ${lead.email}\nRestaurant: ${lead.restaurant || "—"}\n` +
    `Locations: ${locText}\nPhone: ${lead.phone || "—"}\nBest time: ${lead.bestTime || "—"}\n` +
    `Message: ${lead.message || "—"}\n`;

  try {
    const { error } = await resend.emails.send({
      from,
      to: notifyTo,
      replyTo: lead.email,
      ...(bcc ? { bcc } : {}),
      subject: `New demo request — ${lead.name}${lead.restaurant ? ` (${lead.restaurant})` : ""}`,
      html: notifyHtml,
      text: notifyText,
    });
    if (error) {
      console.error("[demo] notification send failed — lead:", lead, error);
      return Response.json(
        {
          error: "We couldn't submit your request right now. Please try again.",
        },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[demo] notification threw — lead:", lead, err);
    return Response.json(
      { error: "We couldn't submit your request right now. Please try again." },
      { status: 502 },
    );
  }

  // Auto-reply to the prospect — Reply-To is the shared sales inbox.
  // Secondary: failure here is logged but does not fail the request.
  try {
    await resend.emails.send({
      from,
      to: lead.email,
      replyTo: salesReplyTo,
      subject: "Thanks — we'll be in touch about your Muffin Menu demo",
      html: `
        <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6">
          <p>Hi ${escapeHtml(lead.name)},</p>
          <p>Thanks for requesting a demo of <b>Muffin Menu</b>. We've got your details
          and someone from our team will reach out shortly${lead.bestTime ? ` (we'll aim for ${escapeHtml(lead.bestTime)})` : ""}.</p>
          <p>If you need us sooner, just reply to this email.</p>
          <p>— The Muffin Menu team</p>
        </div>`,
      text: `Hi ${lead.name},\n\nThanks for requesting a demo of Muffin Menu. We've got your details and someone from our team will reach out shortly${lead.bestTime ? ` (we'll aim for ${lead.bestTime})` : ""}.\n\nIf you need us sooner, just reply to this email.\n\n— The Muffin Menu team`,
    });
  } catch (err) {
    console.error("[demo] auto-reply failed (lead still captured):", err);
  }

  return Response.json({ ok: true }, { status: 200 });
}
