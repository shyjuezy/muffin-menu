import Link from "next/link";

const NAV_LINKS = [
  { label: "Product", href: "/#product" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Resources", href: "/#resources" },
];

export function Nav() {
  return (
    <header className="mm-header">
      <div className="mm-wrap">
        <nav className="mm-nav">
          <Link href="/" className="mm-brand">
            <span className="mm-logo">🧁</span> Muffin Menu
          </Link>
          <div className="mm-navlinks">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/demo" className="mm-btn-primary mm-nav-cta">
            Request a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
