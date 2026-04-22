"use client";

const items = [
  "🚀 $2M+ paid to creators",
  "⚡ First payout in 7 days",
  "💜 50,000+ active creators",
  "🔒 Your data, your audience",
  "📱 Works on any device",
  "💸 Multiple income streams",
  "🎯 Zero algorithm dependency",
  "🌍 Payouts to 100+ countries",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        background: "rgba(139,92,246,0.06)",
        borderTop: "1px solid rgba(139,92,246,0.12)",
        borderBottom: "1px solid rgba(139,92,246,0.12)",
        padding: "0.875rem 0",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              padding: "0 2.5rem",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(139,92,246,0.5)",
                marginLeft: "2.5rem",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
