import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import InfrastructureSection from "@/components/infrastructure-section";
import BoardChecklistSection from "@/components/board-checklist-section";
import WhyNowSection from "@/components/why-now-section";
import AiSection from "@/components/ai-section";
import PilotSection from "@/components/pilot-section";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <InfrastructureSection />
      <AiSection />
      <TeamSection />
      <BoardChecklistSection />
      <WhyNowSection />
      <Footer />
    </div>
  );
}
