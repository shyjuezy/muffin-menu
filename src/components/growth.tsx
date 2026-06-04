interface GrowthItem {
  tag: string;
  title: string;
  desc: string;
  points: string[];
  icon: React.ReactNode;
}

const ITEMS: GrowthItem[] = [
  {
    tag: "AI Menu Assistant",
    title: "Guests ask. Your menu answers.",
    desc: "A built-in AI assistant lets diners ask about dishes, dietary needs, and allergens in plain language — and get recommendations drawn from your live menu, prices, and modifiers.",
    points: [
      "Natural-language menu search & recommendations",
      "Dietary & allergen aware — vegan, gluten-free, halal, keto…",
      "Answers from your real menu, not a generic bot",
    ],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    tag: "SEO-ready ordering site",
    title: "Get found on Google. Order direct.",
    desc: "Every location gets a fast, server-rendered website where each dish is its own search-indexed page with rich structured data — so guests discover you and order straight from you.",
    points: [
      "Schema.org menus — prices, nutrition & dietary in search",
      "Auto sitemaps, per-item pages & canonical tags",
      "Server-rendered for speed and Core Web Vitals",
    ],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
];

export function Growth() {
  return (
    <section className="mm-sec" id="grow">
      <div className="mm-wrap">
        <span className="mm-kicker">Bring guests in</span>
        <h2>More than back-office software.</h2>
        <p className="mm-lede">
          The same platform that runs your kitchen also helps fill it — an AI
          menu assistant for your guests and a search-optimized site for every
          location.
        </p>

        <div className="mm-growth">
          {ITEMS.map((item) => (
            <div className="mm-gcard" key={item.tag}>
              <div className="mm-ficon">{item.icon}</div>
              <span className="mm-gtag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="mm-glist">
                {item.points.map((p) => (
                  <li key={p}>
                    <span className="mm-ck">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
