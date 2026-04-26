"use client";

import {
  CheckCircle2,
  Building2,
  Radio,
  DollarSign,
  Handshake,
  Wrench,
  Globe,
  Sparkles,
  X,
  Check,
} from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Own Your Audience",
    desc: "Your fan list is yours. Export, message, and connect — no platform can take it away.",
  },
  {
    icon: Radio,
    title: "No Algorithm Dependency",
    desc: "Stop begging the feed gods. Subscribers see your content because they chose to.",
  },
  {
    icon: DollarSign,
    title: "Recurring Income",
    desc: "Monthly subscriptions build a stable income baseline that grows month over month.",
  },
  {
    icon: Handshake,
    title: "Direct Fan Connection",
    desc: "Talk to your fans directly. Build relationships that go beyond likes and comments.",
  },
  {
    icon: Wrench,
    title: "Built for Creators",
    desc: "Every feature is designed around creator needs — not advertisers, not brands.",
  },
  {
    icon: Globe,
    title: "Works Alongside Everything",
    desc: "Use Zexy alongside Instagram, TikTok, YouTube, or X. It's additive, not exclusive.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
          marginBottom: "4rem",
        }}
        className="benefits-header"
      >
        <div>
          <div className="section-label" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Sparkles size={20} />
            Why Zexy
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Built for creators who are{" "}
            <span className="gradient-text">done waiting</span>
          </h2>
        </div>
        <div style={{ paddingTop: "0.5rem" }}>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            You&apos;ve built an audience. You&apos;ve put in the work. Now it&apos;s time for
            that work to pay — literally. Zexy gives you the tools to convert
            attention into reliable income.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}
          >
            {["No rev-share surprises", "Instant payouts", "Cancel anytime"].map(
              (point) => (
                <div
                  key={point}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                  }}
                >
                  <CheckCircle2 size={16} color="#8b5cf6" />
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {point}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Benefits grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
        }}
        className="benefits-grid"
      >
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="glass-card"
            style={{ padding: "1.75rem" }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                lineHeight: 1,
              }}
            >
              <Icon size={32} color="#8b5cf6" />
            </div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
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

      {/* Comparison strip */}
      <div
        style={{
          marginTop: "5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }}
        className="comparison-grid"
      >
        {/* Without Zexy */}
        <div
          style={{
            background: "rgba(239,68,68,0.04)",
            border: "1px solid rgba(239,68,68,0.12)",
            borderRadius: "1.25rem",
            padding: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: "#ef4444",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <X size={16} color="#ef4444" />
            Without Zexy
          </div>
          {[
            "Algorithm controls your reach",
            "Brand deals as only income",
            "Platform can demonetize you",
            "No direct fan relationship",
            "Revenue unpredictable",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "0.75rem",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              <X size={16} color="#ef4444" style={{ flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>

        {/* With Zexy */}
        <div
          style={{
            background: "rgba(139,92,246,0.06)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: "1.25rem",
            padding: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: "#8b5cf6",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Check size={16} color="#8b5cf6" />
              With Zexy
            </div>
          </div>
          {[
            "Direct subscriber access",
            "Multiple income streams",
            "You own your revenue",
            "Deep fan relationships",
            "Predictable monthly income",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "0.75rem",
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
              }}
            >
              <Check size={16} color="#8b5cf6" style={{ flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-header, .comparison-grid { grid-template-columns: 1fr !important; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
