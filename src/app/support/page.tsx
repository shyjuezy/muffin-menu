import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Support - Muffin Menu",
  description:
    "Get help with Muffin Menu, MuffinMenu KDS, and MuffinMenu POS. Contact support@muffinmenu.com.",
};

const SUPPORT_EMAIL = "support@muffinmenu.com";

const SECTIONS = [
  {
    id: "kds",
    title: "MuffinMenu KDS (kitchen display)",
    body: [
      "Pairing: open the app on the tablet to get a pairing code, then approve it from your Muffin Menu admin dashboard. To move a device to another location or station, revoke it in the dashboard and pair it again.",
      "Orders not appearing: check that the tablet is online and paired to the right location and station. Pull down on the board to refresh.",
      "Printer: Star TSP143IV printers connect over USB on Android tablets and over Bluetooth or LAN on iPad. Make sure the printer is on and allowed in the app's printer settings.",
      "Just looking around? Tap Try Demo Mode on the pairing screen to explore the app with sample orders. No account is needed.",
    ],
  },
  {
    id: "pos",
    title: "MuffinMenu POS (point of sale)",
    body: [
      "Signing in: choose your name on the staff screen and enter your PIN. If your PIN is locked after too many attempts, ask a manager or wait a few minutes and try again.",
      "Demo mode: choose Demo Server on the sign-in screen and use the demo PIN shown under the keypad.",
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="mm-policy">
        <section className="mm-policy-hero">
          <div className="mm-hero-bg" />
          <div className="mm-wrap">
            <span className="mm-kicker">Support</span>
            <h1>How can we help?</h1>
            <p>
              Questions, problems, or ideas about Muffin Menu, MuffinMenu KDS,
              or MuffinMenu POS? Email us at{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we
              will get back to you.
            </p>
          </div>
        </section>

        <section className="mm-policy-body">
          <div className="mm-wrap">
            <div className="mm-policy-layout">
              <aside className="mm-policy-nav" aria-label="Support sections">
                <a href="#contact">Contact support</a>
                {SECTIONS.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}
              </aside>

              <div className="mm-policy-card">
                <section id="contact" className="mm-policy-section">
                  <h2>Contact support</h2>
                  <p>
                    Email{" "}
                    <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                    Please include your restaurant name, the app you are using
                    (KDS or POS), your device type, and a short description or
                    screenshot of the problem.
                  </p>
                  <p>
                    For pricing or a demo, contact{" "}
                    <a href="mailto:sales@muffinmenu.com">
                      sales@muffinmenu.com
                    </a>
                    .
                  </p>
                </section>

                {SECTIONS.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="mm-policy-section"
                  >
                    <h2>{section.title}</h2>
                    <ul>
                      {section.body.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
