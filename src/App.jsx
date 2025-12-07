import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Layout from "./Layout/MainLayout";


export default function App() {
  return (
    <Routes>
      {/* Wrap all pages with Layout */}
      <Route element={<Layout />}>
       
         <Route path="/" element={<LandingPage />} />
        
      </Route>
    </Routes>
  );
}
