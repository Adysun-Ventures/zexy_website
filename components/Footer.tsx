"use client";

import Image from "next/image";

const footerLinks = {
  Product: ["Features", "Pricing", "How It Works", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Contact", "Status", "Community"],
  Legal: [
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

const socials = [
  { label: "X (Twitter)", icon: "𝕏", href: "#" },
  { label: "Instagram", icon: "📷", href: "#" },
  { label: "TikTok", icon: "🎵", href: "#" },
  { label: "LinkedIn", icon: "💼", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                marginBottom: "1.25rem",
              }}
            >
              <Image
                src="/zexy_logo_nobg.png"
                alt="Zexy logo"
                width={110}
                height={44}
                style={{ objectFit: "contain" }}
              />
            </a>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                maxWidth: "260px",
              }}
            >
              The monetization engine for creators. Turn your followers into
              reliable, recurring income.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.625rem" }}>
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.5rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
                    e.currentTarget.style.background = "rgba(139,92,246,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--bg-card)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                {category}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {links.map((link) => {
                  const href = typeof link === 'string' ? '#' : link.href;
                  const label = typeof link === 'string' ? link : link.label;
                  return (
                    <a
                      key={label}
                      href={href}
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom row */}
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Zexy.live. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            Made with{" "}
            <span style={{ color: "#ec4899" }}>♥</span>
            {" "}for creators everywhere
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
