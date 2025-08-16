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
          title="Launch Your Institutional Stablecoin"
          subtitle="Deploy a compliant, scalable stablecoin with enterprise-grade infrastructure in 90 days. Transform your financial institution with a fully regulated stablecoin platform built for banks, payment processors, and fintech companies."
          customCTAs={stablecoinCTAs}
        />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection 
          title="The Stablecoin Distribution Challenge"
          subtitle="Traditional banking rails limit your stablecoin's reach and growth potential. Scaling stablecoin adoption through legacy infrastructure is slow, capital-intensive, and fails to reach mass markets while maintaining institutional compliance standards."
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="Enterprise Stablecoin Infrastructure"
          subtitle="A complete stack for minting, distributing, and managing institutional stablecoins across any blockchain network.\nFull regulatory compliance with real-time monitoring and automated policy enforcement."
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