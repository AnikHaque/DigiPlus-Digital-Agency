
import { ServiceDetailsCTASection } from "../components/Service-Details/ServiceDetailsCTA";
import { ServiceDetailsHero } from "../components/Service-Details/ServiceDetailsHero";
import { ServiceDetailsSection } from "../components/Service-Details/ServiceDetailsSection";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";


export default function ServiceDetailsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <ServiceDetailsHero />
      <ServiceDetailsSection />
      <ServiceDetailsCTASection />
      <Footer />
    </div>
  );
}









