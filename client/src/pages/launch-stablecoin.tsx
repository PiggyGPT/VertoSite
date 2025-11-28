import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      // Dark mode colors: start dark, transition to warm orange
      const darkColors = [
        "#070911", // 0%
        "#070911", // 15%
        "#0A0D15", // 30%
        "#0F1218", // 45%
        "#15151C", // 60%
        "#1A1818", // 75%
        "#261E14", // 88%
        "#3A280E", // 100% - warm orange
      ];

      // Light mode colors: start white, transition to warm golden cream
      const lightColors = [
        "#FFFFFF", // 0%
        "#FFFFFF", // 15%
        "#FFFEFB", // 30%
        "#FFFBF3", // 45%
        "#FFF7E8", // 60%
        "#FFF2DA", // 75%
        "#FFEBCC", // 88%
        "#FFC880", // 100% - warm golden
      ];

      // Use dark mode colors
      const colors = darkColors;

      // Interpolate between colors based on scroll position
      for (let i = 0; i < colors.length; i++) {
        const colorIndex = i + 1;
        const currentColor = colors[i];
        const nextColor = colors[Math.min(i + 1, colors.length - 1)];
        
        // Blend colors based on scroll position
        const colorProgress = scrollPercent * (colors.length - 1);
        const blendFactor = Math.max(0, Math.min(1, colorProgress - i));
        
        // Update CSS variable
        const root = document.documentElement;
        root.style.setProperty(`--dawn-color-${colorIndex}`, currentColor);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen transition-colors dawn-gradient">
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
              quote:
                "We're a cash-first economy serving 50 million customers. How do we scale stablecoin distribution and usage across our entire agent network while maintaining the trust our customers have in physical cash?",
            },
            {
              icon: "CreditCard",
              color: "verto-purple",
              persona: "Head of Payments",
              company: "Regional Bank",
              quote:
                "Merchants can't reconcile stablecoin transactions like traditional card payments, and wallet pop-ups kill checkout conversion. We need payments to work like Stripe but with stablecoins.",
            },
            {
              icon: "Shield",
              color: "verto-green",
              persona: "CISO",
              company: "Digital Bank",
              quote:
                "Our systems are built on centralized control. How do we enforce our risk policies and deliver regulator-proof audit trails for every transaction on public chains we don't control?",
            },
          ]}
        />
      </div>
      <div id="infrastructure">
        <PillarsSection
          title="One Unified Platform"
          subtitle="Self-hosted stack for stablecoin distribution, liquidity and payments. Monitored 24×7 by global experts with AI-automated compliance."
          customOrder={[
            "distribution",
            "payments",
            "trading",
            "compliance",
            "service",
          ]}
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
