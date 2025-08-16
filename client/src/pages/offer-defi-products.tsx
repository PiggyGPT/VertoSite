import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import PillarsSection from "@/components/pillars-new-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";

export default function OfferDefiProducts() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <div id="hero">
        <HeroSection 
          title="Offer DeFi Products to Your Customers"
          subtitle="Launch compliant on-chain trading, lending, and yield products for digital asset exchanges. Enable your exchange customers to access institutional-grade DeFi opportunities while maintaining full regulatory compliance and risk controls."
        />
      </div>
      <div id="team">
        <TeamSection />
        <ProblemSection 
          title="The DeFi Integration Challenge"
          subtitle="Exchanges struggle to offer DeFi products without compromising security or compliance. Traditional exchanges lack the infrastructure to safely integrate DeFi protocols while meeting institutional risk management and regulatory requirements."
        />
      </div>
      <div id="infrastructure">
        <PillarsSection 
          title="Institutional DeFi Infrastructure"
          subtitle="A secure, compliant platform for offering DeFi trading, lending, and yield products to exchange customers.\nBattle-tested security with institutional-grade compliance and risk management controls."
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