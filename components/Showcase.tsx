"use client";

const screens = [
  {
    title: "Creator Profile",
    desc: "Your public face — bio, tiers, and a convert-ready link",
    emoji: "👤",
    accent: "#8b5cf6",
    preview: (
      <div style={{ padding: "1rem" }}>
        {/* Avatar + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              fontWeight: 700,
              color: "white",
            }}
          >
            M
          </div>
          <div>
            <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#f4f4f8" }}>Maya Chen</div>
            <div style={{ fontSize: "0.6875rem", color: "#9898b0" }}>Fashion & Lifestyle • 89K fans</div>
          </div>
        </div>
        {/* Tier cards */}
        {[
          { label: "Fan", price: "$9", desc: "Exclusive posts" },
          { label: "VIP", price: "$29", desc: "+ DM access" },
          { label: "Inner Circle", price: "$79", desc: "+ Monthly calls" },
        ].map((tier, i) => (
          <div
            key={tier.label}
            style={{
              background: i === 1 ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.04)",
              border: i === 1 ? "1px solid rgba(139,92,246,0.4)" : "1px solid rgba(255,255,255,0.06)",
              borderRadius: "0.625rem",
              padding: "0.625rem 0.75rem",
              marginBottom: "0.375rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#f4f4f8" }}>{tier.label}</div>
              <div style={{ fontSize: "0.625rem", color: "#9898b0" }}>{tier.desc}</div>
            </div>
            <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#8b5cf6" }}>{tier.price}/mo</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Live Stream",
    desc: "Gated live sessions with real-time tips and viewer count",
    emoji: "🎥",
    accent: "#ec4899",
    preview: (
      <div style={{ padding: "0" }}>
        {/* Stream area */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a0a2e, #0d0d14)",
            height: "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: "0.5rem 0.5rem 0 0",
          }}
        >
          <div style={{ fontSize: "2rem" }}>🎥</div>
          {/* LIVE badge */}
          <div
            style={{
              position: "absolute",
              top: "0.5rem",
              left: "0.75rem",
              background: "#ef4444",
              color: "white",
              fontSize: "0.5625rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              padding: "0.125rem 0.375rem",
              borderRadius: "9999px",
            }}
          >
            ● LIVE
          </div>
          {/* Viewer count */}
          <div
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.75rem",
              background: "rgba(0,0,0,0.5)",
              color: "#f4f4f8",
              fontSize: "0.5625rem",
              fontWeight: 600,
              padding: "0.125rem 0.375rem",
              borderRadius: "9999px",
            }}
          >
            👁 1,247
          </div>
        </div>
        {/* Chat area */}
        <div style={{ padding: "0.75rem" }}>
          {[
            { user: "fan001", msg: "Amazing stream! 🔥", color: "#8b5cf6" },
            { user: "jane_x", msg: "Sent $20 tip ❤️", color: "#ec4899" },
            { user: "creator_fan", msg: "You're incredible!", color: "#06b6d4" },
          ].map(({ user, msg, color }) => (
            <div key={user} style={{ marginBottom: "0.375rem" }}>
              <span style={{ fontSize: "0.625rem", fontWeight: 700, color }}>{user}: </span>
              <span style={{ fontSize: "0.625rem", color: "#9898b0" }}>{msg}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Chat Interface",
    desc: "Pay-to-message inbox with quick replies and emoji reactions",
    emoji: "💬",
    accent: "#06b6d4",
    preview: (
      <div style={{ padding: "0.75rem" }}>
        {/* Message thread */}
        {[
          { from: "fan", msg: "Hey! Huge fan of your work 👋", paid: "$5" },
          { from: "creator", msg: "Thanks so much! What can I help you with?", paid: null },
          { from: "fan", msg: "Would love your skincare routine!", paid: "$10" },
        ].map(({ from, msg, paid }, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: from === "creator" ? "flex-end" : "flex-start",
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                background: from === "creator" ? "rgba(139,92,246,0.25)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${from === "creator" ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "0.625rem",
                padding: "0.375rem 0.625rem",
              }}
            >
              {paid && (
                <div style={{ fontSize: "0.5625rem", color: "#06b6d4", fontWeight: 700, marginBottom: "0.125rem" }}>
                  Paid {paid}
                </div>
              )}
              <div style={{ fontSize: "0.6875rem", color: "#f4f4f8" }}>{msg}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Earnings Dashboard",
    desc: "Real-time revenue tracking across all your income streams",
    emoji: "💰",
    accent: "#f59e0b",
    preview: (
      <div style={{ padding: "0.875rem" }}>
        {/* Total */}
        <div style={{ marginBottom: "0.875rem" }}>
          <div style={{ fontSize: "0.625rem", color: "#9898b0" }}>Total This Month</div>
          <div style={{ fontSize: "1.375rem", fontWeight: 800, color: "#f4f4f8", letterSpacing: "-0.02em" }}>
            $6,420
          </div>
          <div style={{ fontSize: "0.625rem", color: "#22c55e", fontWeight: 600 }}>↑ +31% vs last month</div>
        </div>
        {/* Bars */}
        {[
          { label: "Subscriptions", value: 65, color: "#8b5cf6", amount: "$3,450" },
          { label: "Messages", value: 30, color: "#ec4899", amount: "$1,670" },
          { label: "Live Streams", value: 45, color: "#06b6d4", amount: "$1,300" },
        ].map(({ label, value, color, amount }) => (
          <div key={label} style={{ marginBottom: "0.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.2rem" }}>
              <span style={{ fontSize: "0.5625rem", color: "#9898b0" }}>{label}</span>
              <span style={{ fontSize: "0.5625rem", fontWeight: 600, color: "#f4f4f8" }}>{amount}</span>
            </div>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "9999px" }}>
              <div style={{ height: "100%", width: `${value}%`, background: color, borderRadius: "9999px" }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(236,72,153,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ display: "inline-flex" }}>
            📱 Platform Preview
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Everything you need,{" "}
            <span className="gradient-text">beautifully built</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--text-secondary)",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A polished platform your fans will love using and you'll love
            getting paid from.
          </p>
        </div>

        {/* Screen cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
          }}
          className="showcase-grid"
        >
          {screens.map(({ title, desc, accent, preview }) => (
            <div
              key={title}
              className="glass-card"
              style={{
                overflow: "hidden",
                padding: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Screen mock header */}
              <div
                style={{
                  background: "var(--bg-secondary)",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.625rem 0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: "0.4375rem",
                      height: "0.4375rem",
                      borderRadius: "50%",
                      background: c,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>

              {/* Preview content */}
              <div
                style={{
                  flex: 1,
                  background: "#0d0d14",
                  borderBottom: "1px solid var(--border)",
                  minHeight: "200px",
                  overflow: "hidden",
                }}
              >
                {preview}
              </div>

              {/* Label */}
              <div style={{ padding: "1rem 1.25rem" }}>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .showcase-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .showcase-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
