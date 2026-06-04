import Link from "next/link";

export function EarlyAccess() {
  return (
    <section className="mm-sec">
      <div className="mm-wrap">
        <div className="mm-early">
          <span className="mm-kicker">Early access</span>
          <h2>Be one of our first restaurants.</h2>
          <p>
            We&apos;re onboarding a small group of early partners — work
            directly with our team, get hands-on setup, and help shape where
            Muffin Menu goes next.
          </p>
          <Link href="/demo" className="mm-btn-primary mm-btn-lg">
            Request a demo →
          </Link>
        </div>
      </div>
    </section>
  );
}
