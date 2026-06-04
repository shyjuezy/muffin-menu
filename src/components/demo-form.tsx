"use client";

import { useEffect, useRef, useState } from "react";

const LOCATIONS = [
  { value: "", label: "How many locations?" },
  { value: "1", label: "1 location" },
  { value: "2-5", label: "2–5 locations" },
  { value: "6-20", label: "6–20 locations" },
  { value: "20+", label: "20+ locations" },
];

type Status = "idle" | "submitting" | "success" | "error";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Load Cloudflare Turnstile only when a site key is configured.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    if (document.getElementById("cf-turnstile-script")) return;
    const s = document.createElement("script");
    s.id = "cf-turnstile-script";
    // Implicit rendering: Cloudflare auto-mounts any .cf-turnstile element and
    // injects the hidden `cf-turnstile-response` input we read on submit.
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setErrors({});
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      restaurant: fd.get("restaurant"),
      locations: fd.get("locations"),
      phone: fd.get("phone"),
      bestTime: fd.get("bestTime"),
      message: fd.get("message"),
      consent: fd.get("consent") === "on",
      company_website: fd.get("company_website"), // honeypot
      turnstileToken: (
        formRef.current?.querySelector(
          '[name="cf-turnstile-response"]',
        ) as HTMLInputElement | null
      )?.value,
    };

    // Lightweight client-side checks (server is the source of truth).
    const clientErrors: Record<string, string> = {};
    if (!String(payload.name ?? "").trim())
      clientErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email ?? "")))
      clientErrors.email = "Enter a valid work email.";
    if (!payload.consent)
      clientErrors.consent = "Please agree to be contacted.";
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        errors?: Record<string, string>;
      };
      if (data.errors) setErrors(data.errors);
      setStatus("error");
      setMessage(data.error ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage(
        "Network error. Please try again or email hello@muffinmenu.com.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="mm-form-success" role="status">
        <div className="mm-form-success-icon">✓</div>
        <h3>Request received.</h3>
        <p>
          Thanks — we&apos;ve sent a confirmation to your inbox and our team
          will reach out shortly. If you need us sooner, email{" "}
          <a href="mailto:sales@muffinmenu.com">sales@muffinmenu.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="mm-form" onSubmit={handleSubmit} ref={formRef} noValidate>
      <div className="mm-field">
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        {errors.name && <span className="mm-err">{errors.name}</span>}
      </div>

      <div className="mm-field">
        <label htmlFor="email">Work email *</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        {errors.email && <span className="mm-err">{errors.email}</span>}
      </div>

      <div className="mm-field">
        <label htmlFor="restaurant">Restaurant / business name</label>
        <input
          id="restaurant"
          name="restaurant"
          type="text"
          autoComplete="organization"
        />
      </div>

      <div className="mm-field">
        <label htmlFor="locations">Number of locations</label>
        <select id="locations" name="locations" defaultValue="">
          {LOCATIONS.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ""}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mm-field">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="mm-field">
        <label htmlFor="bestTime">Best time to reach you (optional)</label>
        <input
          id="bestTime"
          name="bestTime"
          type="text"
          placeholder="e.g. weekday mornings, after 3pm PT"
        />
      </div>

      <div className="mm-field mm-field-full">
        <label htmlFor="message">Anything we should know? (optional)</label>
        <textarea id="message" name="message" rows={3} />
      </div>

      {/* Honeypot — visually hidden, must stay empty */}
      <div aria-hidden="true" className="mm-hp">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {TURNSTILE_SITE_KEY && (
        <div
          className="cf-turnstile mm-field-full"
          data-sitekey={TURNSTILE_SITE_KEY}
        />
      )}

      <div className="mm-field mm-field-full mm-consent">
        <label>
          <input type="checkbox" name="consent" required /> I agree to be
          contacted about a Muffin Menu demo.
        </label>
        {errors.consent && <span className="mm-err">{errors.consent}</span>}
      </div>

      {status === "error" && message && (
        <p className="mm-form-error mm-field-full" role="alert">
          {message}
        </p>
      )}

      <div className="mm-field-full">
        <button
          type="submit"
          className="mm-btn-primary mm-btn-lg"
          disabled={status === "submitting"}
          style={{ width: "100%" }}
        >
          {status === "submitting" ? "Sending…" : "Request a demo →"}
        </button>
      </div>
    </form>
  );
}
