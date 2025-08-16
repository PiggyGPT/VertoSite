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

// Optimized Why Now content for homepage - cross-cutting institutional urgency
const homepageWhyNowReasons = [
  {
    icon: Shield,
    title: "Regulatory Clarity Creates Competitive Windows",
    description: "With frameworks like MiCA providing clear operational guidelines, the excuse to wait is gone. First movers will capture infrastructure-level network effects and lock in the most valuable institutional relationships."
  },
  {
    icon: Target,
    title: "Your Most Valuable Clients Are Being Pitched Daily", 
    description: "Whether it's banks losing deposits to non-bank stablecoins, exchanges bleeding AUM to DeFi yields, or funds missing alpha due to manual operations—your competitors are already solving these problems."
  },
  {
    icon: Clock,
    title: "The Cost of Waiting Is the Opportunity Itself",
    description: "Every day spent building in-house infrastructure or managing operational risk manually is quantifiable lost revenue. The market is moving to institutional-grade digital asset operations now."
  }
];

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
        <WhyNowSection customReasons={homepageWhyNowReasons} />
      </div>
      <Footer />
    </div>
  );
}
