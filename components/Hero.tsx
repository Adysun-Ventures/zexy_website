"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "3.75rem",
      }}
    >
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: "600px",
          height: "600px",
          background: "rgba(139, 92, 246, 0.18)",
          top: "-100px",
          right: "-150px",
        }}
      />
      <div
        className="orb"
        style={{
          width: "400px",
          height: "400px",
          background: "rgba(236, 72, 153, 0.12)",
          bottom: "100px",
          left: "-100px",
          animationDelay: "2s",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left: Content */}
        <div style={{ maxWidth: "580px" }}>
          {/* Badge */}
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8b5cf6", display: "inline-block" }} />
            Creator Monetization Platform
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Turn Followers
            <br />
            <span className="gradient-text">Into Income.</span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "1.1875rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "480px",
            }}
          >
            Zexy helps creators earn through subscriptions, live streams, and
            direct fan interaction — no algorithm required.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#cta" className="btn-primary" id="hero-start-earning">
              Start Earning Free
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn-secondary" id="hero-explore">
              <Play size={15} />
              How It Works
            </a>
          </div>

          {/* Social proof */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "50K+", label: "Active Creators" },
              { value: "$2M+", label: "Paid Out" },
              { value: "4.9★", label: "Creator Rating" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {value}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: App UI Mockup */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
          className="hero-mockup"
        >
          {/* Glow behind mockup */}
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(40px)",
              zIndex: 0,
            }}
          />

          {/* Main phone mockup */}
          <div
            style={{
              width: "280px",
              background: "#0d0d14",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: "2rem",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(139,92,246,0.2)",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            {/* Phone notch */}
            <div
              style={{
                background: "#050508",
                padding: "0.875rem 1.5rem 0.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "5px",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "9999px",
                }}
              />
            </div>

            {/* Profile header */}
            <div
              style={{
                padding: "1rem 1.25rem",
                background: "linear-gradient(180deg, rgba(139,92,246,0.15) 0%, transparent 100%)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.875rem" }}>
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  A
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#f4f4f8" }}>Alex Rivera</div>
                  <div style={{ fontSize: "0.6875rem", color: "#9898b0" }}>@alexcreates • 124K followers</div>
                </div>
              </div>

              {/* Earnings card */}
              <div
                style={{
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.2)",
                  borderRadius: "0.875rem",
                  padding: "1rem",
                  marginBottom: "0.875rem",
                }}
              >
                <div style={{ fontSize: "0.6875rem", color: "#9898b0", marginBottom: "0.25rem" }}>Monthly Earnings</div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#f4f4f8", letterSpacing: "-0.02em" }}>
                  $4,280
                </div>
                <div style={{ fontSize: "0.6875rem", color: "#8b5cf6", fontWeight: 600, marginTop: "0.25rem" }}>
                  ↑ +23% from last month
                </div>
              </div>

              {/* Revenue streams */}
              {[
                { label: "Subscriptions", value: "$2,100", pct: 70, color: "#8b5cf6" },
                { label: "Messages", value: "$980", pct: 45, color: "#ec4899" },
                { label: "Live Streams", value: "$1,200", pct: 55, color: "#06b6d4" },
              ].map(({ label, value, pct, color }) => (
                <div key={label} style={{ marginBottom: "0.625rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "0.6875rem", color: "#9898b0" }}>{label}</span>
                    <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#f4f4f8" }}>{value}</span>
                  </div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "9999px" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${pct}%`,
                        background: color,
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div
              style={{
                background: "#050508",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "0.875rem 1.5rem",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {["🏠", "💬", "🎥", "💰"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "1.125rem",
                    opacity: i === 3 ? 1 : 0.4,
                    cursor: "pointer",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Floating notification cards */}
          <div
            className="hero-float-card"
            style={{
              position: "absolute",
              top: "15%",
              right: "-20px",
              background: "rgba(13,13,20,0.95)",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: "0.875rem",
              padding: "0.75rem 1rem",
              backdropFilter: "blur(12px)",
              zIndex: 2,
              animation: "float 4s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <div style={{ fontSize: "0.6875rem", color: "#9898b0" }}>New subscriber 🎉</div>
            <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#f4f4f8" }}>+$29/mo</div>
          </div>

          <div
            className="hero-float-card"
            style={{
              position: "absolute",
              bottom: "20%",
              left: "-30px",
              background: "rgba(13,13,20,0.95)",
              border: "1px solid rgba(236,72,153,0.25)",
              borderRadius: "0.875rem",
              padding: "0.75rem 1rem",
              backdropFilter: "blur(12px)",
              zIndex: 2,
              animation: "float 5s ease-in-out infinite",
              animationDelay: "2.5s",
            }}
          >
            <div style={{ fontSize: "0.6875rem", color: "#9898b0" }}>Live stream tip 💜</div>
            <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#ec4899" }}>+$150</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2rem !important;
            padding: 2rem 1.25rem !important;
          }
          .hero-mockup {
            order: -1;
            margin: 0 auto;
          }
          .hero-float-card {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
