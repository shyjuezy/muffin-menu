type Urgency = "green" | "amber" | "red";

interface Ticket {
  table: string;
  type: string;
  time: string;
  urgency: Urgency;
  items: string[];
  action: string;
}

const TICKETS: Ticket[] = [
  {
    table: "TABLE 2",
    type: "Dine-in",
    time: "1:42",
    urgency: "green",
    items: ["× 1 Chicken Wrap", "× 2 Sweet Potato Fries", "  └ Extra crispy"],
    action: "BUMP ✓",
  },
  {
    table: "TABLE 5",
    type: "Dine-in",
    time: "6:11",
    urgency: "amber",
    items: [
      "× 1 Ribeye Steak",
      "  └ Medium rare",
      "× 1 House Salad",
      "× 1 Garlic Bread",
    ],
    action: "IN PROGRESS",
  },
  {
    table: "TAKEOUT #88",
    type: "Pickup",
    time: "12:33",
    urgency: "red",
    items: ["× 3 BBQ Pulled Pork", "× 3 Coleslaw", "× 2 Corn Bread"],
    action: "URGENT !",
  },
  {
    table: "TABLE 9",
    type: "Dine-in",
    time: "0:55",
    urgency: "green",
    items: ["× 2 Veggie Bowl", "  └ No onions", "× 1 Fresh Lemonade"],
    action: "BUMP ✓",
  },
];

const URGENCY_STYLES: Record<
  Urgency,
  {
    border: string;
    badge: string;
    badgeText: string;
    btn: string;
    btnText: string;
  }
> = {
  green: {
    border: "#22c55e",
    badge: "rgba(34,197,94,0.15)",
    badgeText: "#4ade80",
    btn: "rgba(34,197,94,0.2)",
    btnText: "#4ade80",
  },
  amber: {
    border: "#F4B223",
    badge: "rgba(244,178,35,0.15)",
    badgeText: "#F4B223",
    btn: "rgba(244,178,35,0.2)",
    btnText: "#F4B223",
  },
  red: {
    border: "#ef4444",
    badge: "rgba(239,68,68,0.15)",
    badgeText: "#f87171",
    btn: "rgba(239,68,68,0.2)",
    btnText: "#f87171",
  },
};

function KdsTicket({ ticket }: { ticket: Ticket }) {
  const s = URGENCY_STYLES[ticket.urgency];
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "rgba(255,255,255,0.07)",
        borderLeft: `3px solid ${s.border}`,
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="text-xs font-bold text-white">{ticket.table}</div>
          <div
            className="text-xs mt-0.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {ticket.type}
          </div>
        </div>
        <span
          className="text-xs px-1.5 py-0.5 rounded font-bold"
          style={{ background: s.badge, color: s.badgeText }}
        >
          {ticket.time}
        </span>
      </div>
      <div className="space-y-1.5 text-xs mb-4">
        {ticket.items.map((item, i) => (
          <div
            key={i}
            style={{
              color: item.startsWith("  └") ? "rgba(255,255,255,0.4)" : "white",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        className="w-full py-1.5 rounded-lg text-xs font-semibold"
        style={{ background: s.btn, color: s.btnText }}
      >
        {ticket.action}
      </button>
    </div>
  );
}

export function KdsPreview() {
  return (
    <section className="max-w-5xl mx-auto px-8 pb-24">
      <div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{ border: "1px solid #e5e7eb" }}
      >
        {/* Browser chrome */}
        <div
          className="px-5 py-3 flex items-center gap-2"
          style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "#F4B223" }}
            />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div
            className="mx-auto text-xs font-medium px-20 py-1 rounded-md"
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              color: "#9ca3af",
            }}
          >
            app.muffinmenu.com/kitchen
          </div>
          <div className="w-14" />
        </div>

        {/* KDS screen */}
        <div className="p-5" style={{ background: "#0F1F4A" }}>
          {/* KDS header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-sm">
                Kitchen Display
              </span>
              <span
                className="text-xs px-2 py-1 rounded-full font-semibold"
                style={{
                  background: "rgba(34,197,94,0.18)",
                  color: "#4ade80",
                }}
              >
                ● Live
              </span>
            </div>
            <div
              className="flex items-center gap-4 text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <span>All Stations</span>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              <span>6 active orders</span>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              <span>Avg: 7.4 min</span>
            </div>
          </div>

          {/* Tickets */}
          <div className="grid grid-cols-4 gap-3">
            {TICKETS.map((ticket) => (
              <KdsTicket key={ticket.table} ticket={ticket} />
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-4 text-gray-400">
        Real-time kitchen display — updates the instant an order is placed
      </p>
    </section>
  );
}
