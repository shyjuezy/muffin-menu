const TRUST_NAMES = [
  "Bistro Nord",
  "Harvest Kitchen",
  "The Daily Plate",
  "Urban Bowl Co.",
];

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-20 pb-12 text-center relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(29,109,181,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Announcement pill */}
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold mb-8"
        style={{
          background: "#EBF5FF",
          color: "#1D6DB5",
          border: "1px solid #BFDBFE",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
        New: Online ordering integration is now live
      </div>

      {/* Headline */}
      <h1
        className="text-6xl md:text-7xl font-black leading-none mb-6"
        style={{ color: "#111827", letterSpacing: "-2.5px" }}
      >
        The Restaurant OS
        <br />
        <span style={{ color: "#1D6DB5" }}>You&apos;ve Been Waiting For.</span>
      </h1>

      {/* Subtext */}
      <p className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-gray-500">
        One platform to manage your kitchen display, point of sale, menu, and
        analytics. Built for restaurants that refuse to compromise on speed or
        accuracy.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <a
          href="#"
          className="px-8 py-4 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
          style={{
            background: "#F4B223",
            color: "#1B3272",
            boxShadow: "0 6px 20px rgba(244,178,35,0.3)",
          }}
        >
          Start Free Trial — No Card Needed
        </a>
        <a
          href="#"
          className="px-8 py-4 rounded-xl text-base font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700"
        >
          Request a Demo
        </a>
      </div>

      {/* Trust line */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-400">
        <span>Trusted by teams at</span>
        {TRUST_NAMES.map((name, i) => (
          <span key={name} className="flex items-center gap-3">
            <span className="font-semibold text-gray-500">{name}</span>
            {i < TRUST_NAMES.length - 1 && (
              <span className="text-gray-300">·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
