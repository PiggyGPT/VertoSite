import { useEffect } from "react";
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
  useEffect(() => {
    updatePageSEO("launch-stablecoin");
  }, []);



  return (
    <div className="min-h-screen transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="team">
        <ProblemSection
          title="Join the $300B Market or Cede to It"
          subtitle="Tether and Circle are actively competing for your clients and their liquidity."
          customQuotes={[
            {
              icon: "CreditCard",
              color: "verto-blue",
              persona: "Head of Corporate Banking",
              company: "Panama",
              quote:
                "Our corporate clients are fleeing their treasuries to USDC for T+0 settlements. We need to launch our own digital dollar to pull that liquidity back onto our balance sheets.",
            },
            {
              icon: "Shield",
              color: "verto-green",
              persona: "Central Bank Advisor",
              company: "Bolivia",
              quote:
                "The rise in USDT has been draining our FX reserves and inflating our currency. We need a regulated stablecoin to formalize this demand and restore dollar liquidity to the Boliviano.",
            },
            {
              icon: "BarChart3",
              color: "verto-purple",
              persona: "CEO, Commodities Exchange",
              company: "Guatemala",
              quote:
                "Our Gold ETF can't compete with PAXG's 24/7 liquidity against USDC. We need our own tokenized gold to compete in the same pools and capture that market share.",
            },
          ]}
        />
      </div>
      <div id="infrastructure">
        <PillarsSection />
      </div>
      <CompetitiveDiffSection />
      <div id="pilot">
        <BoardChecklistSection />
        <WhyNowSection
          customTitle="Why Now?"
          customSubtitle="The window to defend your deposit franchise and lead the future of payments is narrowing rapidly."
          customReasons={stablecoinWhyNowReasons}
        />
      </div>
      <Footer />
    </div>
  );
}
