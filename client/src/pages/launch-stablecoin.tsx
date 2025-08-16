import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import { Zap, Store, ShieldCheck, Crown, Rocket, CheckCircle } from "lucide-react";
import davidImage from "@assets/david_1754986415369.png";
import danielImage from "@assets/daniel_1754986415369.png"; 
import nileshImage from "@assets/nilesh_1754986415369.png";

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

// Custom Why Now content for stablecoin page targeting financial institutions
const stablecoinWhyNowReasons = [
  {
    icon: Crown,
    title: "The Battle for the Deposit",
    description: "Non-bank entities are already issuing stablecoins, creating private payment rails that threaten your core product. Acting now defends your fundamental business model."
  },
  {
    icon: Rocket,
    title: "The Payments Revolution is Already Here",
    description: "Your most valuable corporate clients are being pitched daily on 24/7 real-time settlement using stablecoins. This is an immediate imperative to retain treasury business."
  },
  {
    icon: CheckCircle,
    title: "The Regulatory Green Light is a Starting Gun",
    description: "With frameworks like MiCA providing clarity, the first banks to market will capture infrastructure-level network effects and lock in the most valuable clients."
  }
];

export default function LaunchStablecoin() {
  useEffect(() => {
    document.title = "Launch Your Stablecoin in 90 Days - Verto";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Activate your network with Verto\'s complete operational stack for stablecoin distribution, payments, and AI-powered security & compliance.');
    }
  }, []);

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
          customFounderQuotes={[
            {
              pillarKey: "distribution",
              quote: "Every bank CEO launching a stablecoin faces the same question: 'How do we scale beyond our branch network?' The answer isn't more branches—it's turning your correspondent banking relationships into digital asset distribution channels. That's exactly how the Fed scaled dollar distribution globally.",
              name: "David Cass",
              title: "CEO | Former Federal Reserve Regulator",
              image: davidImage
            },
            {
              pillarKey: "payments",
              quote: "Your CFO cares about one thing: settlement risk. At Venmo, I learned that successful payment rails aren't about user experience—they're about treasury operations. Instant finality, automated reconciliation, and audit trails that make your accounting team happy.",
              name: "Nilesh Khaitan", 
              title: "CPO | Former Venmo/PayPal Crypto Lead",
              image: nileshImage
            },
            {
              pillarKey: "compliance",
              quote: "When bank regulators ask about your stablecoin compliance program, they want to see controls that look familiar. At the DOJ, I learned regulators trust systems that mirror traditional banking oversight—automated monitoring, exception reporting, and audit trails they can understand.",
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
        customSubtitle="The window to defend your deposit franchise and capture corporate payment flows is narrowing rapidly."
        customReasons={stablecoinWhyNowReasons}
      />
      </div>
      <Footer />
    </div>
  );
}