import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";

export default function LaunchStablecoin() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection 
          title="Launch Your Institutional Stablecoin"
          subtitle="Deploy a compliant, scalable stablecoin with enterprise-grade infrastructure in 90 days. Transform your financial institution with a fully regulated stablecoin platform built for banks, payment processors, and fintech companies."
        />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection 
          title="The Stablecoin Distribution Challenge"
          subtitle="Traditional banking rails limit your stablecoin's reach and growth potential. Scaling stablecoin adoption through legacy infrastructure is slow, capital-intensive, and fails to reach mass markets while maintaining institutional compliance standards."
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="Enterprise Stablecoin Infrastructure"
          subtitle="A complete stack for minting, distributing, and managing institutional stablecoins across any blockchain network.\nFull regulatory compliance with real-time monitoring and automated policy enforcement."
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