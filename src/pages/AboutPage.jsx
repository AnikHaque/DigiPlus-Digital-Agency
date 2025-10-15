import { AboutCTASection } from "../components/About/AboutCTA";
import { AboutHero } from "../components/About/AboutHero";
import { AboutSection } from "../components/About/AboutSection";
import { AboutService } from "../components/About/AboutService";
import { AboutTeamSection } from "../components/About/AboutTeam";
import { HowWeWork } from "../components/About/HowWeWork";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <AboutHero />
      <AboutSection />
      <HowWeWork />
      <AboutService />
      <AboutTeamSection />
      <AboutCTASection />
      <Footer />
    </div>
  );
}






