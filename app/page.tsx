import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Noise overlay for visual depth */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Fixed navigation */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* Social proof ticker */}
        <Ticker />

        {/* 2. What We Do + Monetization Features */}
        <Features />

        {/* Divider */}
        <div className="divider" />

        {/* 3. How It Works */}
        <HowItWorks />

        {/* Divider */}
        <div className="divider" />

        {/* 4. Benefits */}
        <Benefits />

        {/* Divider */}
        <div className="divider" />

        {/* 5. Screen Showcase */}
        <Showcase />

        {/* Divider */}
        <div className="divider" />

        {/* 6. Final CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
