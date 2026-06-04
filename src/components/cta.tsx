import Link from "next/link";

export function Cta() {
  return (
    <section className="mm-sec" id="resources" style={{ paddingTop: "20px" }}>
      <div className="mm-wrap">
        <div className="mm-cta-final">
          <h2>
            See Muffin Menu run <span className="mm-accent">your</span>{" "}
            restaurant.
          </h2>
          <p>
            Book a 20-minute walkthrough. We&apos;ll set it up around your menu
            and your stations — no commitment.
          </p>
          <div className="mm-cta-row">
            <Link href="/demo" className="mm-btn-primary mm-btn-lg">
              Request a demo →
            </Link>
            <a
              href="mailto:sales@muffinmenu.com"
              className="mm-btn-ghost mm-btn-lg"
            >
              Contact sales
            </a>
          </div>
          <div className="mm-fineprint">
            Talk to a real person · Works on hardware you already own
          </div>
        </div>
      </div>
    </section>
  );
}
