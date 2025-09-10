import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import BackgroundParticles from "./components/BackgroundParticles";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <BackgroundParticles />
      <div className="app-root relative z-10">
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/logros" element={<Achievements />} />
          <Route path="/contacto" element={<Contact />} />

        
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
