const BARS = [
  { h: 46, dim: true },
  { h: 62, dim: true },
  { h: 54, dim: true },
  { h: 78, dim: false },
  { h: 92, dim: false },
  { h: 70, dim: true },
  { h: 58, dim: true },
];

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const CHECKS = [
  "Sales, labor, and item data in real time — no spreadsheets",
  "Online & dine-in orders land on the same KDS, in order",
  "Menu changes propagate everywhere the moment you save",
  "Roll-up reporting across every location you operate",
];

export function Spotlight() {
  return (
    <section className="mm-sec" id="solutions">
      <div className="mm-wrap">
        <div className="mm-spot">
          <div>
            <span className="mm-kicker">One source of truth</span>
            <h2>The numbers add up — automatically.</h2>
            <p className="mm-lede">
              Every order from every channel flows into one ledger. Close out
              the night and your reporting is already done.
            </p>
            <ul className="mm-checklist">
              {CHECKS.map((c, i) => (
                <li key={i}>
                  <span className="mm-ck">✓</span> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="mm-spot-panel">
            <div className="mm-scr-top">
              <div className="mm-scr-title">📊 This week · All locations</div>
              <div className="mm-dots">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="mm-bars">
              {BARS.map((b, i) => (
                <div
                  key={i}
                  className={`mm-bar${b.dim ? " mm-dim" : ""}`}
                  style={{ height: `${b.h}%` }}
                />
              ))}
            </div>
            <div className="mm-barx">
              {DAYS.map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>
            <div className="mm-minirow">
              <span className="mm-name">Net sales</span>
              <span>
                <span className="mm-val">$48,920</span>
                <span className="mm-up">▲ 12%</span>
              </span>
            </div>
            <div className="mm-minirow">
              <span className="mm-name">Avg. ticket time</span>
              <span>
                <span className="mm-val">7.4 min</span>
                <span className="mm-up">▲ 5%</span>
              </span>
            </div>
            <div className="mm-minirow">
              <span className="mm-name">Top item · Brisket bowl</span>
              <span>
                <span className="mm-val">412 sold</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
