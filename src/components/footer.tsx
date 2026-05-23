import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer style={{ background: "#1D6DB5", color: "white" }}>
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Muffin Menu"
            width={32}
            height={32}
            className="object-contain w-8 h-auto"
          />
          <span className="font-black text-lg">
            Muffin<span style={{ color: "#F4B223" }}>Menu</span>
          </span>
        </Link>

        {/* Links */}
        <div
          className="flex flex-wrap justify-center gap-6 text-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div
          className="text-sm text-center md:text-right space-y-1"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <p>Muffin Menu is a product of Add4x Inc.</p>
          <p style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Add4x Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
