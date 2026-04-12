interface Feature {
  title: string;
  description: string;
  detail: string;
  iconColor: string;
  iconBg: string;
  detailColor: string;
  icon: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    title: "Kitchen Display (KDS)",
    description:
      "Live order tickets with timers, bump tracking, and priority alerts. Works on any screen — tablet, monitor, or custom display.",
    detail: "→ Ticket management, station routing, bump reports",
    iconBg: "#EBF5FF",
    iconColor: "#1D6DB5",
    detailColor: "#1D6DB5",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Point of Sale (POS)",
    description:
      "Fast order entry with modifiers, split checks, and discount support. Accepts all payment methods with built-in tipping.",
    detail: "→ Dine-in, takeout & delivery modes",
    iconBg: "#FFFBEB",
    iconColor: "#D97706",
    detailColor: "#D97706",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time sales, item performance, hourly breakdowns, and staff metrics. Export to CSV or connect to your accounting tool.",
    detail: "→ Daily reports, trends, custom date ranges",
    iconBg: "#F0FDF4",
    iconColor: "#16a34a",
    detailColor: "#16a34a",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Menu Builder",
    description:
      "Drag-and-drop editor with categories, modifiers, photos, and availability toggles. Update everything in one place — syncs instantly.",
    detail: "→ Syncs to KDS, POS & online ordering",
    iconBg: "#FFF1F2",
    iconColor: "#e11d48",
    detailColor: "#e11d48",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    title: "Multi-location",
    description:
      "Centralized control for all your branches. Standardize menus, compare location performance, and push updates chain-wide.",
    detail: "→ Per-location menus, consolidated reporting",
    iconBg: "#F5F3FF",
    iconColor: "#7c3aed",
    detailColor: "#7c3aed",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Staff & Roles",
    description:
      "Role-based access for managers, cashiers, and kitchen staff. Clock-in tracking, shift notes, and full audit logs included.",
    detail: "→ PIN login, permissions, activity history",
    iconBg: "#EBF5FF",
    iconColor: "#1D6DB5",
    detailColor: "#1D6DB5",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div
      className="feature-card rounded-2xl p-7"
      style={{
        background: "#F8FAFE",
        border: "1px solid #e5e7eb",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: feature.iconBg, color: feature.iconColor }}
      >
        {feature.icon}
      </div>
      <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
      <p className="text-sm leading-relaxed mb-4 text-gray-500">
        {feature.description}
      </p>
      <div
        className="text-xs font-semibold"
        style={{ color: feature.detailColor }}
      >
        {feature.detail}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24" style={{ background: "#F8FAFE" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#1D6DB5" }}
          >
            Platform
          </p>
          <h2 className="text-4xl font-black mb-4 text-gray-900">
            Designed for Every Station
          </h2>
          <p className="text-lg max-w-xl mx-auto text-gray-500">
            Counter, kitchen, back office — all connected. One login for your
            whole team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
