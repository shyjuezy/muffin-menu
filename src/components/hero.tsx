import Link from "next/link";

const TRUST_NAMES = ["Brisket Co", "Nori", "Pamela's", "Ember", "Verde"];

interface Tile {
  no: string;
  badge: string;
  badgeClass: string;
  items: [string, string][];
}

const TILES: Tile[] = [
  {
    no: "Table 12",
    badge: "Ready",
    badgeClass: "mm-b-ready",
    items: [
      ["2×", "Brisket bowl"],
      ["1×", "Mac & cheese"],
    ],
  },
  {
    no: "Online · #4471",
    badge: "Cooking",
    badgeClass: "mm-b-cook",
    items: [
      ["1×", "Double burger"],
      ["1×", "Fries · no salt"],
    ],
  },
  {
    no: "Table 07",
    badge: "Cooking",
    badgeClass: "mm-b-cook",
    items: [
      ["3×", "Street tacos"],
      ["2×", "Horchata"],
    ],
  },
  {
    no: "Pickup · #4472",
    badge: "New",
    badgeClass: "mm-b-new",
    items: [
      ["1×", "Caesar salad"],
      ["1×", "Lemonade"],
    ],
  },
];

export function Hero() {
  return (
    <section>
      <div className="mm-hero-bg" />
      <div className="mm-wrap">
        <div className="mm-hero">
          <div>
            <span className="mm-eyebrow">
              <span className="mm-dot" /> Built for restaurant operators
            </span>
            <h1 className="mm-h1">
              Run the whole
              <br />
              restaurant.
              <br />
              <span className="mm-accent">From one screen.</span>
            </h1>
            <p className="mm-sub">
              POS, kitchen display, menus, online ordering, and reporting —{" "}
              <b>one platform that talks to itself.</b>
            </p>
            <div className="mm-cta-row">
              <Link href="/demo" className="mm-btn-primary mm-btn-lg">
                Request a demo →
              </Link>
              <Link href="#product" className="mm-btn-ghost mm-btn-lg">
                See it live
              </Link>
            </div>
          </div>

          <div className="mm-stage">
            <div className="mm-device">
              <div className="mm-scr-top">
                <div className="mm-scr-title">
                  🍳 Kitchen Display <span className="mm-live">● LIVE</span>
                </div>
                <div className="mm-dots">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="mm-tiles">
                {TILES.map((tile) => (
                  <div className="mm-tile" key={tile.no}>
                    <div className="mm-tile-t">
                      <span className="mm-tno">{tile.no}</span>
                      <span className={`mm-badge ${tile.badgeClass}`}>
                        {tile.badge}
                      </span>
                    </div>
                    <div className="mm-li">
                      {tile.items.map(([qty, name], i) => (
                        <span key={name}>
                          <b>{qty}</b> {name}
                          {i < tile.items.length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mm-statbar">
                <div className="mm-s">
                  Orders today<b>126</b>
                </div>
                <div className="mm-s">
                  Avg. ticket<b>7.4 min</b>
                </div>
                <div className="mm-s">
                  On time<b className="mm-g">98%</b>
                </div>
              </div>
            </div>
            <div className="mm-mascot">
              <span className="mm-blob" />
              🧁
            </div>
          </div>
        </div>

        <div className="mm-trust">
          <span className="mm-lbl">Trusted by 500+ kitchens</span>
          <div className="mm-logos">
            {TRUST_NAMES.map((name) => (
              <span className="mm-lg" key={name}>
                <span className="mm-m" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
