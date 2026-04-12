export function Cta() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div
          className="rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1D6DB5 0%, #155299 100%)",
          }}
        >
          {/* Gold ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 70% 50%, rgba(244,178,35,0.18), transparent 60%)",
            }}
          />

          <h2
            className="text-4xl md:text-5xl font-black mb-4 relative"
            style={{ letterSpacing: "-1px" }}
          >
            Start for Free. Scale as You Grow.
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto relative"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            No contracts. No setup fees. Works on hardware you already own. Up
            and running in under 3 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <a
              href="#"
              className="px-8 py-4 rounded-xl text-base font-bold transition-opacity hover:opacity-90"
              style={{
                background: "#F4B223",
                color: "#1B3272",
                boxShadow: "0 6px 20px rgba(244,178,35,0.3)",
              }}
            >
              Get Started Free →
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-colors hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "white",
              }}
            >
              Talk to Sales
            </a>
          </div>

          <p
            className="mt-6 text-sm relative"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            No credit card required · 30-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
