"use client";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    desc: "Set up your Zexy creator profile in under 2 minutes. Add your bio, niche, and profile photo.",
    emoji: "👤",
  },
  {
    number: "02",
    title: "Set Your Pricing",
    desc: "You're in control. Choose your subscription tiers, message rates, and live stream pricing.",
    emoji: "💲",
  },
  {
    number: "03",
    title: "Share Your Link",
    desc: "Drop your Zexy link in your bio across all social platforms. One link, all your income streams.",
    emoji: "🔗",
  },
  {
    number: "04",
    title: "Start Earning",
    desc: "Watch payments flow in. Get paid out directly to your bank — no delays, no gatekeeping.",
    emoji: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "6rem 1.5rem",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 60% 50%, rgba(139,92,246,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div className="section-label" style={{ display: "inline-flex" }}>
            ⚡ How It Works
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
            Up and running{" "}
            <span className="gradient-text">in 4 steps</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From zero to earning in minutes. No tech skills, no setup headaches.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
            position: "relative",
          }}
          className="steps-grid"
        >
          {/* Connector line (desktop only) */}
          <div
            className="connector-line"
            style={{
              position: "absolute",
              top: "3.5rem",
              left: "calc(12.5% + 1.5rem)",
              right: "calc(12.5% + 1.5rem)",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(236,72,153,0.3), transparent)",
              zIndex: 0,
            }}
          />

          {steps.map(({ number, title, desc, emoji }, index) => (
            <div
              key={number}
              className="glass-card"
              style={{
                padding: "2rem 1.5rem",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Step circle */}
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.1))",
                  border: "1px solid rgba(139,92,246,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  position: "relative",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{emoji}</span>
                {/* Step number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-6px",
                    width: "1.375rem",
                    height: "1.375rem",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.625rem",
                    fontWeight: 800,
                    color: "white",
                    border: "2px solid var(--bg-card)",
                  }}
                >
                  {index + 1}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Time badge */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: "9999px",
              padding: "0.625rem 1.25rem",
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
            }}
          >
            <span style={{ color: "#8b5cf6", fontWeight: 700 }}>⏱</span>
            Average setup time:{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>
              Under 5 minutes
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .connector-line {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
