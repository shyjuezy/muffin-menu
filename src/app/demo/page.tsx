import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { DemoForm } from "@/components/demo-form";

export const metadata: Metadata = {
  title: "Request a demo — Muffin Menu",
  description:
    "Book a 20-minute walkthrough of Muffin Menu — POS, kitchen display, menus, online ordering, and reporting on one platform.",
};

const POINTS = [
  "A 20-minute walkthrough, set up around your menu and your stations",
  "See POS, KDS, online ordering, and reporting working together live",
  "Straight talk on pricing and migration — no commitment",
];

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="mm-sec">
          <div className="mm-hero-bg" />
          <div className="mm-wrap">
            <div className="mm-demo">
              <div className="mm-demo-intro">
                <span className="mm-kicker">Request a demo</span>
                <h1 className="mm-h1" style={{ fontSize: "44px" }}>
                  See Muffin Menu run <span className="mm-accent">your</span>{" "}
                  restaurant.
                </h1>
                <ul className="mm-checklist">
                  {POINTS.map((p) => (
                    <li key={p}>
                      <span className="mm-ck">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <p className="mm-demo-alt">
                  Prefer email? Reach us at{" "}
                  <a href="mailto:sales@muffinmenu.com">sales@muffinmenu.com</a>
                  .
                </p>
              </div>

              <div className="mm-demo-card">
                <DemoForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
