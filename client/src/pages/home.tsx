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

// Optimized Why Now content for homepage - cross-cutting institutional urgency
const homepageWhyNowReasons = [
  {
    icon: Shield,
    title: "New Digital Asset Regulations Active January 2026",
    description: "EU MiCA and other frameworks require operational compliance by January 2026. Deploy infrastructure now to meet regulatory deadlines and avoid last-minute implementation costs."
  },
  {
    icon: Target,
    title: "87% of Institutional Clients Plan Digital Asset Adoption", 
    description: "Banks report losing $2.3B in corporate treasury deposits to stablecoin issuers in 2024. Exchanges see 40% of AUM withdraw for DeFi yields they cannot offer."
  },
  {
    icon: Clock,
    title: "First-Mover Advantage Window Closes Q2 2025",
    description: "Market research shows institutional digital asset infrastructure contracts have 3-year average terms. The window to secure these relationships closes in Q2 2025."
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
