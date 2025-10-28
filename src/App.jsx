import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Layout from "./Layout/MainLayout";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import TeamDetailsPage from "./components/TeamDetails";
import PricingPage from "./components/PricingPage";


export default function App() {
  return (
    <Routes>
      {/* Wrap all pages with Layout */}
      <Route element={<Layout />}>
       
         <Route path="/" element={<LandingPage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/team" element={<TeamPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        <Route path="/team-details" element={<TeamDetailsPage />} />
      </Route>
    </Routes>
  );
}
