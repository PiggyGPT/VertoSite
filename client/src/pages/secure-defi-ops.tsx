import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";

export default function SecureDefiOps() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection 
          title="Secure On-Chain Operations for Trading Firms"
          subtitle="Institutional-grade security and compliance for DeFi trading, yield farming, and asset management. Enable your trading desk to safely access on-chain opportunities with enterprise security controls, real-time compliance monitoring, and institutional custody integration."
        />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection 
          title="The DeFi Security Challenge"
          subtitle="Trading firms face significant security and compliance risks in DeFi operations. Traditional trading infrastructure lacks the specialized security and compliance controls needed for safe DeFi operations at institutional scale."
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="Institutional DeFi Security Platform"
          subtitle="A hardened platform for secure DeFi operations with real-time compliance monitoring and institutional custody integration.\nZero security incidents across $2.4B in managed assets with 60% better risk-adjusted returns."
        />
      </div>
      <div id="pilot">
        <BoardChecklistSection />
        <WhyNowSection />
      </div>
      <Footer />
    </div>
  );
}