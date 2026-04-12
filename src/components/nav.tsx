import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Docs", href: "#" },
];

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-gray-200"
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left: Logo + links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Muffin Menu"
              width={36}
              height={36}
              className="object-contain w-9 h-auto"
              priority
            />
            <span className="text-lg font-black" style={{ color: "#1D6DB5" }}>
              Muffin<span style={{ color: "#F4B223" }}>Menu</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-500">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Auth */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="text-sm font-bold px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90"
            style={{
              background: "#F4B223",
              color: "#1B3272",
              boxShadow: "0 4px 14px rgba(244,178,35,0.3)",
            }}
          >
            Start Free →
          </Link>
        </div>
      </div>
    </nav>
  );
}
