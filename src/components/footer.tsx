import Link from "next/link";

const PRODUCT_LINKS = [
  { label: "Kitchen Display", href: "/#product" },
  { label: "Point of Sale", href: "/#product" },
  { label: "Menu Builder", href: "/#product" },
  { label: "Analytics", href: "/#product" },
];

const COMPANY_LINKS = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "mailto:sales@muffinmenu.com" },
];

const START_LINKS = [
  { label: "Request a demo", href: "/demo" },
  { label: "Contact sales", href: "mailto:sales@muffinmenu.com" },
];

export function Footer() {
  return (
    <footer className="mm-footer">
      <div className="mm-wrap">
        <div className="mm-foot">
          <div className="mm-col" style={{ maxWidth: "280px" }}>
            <Link href="/" className="mm-brand">
              <span className="mm-logo">🧁</span> Muffin Menu
            </Link>
            <p className="mm-foot-note">
              The restaurant operating system. POS, kitchen, menus, and
              reporting on one platform.
            </p>
          </div>
          <div className="mm-col">
            <h4>Product</h4>
            {PRODUCT_LINKS.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mm-col">
            <h4>Company</h4>
            {COMPANY_LINKS.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mm-col">
            <h4>Get started</h4>
            {START_LINKS.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mm-foot-bottom">
          <span>© 2026 Add4x Inc. All rights reserved.</span>
          <span>
            Muffin Menu is built &amp; operated by{" "}
            <a href="https://add4x.com">Add4x Inc.</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
