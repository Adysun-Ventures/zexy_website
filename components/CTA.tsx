"use client";

import { ArrowRight, Sparkles, Lock, Zap, DollarSign } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(236,72,153,0.05) 50%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(139,92,246,0.12)",
            border: "1px solid rgba(139,92,246,0.25)",
            color: "#8b5cf6",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            marginBottom: "2rem",
          }}
        >
          <Sparkles size={14} />
          Start Today — Free Forever
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--text-primary)",
            marginBottom: "1.5rem",
          }}
        >
          Start Monetizing{" "}
          <span className="gradient-text">Today</span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "1rem",
            fontWeight: 400,
          }}
        >
          Your content. Your rules.{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            Your revenue.
          </span>
        </p>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-muted)",
            marginBottom: "3rem",
          }}
        >
          Join 50,000+ creators already earning on Zexy.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <a
            href="#"
            className="btn-primary"
            id="cta-join-creator"
            style={{ fontSize: "1.0625rem", padding: "1rem 2.5rem" }}
          >
            Join as Creator
            <ArrowRight size={18} />
          </a>
          <a
            href="#features"
            className="btn-secondary"
            id="cta-learn-more"
            style={{ fontSize: "1.0625rem", padding: "1rem 2.5rem" }}
          >
            Learn More
          </a>
        </div>

        {/* Trust indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: Lock, text: "No credit card required" },
            { icon: Zap, text: "Setup in 5 minutes" },
            { icon: DollarSign, text: "First payout in 7 days" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "var(--text-muted)",
              }}
            >
              <Icon size={16} color="var(--text-muted)" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background:
            "radial-gradient(ellipse at bottom, rgba(139,92,246,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
