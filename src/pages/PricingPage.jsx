import { PricingCTASection } from "../components/Pricing/PricingCTA";
import { PricingHero } from "../components/Pricing/PricingHero";
import { PricingSection } from "../components/Pricing/PricingSection";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";

export default function PricingPage() {

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <PricingHero />
      <PricingSection />
      <PricingCTASection />
      <Footer />
    </div>
  );
}



