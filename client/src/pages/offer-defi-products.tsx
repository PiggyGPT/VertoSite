import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { ShieldCheck, Store, Bot, Droplet, Target, Building } from "lucide-react";
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import nileshImage from "@assets/nilesh_1754986415369.png";
import { updatePageSEO } from "@/lib/seo";

// Define custom CTAs for DeFi products landing page
const defiProductsCTAs = [
  {
    title: "Institutional Liquidity",
    subtitle: "Compliant trade execution",
    icon: ShieldCheck,
    href: "#infrastructure",
    pillarKey: "trading",
    bgColorClass: "bg-verto-blue/15 dark:bg-verto-blue/20 hover:bg-verto-blue/25 dark:hover:bg-verto-blue/35",
    iconColor: "text-verto-blue dark:text-verto-blue group-hover:text-verto-blue-dark dark:group-hover:text-verto-blue-light"
  },
  {
    title: "Frictionless Checkout",
    subtitle: "One-tap payment experience",
    icon: Store,
    href: "#infrastructure",
    pillarKey: "payments",
    bgColorClass: "bg-verto-purple/15 dark:bg-verto-purple/20 hover:bg-verto-purple/25 dark:hover:bg-verto-purple/35",
    iconColor: "text-verto-purple dark:text-verto-purple group-hover:text-verto-purple-dark dark:group-hover:text-verto-purple-light"
  },
  {
    title: "AI-Powered Compliance",
    subtitle: "Automated risk management",
    icon: Bot,
    href: "#infrastructure",
    pillarKey: "compliance",
    bgColorClass: "bg-verto-cyan/15 dark:bg-verto-cyan/20 hover:bg-verto-cyan/25 dark:hover:bg-verto-cyan/35",
    iconColor: "text-verto-cyan dark:text-verto-cyan group-hover:text-verto-cyan-dark dark:group-hover:text-verto-cyan-light"
  }
];
const defiProductsWhyNowReasons = [
  {
    icon: Droplet,
    title: "Stop the AUM Hemorrhage",
    description: "Your premium clients are draining assets daily for on-chain yield. Without action, you'll remain a low-margin onboarding channel while competitors capture high-value DeFi activity."
  },
  {
    icon: Target,
    title: "DeFi = 10X Margin Potential", 
    description: "Demand for long-tail assets and structured yield is exploding. Capturing this transforms your exchange from trading venue to indispensable wealth platform."
  },
  {
    icon: Building,
    title: "Own the Institutional Gateway",
    description: "The GENIUS Act triggers a trillion-dollar capital migration. Become the regulated on-ramp for institutional DeFi access—before exchanges lock down this space."
  }
];

export default function OfferDefiProducts() {
  useEffect(() => {
    updatePageSEO('offer-defi-products');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection 
          title="Launch DeFi Products in 90 Days"
          subtitle="Integrate multi-chain DeFi protocols and liquidity pools into your platform, with AI-powered security & compliance."
          customCTAs={defiProductsCTAs}
        />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection 
          title="Purpose-Built for Your Operations"
          subtitle="Exchanges struggle to integrate DeFi protocols at scale with their standards of security and regulatory compliance."
          customQuotes={[
            {
              icon: "TrendingDown",
              color: "verto-blue",
              persona: "CEO",
              company: "Digital Asset Exchange",
              quote: "Our biggest threat is the 'withdraw to wallet' button. We've become a low-margin on-ramp to a high-margin ecosystem we don't control, all because we can't offer these products safely ourselves."
            },
            {
              icon: "Target",
              color: "verto-purple", 
              persona: "Head of Liquidity",
              company: "Crypto Exchange",
              quote: "DeFi has the deepest liquidity pools for long-tail assets, but accessing them securely is nearly impossible. We need institutional-grade infrastructure to tap into these markets safely."
            },
            {
              icon: "Shield",
              color: "verto-green",
              persona: "CISO", 
              company: "Trading Platform",
              quote: "How do deliver multi-chain DeFi products to clients with the same risk and compliance standards they already expect — without hiring an army?"
            }
          ]}
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="One Unified Platform"
          subtitle="Self-hosted stack to integrate multi-chain liquidity and DeFi protocols, with AI-powered risk management and compliance."
        />
      </div>
      <div id="pilot">
        <BoardChecklistSection />
        <WhyNowSection 
          customTitle="Why Now?"
          customSubtitle="The only path to sustainable profitability is through higher-margin DeFi products that stop client churn."
          customReasons={defiProductsWhyNowReasons}
        />
      </div>
      <Footer />
    </div>
  );
}