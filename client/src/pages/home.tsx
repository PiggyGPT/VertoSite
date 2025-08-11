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
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <InfrastructureSection />
      <AiSection />
      <BoardChecklistSection />
      <TeamSection />
      <WhyNowSection />
      <PilotSection />
      <Footer />
    </div>
  );
}
