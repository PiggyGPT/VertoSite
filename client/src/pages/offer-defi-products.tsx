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
          subtitle="Securely access multi-chain liquidity and expand your digital asset offerings, while maintaining full regulatory compliance and risk controls."
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
              quote: "Offering long-tail assets require accessing DeFi liquidity, but your risk teams can't approve direct smart contract exposure without extensive audits.",
              name: "David Cass",
              title: "CEO | Former CISO at GSR Trading",
              image: davidImage
            },
            {
              pillarKey: "payments",
              quote: "Offering stablecoin commerce requires perfecting both the user and merchant experience - Automated reconciliation with every one tap payment.",
              name: "Nilesh Khaitan",
              title: "CPO | Former Venmo/PayPal Crypto Lead",
              image: nileshImage
            },
            {
              pillarKey: "distribution",
              quote: "Your tokenization offerings are only as valuable to your clients as your ability to distribute them across your network.",
              name: "David Cass",
              title: "CEO | Former Federal Reserve Regulator",
              image: davidImage
            },
            {
              pillarKey: "compliance", 
              quote: "From pre-trade policy checks to post-trade audit trails, regulators require compliance proofs for every customer DeFi trade made on your platform.",
              name: "Daniel Garrie",
              title: "General Counsel | Former DOJ & DTCC Advisor",
              image: danielImage
            }
          ]}
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