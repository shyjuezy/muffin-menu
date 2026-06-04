const STATS = [
  { value: "500+", label: "Restaurants active", accent: false },
  { value: "50K+", label: "Orders per day", accent: false },
  { value: "99.9%", label: "Platform uptime", accent: false },
  { value: "4.9★", label: "Average rating", accent: true },
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
