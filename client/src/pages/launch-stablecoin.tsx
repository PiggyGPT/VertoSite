import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { Zap, Store, ShieldCheck } from "lucide-react";

// Define custom CTAs for stablecoin landing page
const stablecoinCTAs = [
  {
    title: "On-Demand Issuance",
    subtitle: "Real-time minting & distribution",
    icon: Zap,
    href: "#infrastructure",
    pillarKey: "distribution",
    bgColorClass: "bg-verto-green/15 dark:bg-verto-green/20 hover:bg-verto-green/25 dark:hover:bg-verto-green/35",
    iconColor: "text-verto-green dark:text-verto-green group-hover:text-verto-green-dark dark:group-hover:text-verto-green-light"
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
    title: "Compliant Liquidity",
    subtitle: "Institutional trading access",
    icon: ShieldCheck,
    href: "#infrastructure",
    pillarKey: "liquidity",
    bgColorClass: "bg-verto-blue/15 dark:bg-verto-blue/20 hover:bg-verto-blue/25 dark:hover:bg-verto-blue/35",
    iconColor: "text-verto-blue dark:text-verto-blue group-hover:text-verto-blue-dark dark:group-hover:text-verto-blue-light"
  }
];

export default function LaunchStablecoin() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection 
          title="Launch Your Stablecoin in 90 Days"
          subtitle="Activate your network with Verto's complete operational stack for stablecoin distribution, payments, and AI-powered security & compliance."
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
              quote: "We're a cash-first economy serving 50 million customers. How do we scale stablecoin distribution and usage across our entire agent network with minimal friction while maintaining the trust our customers have in physical cash?"
            },
            {
              icon: "CreditCard",
              color: "verto-purple", 
              persona: "Head of Payments",
              company: "Regional Bank",
              quote: "Merchants can't reconcile stablecoin transactions like traditional card payments, and wallet pop-ups are killing our checkout conversion rates. We need payment rails that work like Stripe but with stablecoins."
            },
            {
              icon: "Shield",
              color: "verto-green",
              persona: "CISO", 
              company: "Digital Bank",
              quote: "Our systems are built on centralized control. How do we enforce our risk policies and deliver regulator-proof audit trails for every transaction on public chains without compromising security?"
            }
          ]}
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="One Unified Platform"
          subtitle="A self-hosted stack for stablecoin trading, payments, and asset distribution. Monitored 24×7 by global experts with AI-automated compliance."
        />
      </div>
      <div id="pilot">
        <BoardChecklistSection />
        <WhyNowSection />
      </div>
      <Footer />
    </div>
  );
}