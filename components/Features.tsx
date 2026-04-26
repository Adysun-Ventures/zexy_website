"use client";

import { DollarSign, MessageCircle, Radio, Users, Smartphone, Home } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Subscriptions",
    desc: "Build a predictable monthly income stream. Your fans subscribe for exclusive content, perks, and direct access to you.",
    tag: "Monthly Recurring",
    color: "#8b5cf6",
  },
  {
    icon: MessageCircle,
    title: "Paid Messaging",
    desc: "Set your rate and let fans slide into your DMs. You get paid for every conversation — your time has value.",
    tag: "Per Message",
    color: "#ec4899",
  },
  {
    icon: Radio,
    title: "Live Streaming",
    desc: "Host gated live sessions with paid access. Collect tips in real-time and deliver premium content live.",
    tag: "Real-time Income",
    color: "#06b6d4",
  },
  {
    icon: Users,
    title: "1:1 Calls",
    desc: "Offer premium access for personalized sessions. Coaching, consultations, or just a chat — you set the price.",
    tag: "Premium Access",
    color: "#f59e0b",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          <DollarSign size={20} />
          Monetization
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
          Every Way to Earn,{" "}
          <span className="gradient-text">In One Platform</span>
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Zexy is a monetization layer on top of your existing social presence.
          Stack multiple income streams and watch your revenue compound.
        </p>
      </div>

      {/* Feature cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {features.map(({ icon: Icon, title, desc, tag, color }) => (
          <div
            key={title}
            className="glass-card"
            style={{ padding: "2rem", position: "relative", overflow: "hidden" }}
          >
            {/* Subtle gradient background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "120px",
                height: "120px",
                background: `radial-gradient(circle at top right, ${color}18 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            {/* Icon */}
            <div
              className="icon-wrap"
              style={{
                marginBottom: "1.25rem",
                background: `${color}18`,
                border: `1px solid ${color}30`,
              }}
            >
              <Icon size={20} color={color} />
            </div>

            {/* Tag */}
            <div
              style={{
                display: "inline-block",
                background: `${color}15`,
                color: color,
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.25rem 0.625rem",
                borderRadius: "9999px",
                marginBottom: "0.875rem",
                border: `1px solid ${color}25`,
              }}
            >
              {tag}
            </div>

            <h3
              style={{
                fontSize: "1.1875rem",
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
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* What We Do strip */}
      <div
        style={{
          marginTop: "5rem",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          alignItems: "center",
        }}
        className="what-we-do"
      >
        <div>
          <div className="section-label">About Zexy</div>
          <h3
            style={{
              fontSize: "1.625rem",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            A monetization engine,{" "}
            <span className="gradient-text">not a social platform</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.9375rem" }}>
            Zexy sits on top of your existing social media presence. You keep
            your audience, your brand, and your content — we just help you
            turn it into consistent income.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          {[
            { icon: Smartphone, text: "Earn from subscriptions" },
            { icon: MessageCircle, text: "Get paid for messages" },
            { icon: Radio, text: "Host paid live streams" },
            { icon: Home, text: "Build your community" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: "0.875rem",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <Icon size={20} color="#8b5cf6" />
              <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .what-we-do {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
