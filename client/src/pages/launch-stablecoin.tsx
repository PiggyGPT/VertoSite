import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { Zap, Store, ShieldCheck, Crown, Rocket, CheckCircle, DollarSign, Plug, CreditCard, TrendingUp, GitMerge, Lock, Server, Globe } from "lucide-react";
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png"; 
import nileshImage from "@assets/nilesh_1754986415369.png";
import { updatePageSEO } from "@/lib/seo";

// Define custom CTAs for stablecoin landing page
const stablecoinCTAs = [
  {
    title: "Integrate Your Systems",
    subtitle: "Deploy our full stack on your servers and eliminate counterparty risk.",
    icon: Plug,
    href: "#infrastructure",
    pillarKey: "distribution",
    bgGradient: "linear-gradient(135deg, rgba(255, 152, 0, 0.06), rgba(255, 152, 0, 0.02))",
    glowColor: "hsl(30, 80%, 62%)"
  },
  {
    title: "Capture Dollar Liquidity",
    subtitle: "Attract LPs to securely seed dollar liquidity and earn yield with our DEX.",
    icon: DollarSign,
    href: "#infrastructure",
    pillarKey: "trading",
    bgGradient: "linear-gradient(135deg, rgba(82, 178, 255, 0.06), rgba(82, 178, 255, 0.02))",
    glowColor: "hsl(225, 80%, 58%)"
  },
  {
    title: "Unlock Global Coverage",
    subtitle: "Enable Traders to easily transact with any bank or wallet with our Router.",
    icon: Globe,
    href: "#infrastructure",
    pillarKey: "payments",
    bgGradient: "linear-gradient(135deg, rgba(191, 115, 255, 0.06), rgba(191, 115, 255, 0.02))",
    glowColor: "hsl(270, 75%, 65%)"
  },
  {
    title: "Own The Rails",
    subtitle: "Automate issuance, redemption, and reconciliation with our APIs.",
    icon: Server,
    href: "#infrastructure",
    pillarKey: "compliance",
    bgGradient: "linear-gradient(135deg, rgba(76, 175, 80, 0.06), rgba(76, 175, 80, 0.02))",
    glowColor: "hsl(127, 80%, 45%)"
  }
];

// Custom Why Now content for stablecoin page targeting financial institutions
const stablecoinWhyNowReasons = [
  {
    icon: Crown,
    title: "Bypass Costly Payment Intermediaries",
    description: "Empower clients to transact directly across borders—eliminating billions in daily fees and settlement delays while reclaiming control from traditional rails."
  },
  {
    icon: Rocket,
    title: "Win the Institutional Dollar Race",
    description: "Attract premium deposits with 24/7 programmable yield and cross-border utility. Monetize reserves at scale—proven by Circle and Tether's revenue models."
  },
  {
    icon: CheckCircle,
    title: "Act on Regulatory Mandates",
    description: "MiCA and GENIUS Acts are deliberate calls to action from regulators for you to set the market standard and secure a lasting first-mover advantage."
  }
];

export default function LaunchStablecoin() {
  useEffect(() => {
    updatePageSEO('launch-stablecoin');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection 
          title={`Launch Your Stablecoin.
Attract Global Dollars.`}
          subtitle="Make your asset liquid against dollar stablecoins with our self-hosted, full-stack infrastructure."
          customCTAs={stablecoinCTAs}
        />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection 
          title="From Minting to Market Adoption"
          subtitle="Stablecoins succeed when they're widely held, actively spent, and deeply trusted."
          customQuotes={[
            {
              icon: "Landmark",
              color: "verto-blue",
              persona: "CEO",
              company: "National Bank",
              quote: "We're a cash-first economy serving 50 million customers. How do we scale stablecoin distribution and usage across our entire agent network while maintaining the trust our customers have in physical cash?"
            },
            {
              icon: "CreditCard",
              color: "verto-purple", 
              persona: "Head of Payments",
              company: "Regional Bank",
              quote: "Merchants can't reconcile stablecoin transactions like traditional card payments, and wallet pop-ups kill checkout conversion. We need payments to work like Stripe but with stablecoins."
            },
            {
              icon: "Shield",
              color: "verto-green",
              persona: "CISO", 
              company: "Digital Bank",
              quote: "Our systems are built on centralized control. How do we enforce our risk policies and deliver regulator-proof audit trails for every transaction on public chains we don't control?"
            }
          ]}
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="One Unified Platform"
          subtitle="Self-hosted stack for stablecoin trading, payments, and asset distribution. Monitored 24×7 by global experts with AI-automated compliance."
          customOrder={["distribution", "payments", "trading", "compliance", "service"]}
        />
      </div>
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