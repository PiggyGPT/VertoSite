import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import Footer from "@/components/footer";
import CompetitiveDiffSection from "@/components/competitive-diff-section";
import PillarsSection from "@/components/pillars-new-section";
import {
  Zap,
  Store,
  ShieldCheck,
  Crown,
  Rocket,
  CheckCircle,
  DollarSign,
  Plug,
  CreditCard,
  TrendingUp,
  GitMerge,
  Lock,
  Server,
  Globe,
} from "lucide-react";
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import nileshImage from "@assets/nilesh_1754986415369.png";
import { updatePageSEO } from "@/lib/seo";

// Define custom CTAs for stablecoin landing page
const stablecoinCTAs = [
  {
    title: "Capture Dollar Liquidity",
    subtitle:
      "Enable LPs to securely seed dollar liquidity and earn yield with our DEX.",
    icon: DollarSign,
    href: "#infrastructure",
    pillarKey: "trading",
    bgGradient:
      "linear-gradient(135deg, rgba(82, 178, 255, 0.06), rgba(82, 178, 255, 0.02))",
    glowColor: "hsl(225, 80%, 58%)",
  },
  {
    title: "Unlock Global Coverage",
    subtitle:
      "Enable Traders to easily transact with any bank or wallet with our Router.",
    icon: Globe,
    href: "#infrastructure",
    pillarKey: "payments",
    bgGradient:
      "linear-gradient(135deg, rgba(191, 115, 255, 0.06), rgba(191, 115, 255, 0.02))",
    glowColor: "hsl(270, 75%, 65%)",
  },
  {
    title: "Integrate Your Systems",
    subtitle: "Automate issuance, redemption and reconciliation with our APIs.",
    icon: Plug,
    href: "#infrastructure",
    pillarKey: "distribution",
    bgGradient:
      "linear-gradient(135deg, rgba(255, 152, 0, 0.06), rgba(255, 152, 0, 0.02))",
    glowColor: "hsl(30, 80%, 62%)",
  },
  {
    title: "Own The Rails",
    subtitle:
      "Deploy our full stack on your servers and eliminate counterparty risk.",
    icon: Server,
    href: "#infrastructure",
    pillarKey: "compliance",
    bgGradient:
      "linear-gradient(135deg, rgba(76, 175, 80, 0.06), rgba(76, 175, 80, 0.02))",
    glowColor: "hsl(127, 80%, 45%)",
  },
];

// Custom Why Now content for stablecoin page targeting financial institutions
const stablecoinWhyNowReasons = [
  {
    icon: Crown,
    title: "Bypass Costly Payment Intermediaries",
    description:
      "Empower clients to transact directly across borders—eliminating billions in daily fees and settlement delays while reclaiming control from traditional rails.",
  },
  {
    icon: Rocket,
    title: "Win the Institutional Dollar Race",
    description:
      "Attract premium deposits with 24/7 programmable yield and cross-border utility. Monetize reserves at scale—proven by Circle and Tether's revenue models.",
  },
  {
    icon: CheckCircle,
    title: "Act on Regulatory Mandates",
    description:
      "MiCA and GENIUS Acts are deliberate calls to action from regulators for you to set the market standard and secure a lasting first-mover advantage.",
  },
];

export default function LaunchStablecoin() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    updatePageSEO("launch-stablecoin");
  }, []);

  useEffect(() => {
    const handlePillarActivate = (e: Event) => {
      const customEvent = e as CustomEvent;
      const pillarKey = customEvent.detail;
      const keys = ["distribution", "trading", "payments", "service"];
      setCurrentStep(keys.indexOf(pillarKey));
    };

    window.addEventListener('activatePillar', handlePillarActivate);
    return () => window.removeEventListener('activatePillar', handlePillarActivate);
  }, []);

  return (
    <div className="min-h-screen transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection currentStep={currentStep} onPillarClick={(index) => setCurrentStep(index)} />
      </div>
      <div id="infrastructure">
        <PillarsSection />
      </div>
      <div id="pillar-end"></div>
      <CompetitiveDiffSection />
      <BoardChecklistSection />
      <div id="pilot">
        <ProblemSection
          title="Why Now?"
          subtitle="Your core business is now in a time-sensitive technology race.
          Lead the market or be left behind."
          customQuotes={[
            {
              icon: "CreditCard",
              color: "albor-blue",
              persona: "Head of Corporate Banking",
              company: "Panama Bank",
              quote:
                "Our corporate clients are fleeing their treasuries to USDC for T+0 settlements. We need to match their offerings to pull that liquidity back onto our balance sheets.",
            },
            {
              icon: "Shield",
              color: "albor-green",
              persona: "Economic Advisor",
              company: "Bolivian Central Bank",
              quote:
                "The rise in USDT has been draining our dollar reserves and inflating our currency. We need to formalize this demand and restore FX liquidity to the Boliviano.",
            },
            {
              icon: "BarChart3",
              color: "albor-gold",
              persona: "CEO",
              company: "Guatemala Commodities",
              quote:
                "Our Gold instruments can't compete with PAXG's 24/7 global access and liquidity against USDC. We need to compete in the same pools to capture that market share.",
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}
