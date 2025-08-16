import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    document.title = "VERTO — Launch your stablecoin in 90 days.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Digital Asset Operations Platform for trading, payments, and distribution on any chain.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection />
      </div>
      <div id="infrastructure">
        <PillarsSection />
      </div>
      <div id="pilot">
        <BoardChecklistSection />
        <WhyNowSection />
      </div>
      <Footer />
    </div>
  );
}
