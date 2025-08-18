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
    icon: Target,
    title: "The Digital Dollar Race is Live", 
    description: "The GENIUS Act and MiCA provide clear mandates on stablecoins. Competitors are using them to offer 24/7 settlement to your clients. Lead the multi-trillion dollar payments market or watch your deposits walk away."
    },
  {
    icon: Shield,
    title: "AuM is Bleeding to On-Chain Yield",
    description: "Your AUM is bleeding to DeFi yield. You can either offer institutional-grade DeFi products to stop the outflow, or become a low-margin on-ramp."
  },
  {
    icon: Clock,
    title: "Manual Operations are a Disqualifier",
    description: "Institutional LPs require automated, auditable controls. Agile funds with superior operations are winning mandates while others risk catastrophic, multi-million dollar errors."
  }
];

const homepageWhyNowReasons2 = [
  {
    icon: Target,
    title: "Regulators Have Given You the Green Light", 
    description: "With frameworks like GENIUS and MiCA providing clarity, the first institutions to market will capture infrastructure-level network effects and lock in the most valuable clients."
    },
  {
    icon: Shield,
    title: "Your Clients Are Being Pitched Daily",
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
