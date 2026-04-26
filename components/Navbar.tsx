"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile && menuOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenuOpen(false);
    }
  }, [isMobile, menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Privacy", href: "/privacy-policy" },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled || menuOpen ? "rgba(5, 5, 8, 0.95)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        {/* Main bar */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.25rem",
            height: "3.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={handleLinkClick}
            style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
          >
            <Image
              src="/zexy_logo_nobg.png"
              alt="Zexy logo"
              width={36}
              height={36}
              priority
              style={{ objectFit: "contain", display: "block" }}
            />
          </a>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {label}
                </a>
              ))}
            </div>
          )}

          {/* Desktop CTAs */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a
                href="#cta"
                className="btn-secondary"
                style={{ padding: "0.5rem 1.125rem", fontSize: "0.875rem" }}
              >
                Log In
              </a>
              <a
                href="#cta"
                className="btn-primary"
                style={{ padding: "0.5rem 1.125rem", fontSize: "0.875rem" }}
              >
                Start Earning →
              </a>
            </div>
          )}

          {/* Mobile: right side — CTA + hamburger */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              {/* Compact primary CTA always visible */}
              <a
                href="#cta"
                className="btn-primary"
                style={{ padding: "0.4375rem 1rem", fontSize: "0.8125rem", gap: "0.25rem" }}
              >
                Join Free
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  background: menuOpen ? "rgba(139,92,246,0.12)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${menuOpen ? "rgba(139,92,246,0.35)" : "rgba(255,255,255,0.1)"}`,
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  padding: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  width: "2.25rem",
                  height: "2.25rem",
                  transition: "all 0.2s ease",
                  flexShrink: 0,
                }}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      width: "16px",
                      height: "2px",
                      background: menuOpen ? "#8b5cf6" : "var(--text-primary)",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                      transformOrigin: "center",
                      transform: menuOpen
                        ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                        : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                        : "scaleX(0)"
                        : "none",
                      opacity: menuOpen && i === 1 ? 0 : 1,
                    }}
                  />
                ))}
              </button>
            </div>
          )}
        </div>

        {/* Mobile dropdown menu */}
        {isMobile && (
          <div
            style={{
              maxHeight: menuOpen ? "420px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                padding: menuOpen ? "1.25rem 1.25rem 1.5rem" : "0 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                transition: "padding 0.2s ease",
              }}
            >
              {navLinks.map(({ label, href }, idx) => (
                <a
                  key={label}
                  href={href}
                  onClick={handleLinkClick}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "0.75rem 0.5rem",
                    borderBottom: idx < navLinks.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {label}
                  <span style={{ opacity: 0.35, fontSize: "0.75rem" }}>›</span>
                </a>
              ))}

              {/* Mobile CTAs */}
              <div
                style={{
                  marginTop: "1rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.625rem",
                }}
              >
                <a
                  href="#cta"
                  onClick={handleLinkClick}
                  className="btn-secondary"
                  style={{ justifyContent: "center", padding: "0.75rem", fontSize: "0.9rem" }}
                >
                  Log In
                </a>
                <a
                  href="#cta"
                  onClick={handleLinkClick}
                  className="btn-primary"
                  style={{ justifyContent: "center", padding: "0.75rem", fontSize: "0.9rem" }}
                >
                  Start Earning →
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
