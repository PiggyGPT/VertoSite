import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { ShieldCheck, Store, Bot } from "lucide-react";
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png";
import nileshImage from "@assets/nilesh_1754986415369.png";

// Define custom CTAs for DeFi products landing page
const defiProductsCTAs = [
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

export default function OfferDefiProducts() {
  useEffect(() => {
    document.title = "Launch DeFi Products in 90 Days - Verto";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Securely expand your digital asset offerings and access multi-chain liquidity, while maintaining full regulatory compliance and risk controls.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection 
          title="Launch DeFi Products in 90 Days"
          subtitle="Securely expand your digital asset offerings and access multi-chain liquidity, while maintaining full regulatory compliance and risk controls."
          customCTAs={defiProductsCTAs}
        />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection 
          title="The DeFi Integration Challenge"
          subtitle="Exchanges struggle to expand DeFi offerings at scale without compromising on security or regulatory compliance."
          customQuotes={[
            {
              icon: "TrendingDown",
              color: "verto-blue",
              persona: "CEO",
              company: "Digital Asset Exchange",
              quote: "We're losing business to DEXs through customer withdrawals. Our users want DeFi yields and exotic assets, but we can't offer them without compromising our institutional security standards."
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
              quote: "Our systems are built on centralized control. How do we enforce our risk policies and deliver regulator-proof audit trails for every DeFi transaction without exposing our customers to smart contract risks?"
            }
          ]}
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="One Unified Platform"
          subtitle="Self-hosted stack to access multi-chain liquidity and DeFi yield on any chain, with AI-powered risk management and compliance."
          customFounderQuotes={[
            {
              pillarKey: "liquidity",
              quote: "Every Head of Trading at a major exchange knows the problem: your biggest clients want DeFi yields, but your risk team won't approve direct protocol access. At GSR, we missed billions in opportunities because we couldn't safely access on-chain liquidity. Verto solves the custody and risk management gap.",
              name: "David Cass",
              title: "CEO | Former CISO at GSR Trading",
              image: davidImage
            },
            {
              pillarKey: "payments",
              quote: "Your Head of Product is asking for DeFi integration, but your Head of Operations is worried about settlement complexity. At PayPal, I learned that successful fintech products hide blockchain complexity from operations teams. Verto makes DeFi feel like traditional payment rails to your back office.",
              name: "Nilesh Khaitan",
              title: "CPO | Former Venmo/PayPal Crypto Lead",
              image: nileshImage
            },
            {
              pillarKey: "compliance", 
              quote: "When your Chief Compliance Officer asks about DeFi risk controls, they want to see the same monitoring capabilities they use for traditional securities. Every smart contract call needs pre-trade compliance checks and post-trade audit trails that satisfy exchange regulators.",
              name: "Daniel Garrie",
              title: "General Counsel | Former DOJ & DTCC Advisor",
              image: danielImage
            }
          ]}
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