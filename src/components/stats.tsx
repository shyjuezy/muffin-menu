// Honest, capability-based stats for a pre-traction launch — every value is a
// fact about the product, not a customer-count or rating we can't yet back up.
const STATS = [
  {
    value: "5-in-1",
    label: "POS, kitchen, menus, ordering & reporting",
    accent: true,
  },
  {
    value: "1 screen",
    label: "Front & back of house, connected",
    accent: false,
  },
  { value: "Real-time", label: "Every order, every channel", accent: false },
  {
    value: "Any device",
    label: "Runs on hardware you already own",
    accent: false,
  },
];

export function Stats() {
  return (
    <section className="mm-statsband">
      <div className="mm-wrap">
        <div className="mm-statgrid">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className={`mm-v${stat.accent ? " mm-am" : ""}`}>
                {stat.value}
              </div>
              <div className="mm-l">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
