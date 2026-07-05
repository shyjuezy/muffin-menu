interface Feature {
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
}

const FEATURES: Feature[] = [
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
    <section className="mm-sec" id="platform">
      <div className="mm-wrap">
        <span className="mm-kicker">The office side</span>
        <h2>Managed once, synced everywhere.</h2>
        <p className="mm-lede">
          Behind the counter there&apos;s a back office that keeps menus,
          locations, and staff permissions in step — without a single re-upload.
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
