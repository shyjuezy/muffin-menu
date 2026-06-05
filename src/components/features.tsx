interface Feature {
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    title: "Kitchen Display (KDS)",
    description:
      "Live order tickets with timers, bump tracking, and priority alerts. Works on any tablet, monitor, or custom display.",
    detail: "Ticket management, station routing →",
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
      "Fast order entry with modifiers, split checks, and discounts. Accepts every payment method with built-in tipping.",
    detail: "Dine-in, takeout & delivery →",
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
    title: "Online Ordering",
    description:
      "Your own branded website for pickup, delivery, and dine-in — commission-free. Orders drop straight onto the kitchen display, no extra tablet to juggle.",
    detail: "Commission-free direct ordering →",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time sales, item performance, hourly breakdowns, and staff metrics. Export to CSV or your accounting tool.",
    detail: "Live sales & item reports →",
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
      "Update items, prices, modifiers, and photos once — they sync instantly to POS, KDS, and online ordering.",
    detail: "Real-time menu sync →",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16v4H4z" />
        <path d="M4 12h16" />
        <path d="M4 18h10" />
      </svg>
    ),
  },
  {
    title: "Multi-location",
    description:
      "Run one café or fifty. Shared menus, per-location overrides, and a roll-up view of every kitchen from anywhere.",
    detail: "Brand → location hierarchy →",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Staff & Roles",
    description:
      "Granular permissions from owner to line cook. Everyone sees exactly what they need — nothing they don't.",
    detail: "5-tier role-based access →",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="mm-sec" id="product">
      <div className="mm-wrap">
        <span className="mm-kicker">One platform, every station</span>
        <h2>Everything your restaurant runs on, in one place.</h2>
        <p className="mm-lede">
          Front of house, back of house, and the office — connected. No more
          stitching together five tools that don&apos;t talk to each other.
        </p>

        <div className="mm-grid">
          {FEATURES.map((feature) => (
            <div className="mm-fcard" key={feature.title}>
              <div className="mm-ficon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="mm-more">{feature.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
