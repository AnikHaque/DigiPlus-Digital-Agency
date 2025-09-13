import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Layout from "./Layout/MainLayout";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import TeamDetailsPage from "./components/TeamDetails";
import PricingPage from "./components/PricingPage";
import FaqPage from "./components/FaqPage";
import ProjectDetailsPage from "./components/ProjectDetails";
import ProjectsPage from "./components/ProjectsPage";
import ServicesPage from "./components/ServicePage";
import BlogPage from "./components/BlogPage";
import BlogDetailsPage from "./components/BlogDetails";
import ContactPage from "./components/ContactPage";
import ServiceDetailsPage from "./components/ServiceDetails";
import LandingPage2 from "./components/LandingPage2";


export default function App() {
  return (
    <Routes>
      {/* Wrap all pages with Layout */}
      <Route element={<Layout />}>
       
         <Route path="/" element={<LandingPage />} />
         <Route path="/test" element={<LandingPage2 />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/team" element={<TeamPage />} />
         <Route path="/pricing" element={<PricingPage />} />
         <Route path="/project" element={<ProjectsPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
           <Route path="/blog-details" element={<BlogDetailsPage />} />
         <Route path="/project-details" element={<ProjectDetailsPage />} />
         <Route path="/faq" element={<FaqPage />} />
         <Route path="/service-details" element={<ServiceDetailsPage />} />
         <Route path="/contact" element={<ContactPage />} />
        <Route path="/team-details" element={<TeamDetailsPage />} />
      </Route>
    </Routes>
  );
}
