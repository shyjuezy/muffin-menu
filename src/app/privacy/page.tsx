import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Privacy Policy - Muffin Menu",
  description:
    "Privacy Policy for Muffin Menu and MuffinMenu KDS, operated by Add4x Inc.",
};

const SECTIONS = [
  {
    id: "information",
    title: "Information we collect",
    body: [
      "Business and contact information, such as your name, email address, phone number, restaurant or company name, and messages you send when you request a demo, contact sales, or ask for support.",
      "Restaurant account information, including restaurant names, locations, station assignments, configuration settings, menu and operational data you choose to manage through Muffin Menu.",
      "Kitchen display and device information, including device identifiers, app version, operating system, pairing status, assigned location or station, and related device-session information needed to connect the app to your restaurant account.",
      "Operational order information shown in the kitchen display, such as order numbers, items, fulfillment status, timestamps, and routing details provided by your restaurant systems.",
      "Usage, diagnostics, crash, log, and performance information that helps us secure, support, troubleshoot, and improve the service.",
    ],
  },
  {
    id: "use",
    title: "How we use information",
    body: [
      "Provide, operate, secure, and improve Muffin Menu, MuffinMenu KDS, and related services.",
      "Pair devices, route kitchen orders, sync station state, and support restaurant workflows.",
      "Respond to demo requests, support requests, account questions, and service communications.",
      "Monitor reliability, diagnose crashes or errors, prevent abuse, and protect the service.",
      "Comply with legal, regulatory, security, and contractual obligations.",
    ],
  },
  {
    id: "sharing",
    title: "How we share information",
    body: [
      "We do not sell personal information. We share information only as needed to operate the service, support customers, or meet legal obligations.",
      "We may share information with vendors and service providers that help us provide hosting, authentication, analytics, crash reporting, monitoring, email, customer support, and cloud infrastructure.",
      "We may disclose information if required by law, to protect rights or safety, to investigate abuse, or as part of a merger, acquisition, financing, or sale of business assets.",
    ],
  },
  {
    id: "retention",
    title: "Retention and security",
    body: [
      "We keep information for as long as needed to provide the service, support customer accounts, satisfy legal obligations, resolve disputes, and enforce agreements.",
      "We use administrative, technical, and organizational safeguards designed to protect information. No internet or cloud service can be guaranteed to be completely secure.",
    ],
  },
  {
    id: "choices",
    title: "Your choices",
    body: [
      "You may request access, correction, deletion, or export of personal information by contacting us. We may need to verify your request and may retain information where required by law or legitimate business needs.",
      "Restaurant operational data is usually controlled by the restaurant account owner. If you are an employee, customer, or guest of a restaurant using Muffin Menu, please contact that restaurant first for requests about order or account data they control.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: [
      "Muffin Menu is intended for restaurant operators and staff. It is not directed to children under 13, and we do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. If we make material changes, we will update the date on this page and provide additional notice when appropriate.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mm-policy">
        <section className="mm-policy-hero">
          <div className="mm-hero-bg" />
          <div className="mm-wrap">
            <span className="mm-kicker">Privacy Policy</span>
            <h1>Privacy Policy</h1>
            <p>
              This policy explains how Add4x Inc. collects, uses, and protects
              information for Muffin Menu, MuffinMenu KDS, our websites, and
              related services.
            </p>
            <p className="mm-policy-date">Last updated: June 8, 2026</p>
          </div>
        </section>

        <section className="mm-policy-body">
          <div className="mm-wrap">
            <div className="mm-policy-layout">
              <aside className="mm-policy-nav" aria-label="Privacy sections">
                <a href="#overview">Overview</a>
                {SECTIONS.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}
                <a href="#contact">Contact</a>
              </aside>

              <div className="mm-policy-card">
                <section id="overview" className="mm-policy-section">
                  <h2>Overview</h2>
                  <p>
                    Add4x Inc. operates Muffin Menu as a restaurant operations
                    platform. MuffinMenu KDS is the kitchen display app used by
                    restaurant teams to receive, view, and update order status
                    at assigned kitchen stations.
                  </p>
                  <p>
                    This Privacy Policy applies to our public websites, demo
                    forms, web products, mobile and tablet apps, device-pairing
                    flows, support channels, and related services.
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

                <section id="contact" className="mm-policy-section">
                  <h2>Contact us</h2>
                  <p>
                    For privacy questions or requests, contact us at{" "}
                    <a href="mailto:developer@muffinmenu.com">
                      developer@muffinmenu.com
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
