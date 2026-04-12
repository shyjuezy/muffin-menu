export function Testimonial() {
  return (
    <section className="py-20" style={{ background: "#F8FAFE" }}>
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div
          className="text-5xl mb-6"
          style={{ color: "#F4B223", fontFamily: "serif" }}
        >
          &ldquo;
        </div>
        <blockquote className="text-2xl font-semibold leading-relaxed mb-8 text-gray-900">
          We cut ticket errors by 80% in the first week. Our kitchen is running
          faster, the staff is less stressed, and customers keep coming back.
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
            style={{ background: "#1D6DB5" }}
          >
            MR
          </div>
          <div className="text-left">
            <div className="font-bold text-gray-900">Maria Rodriguez</div>
            <div className="text-sm text-gray-400">
              Owner, Casa Fuego — 3 locations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
