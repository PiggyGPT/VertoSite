import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { ShieldCheck, Bot, Headphones } from "lucide-react";

// Define custom CTAs for secure DeFi ops landing page
const secureOpsCTAs = [
  {
    title: "Compliant Liquidity",
    subtitle: "Institutional trading access",
    icon: ShieldCheck,
    href: "#infrastructure",
    pillarKey: "liquidity",
    bgColorClass: "bg-verto-blue/15 dark:bg-verto-blue/20 hover:bg-verto-blue/25 dark:hover:bg-verto-blue/35",
    iconColor: "text-verto-blue dark:text-verto-blue group-hover:text-verto-blue-dark dark:group-hover:text-verto-blue-light"
  },
  {
    title: "AI-Powered Compliance",
    subtitle: "Automated risk management",
    icon: Bot,
    href: "#infrastructure",
    pillarKey: "compliance",
    bgColorClass: "bg-verto-cyan/15 dark:bg-verto-cyan/20 hover:bg-verto-cyan/25 dark:hover:bg-verto-cyan/35",
    iconColor: "text-verto-cyan dark:text-verto-cyan group-hover:text-verto-cyan-dark dark:group-hover:text-verto-cyan-light"
  },
  {
    title: "24/7 Global Ops",
    subtitle: "Expert monitoring & support",
    icon: Headphones,
    href: "#infrastructure",
    pillarKey: "service",
    bgColorClass: "bg-verto-orange/15 dark:bg-verto-orange/20 hover:bg-verto-orange/25 dark:hover:bg-verto-orange/35",
    iconColor: "text-verto-orange dark:text-verto-orange group-hover:text-verto-orange-dark dark:group-hover:text-verto-orange-light"
  }
];

export default function SecureDefiOps() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection 
          title="Secure DeFi Operations in 90 Days"
          subtitle="Enable your trading desk to securely execute trading opportunities on any chain, with AI-powered risk management and compliance."
          customCTAs={secureOpsCTAs}
        />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection 
          title="The DeFi Security Challenge"
          subtitle="Traditional infrastructure lacks the specialized security and compliance controls needed for safe DeFi operations at institutional scale."
          customQuotes={[
            {
              icon: "BarChart3",
              color: "verto-blue",
              persona: "CEO",
              company: "Trading Desk",
              quote: "We're caught between CeFi's limited opportunities and DeFi's unlimited risks. Our traditional centralized systems can't safely access the yield and arbitrage opportunities that exist on-chain."
            },
            {
              icon: "Users",
              color: "verto-purple", 
              persona: "Head of Investments",
              company: "Hedge Fund",
              quote: "Multi-day manual reviews and inefficient operational processes are causing us to miss time-sensitive DeFi opportunities. We need automated, compliant execution at institutional scale."
            },
            {
              icon: "Shield",
              color: "verto-green",
              persona: "CISO", 
              company: "Investment Fund",
              quote: "Our systems are built on centralized control. How do we enforce our risk policies and deliver regulator-proof audit trails for every transaction on public chains without exposing ourselves to smart contract exploits?"
            }
          ]}
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="Institutional DeFi Security Platform"
          subtitle="Self-hosted stack to access multi-chain liquidity and DeFi yield on any chain, with AI-powered risk management and compliance."
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