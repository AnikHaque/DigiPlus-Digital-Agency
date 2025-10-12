import { ServiceCTASection } from "../components/Service/ServiceCTA";
import { ServicesHero } from "../components/Service/ServiceHero";
import { ServiceSection } from "../components/Service/ServiceSection";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <ServicesHero />
      <ServiceSection />
      <ServiceCTASection />
      <Footer />
    </div>
  );
}