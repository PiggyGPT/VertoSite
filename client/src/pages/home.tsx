import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { Shield, Target, Clock } from "lucide-react";
import { updatePageSEO } from "@/lib/seo";

const homepageWhyNowReasons = [
  {
    icon: Target,
    title: "Lose the Digital Dollar Race, Lose Relevance", 
    description: "Non-bank stablecoins already offer 24/7 settlement. GENIUS/MiCA gives you a narrow window to defend your core business with regulatory-compliant solutions."
  },
  {
    icon: Shield,
    title: "On-Chain Yield is Draining Your AUM",
    description: "Assets exit daily for higher yields you can't provide. This isn't just lost fees—it's permanent erosion of your institution's value base."
  },
  {
    icon: Clock,
    title: "Manual Workflows = Institutional Disqualification",
    description: "Catastrophic risk exposure + forfeited alpha + failed LP audits. Legacy operations now directly threaten your fund's survival."
  }
];

export default function Home() {
  useEffect(() => {
    updatePageSEO('home');
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
        <WhyNowSection customReasons={homepageWhyNowReasons} />
      </div>
      <Footer />
    </div>
  );
}
