"use client";

import { Rocket, Zap, Heart, Lock, Smartphone, DollarSign, Target, Globe } from "lucide-react";

const items = [
  { icon: Rocket, text: "$2M+ paid to creators" },
  { icon: Zap, text: "First payout in 7 days" },
  { icon: Heart, text: "50,000+ active creators" },
  { icon: Lock, text: "Your data, your audience" },
  { icon: Smartphone, text: "Works on any device" },
  { icon: DollarSign, text: "Multiple income streams" },
  { icon: Target, text: "Zero algorithm dependency" },
  { icon: Globe, text: "Payouts to 100+ countries" },
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
        {doubled.map(({ icon: Icon, text }, i) => (
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
              gap: "0.5rem",
            }}
          >
            <Icon size={16} color="var(--text-secondary)" />
            {text}
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
