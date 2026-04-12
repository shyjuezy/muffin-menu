const STATS = [
  { value: "500+", label: "Restaurants Active", color: "#1D6DB5" },
  { value: "50K+", label: "Orders Per Day", color: "#1D6DB5" },
  { value: "99.9%", label: "Platform Uptime", color: "#1D6DB5" },
  { value: "4.9★", label: "Average Rating", color: "#F4B223" },
];

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-12 text-gray-400">
          By the numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-5xl font-black mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
