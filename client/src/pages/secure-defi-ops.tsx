import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { ShieldCheck, Bot, Headphones, Clock, AlertTriangle, Briefcase } from "lucide-react";
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import hishamImage from "@assets/hisham_1754986415368.png";

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

// Custom Why Now content for secure DeFi ops page targeting trading firms & funds
const secureOpsWhyNowReasons = [
  {
    icon: Clock,
    title: "The Rapid Decay of On-Chain Alpha",
    description: "The most profitable arbitrage and yield opportunities have short half-lives. Every day you wait because operations are too manual is quantifiable, unrecoverable alpha lost."
  },
  {
    icon: AlertTriangle,
    title: "The 'Irreversible Error' Imperative",
    description: "On-chain, every manual transaction is absolute risk. As you scale strategies, the probability of a critical manual error approaches 100%. Automating operations is existential risk management."
  },
  {
    icon: Briefcase,
    title: "The New Mandate for Fundraising",
    description: "LPs are asking 'How are you securing digital asset operations?' Being the first fund with provably secure, institutional-grade operational infrastructure attracts new capital allocations."
  }
];

export default function SecureDefiOps() {
  useEffect(() => {
    document.title = "Secure DeFi Operations in 90 Days - Verto";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Enable your trading desk to securely execute trading opportunities on any chain, with AI-powered risk management and compliance.');
    }
  }, []);

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
              quote: "Multi-day manual reviews and inefficient operational processes are causing us to miss time-sensitive DeFi opportunities. We need automated, compliant execution to secure our deal flows."
            },
            {
              icon: "Shield",
              color: "verto-green",
              persona: "CISO", 
              company: "Investment Fund",
              quote: "How can we enforce our risk policies and deliver regulator-proof audit trails for every transaction on public chains without exposing ourselves to smart contract exploits?"
            }
          ]}
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="Institutional DeFi Security Platform"
          subtitle="Self-hosted stack to access multi-chain liquidity and DeFi yield on any chain, with AI-powered risk management and compliance."
          customFounderQuotes={[
            {
              pillarKey: "liquidity",
              quote: "For investment teams to quickly act on DeFi alpha, you need to expedite extensive manual audits to approve direct protocol exposure.",
              name: "David Cass", 
              title: "CEO | Former CISO at GSR Trading",
              image: davidImage
            },
            {
              pillarKey: "compliance",
              quote: "From pre-trade policy checks to post-trade audit trails, regulators require compliance proofs for every DeFi trade made by your trading desks.",
              name: "Daniel Garrie",
              title: "General Counsel | Former DOJ & DTCC Advisor",
              image: danielImage
            },
            {
              pillarKey: "service",
              quote: "Imagine explaining a $100M loss to your LPs because your operations failed at 3 AM. You need Google's 24/7 SRE standards to protect your DeFi treasury.",
              name: "Hisham Anwar",
              title: "CTO | Former Google Head of Product",
              image: hishamImage
            }
          ]}
        />
      </div>
      <div id="pilot">
        <BoardChecklistSection />
        <WhyNowSection 
          customTitle="Why Now?"
          customSubtitle="For trading firms, the lack of institutional-grade DeFi infrastructure is a direct and escalating drag on P&L and operational liability."
          customReasons={secureOpsWhyNowReasons}
        />
      </div>
      <Footer />
    </div>
  );
}