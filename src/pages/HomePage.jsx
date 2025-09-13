import { AboutUs } from "../components/Home/AboutUs";
import { HomeBlog } from "../components/Home/Blogs";
import { ContactAndCTA } from "../components/Home/Contact";
import { Hero } from "../components/Home/Hero";
import { Portfolio } from "../components/Home/Portfolio";
import { Process } from "../components/Home/Proccess";
import { Services } from "../components/Home/Service";
import { StatsSection } from "../components/Home/State";
import { Testimonials } from "../components/Home/Testimonials";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";

export default function HomePage() {
  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <StatsSection />
        <Portfolio />
        <Process />
        <Testimonials />
        <HomeBlog />
        <ContactAndCTA />
      </main>
      <Footer />
    </div>
  );
}