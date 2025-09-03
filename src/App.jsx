import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  return (
    <>
      {/* Fondo de partículas */}
      <BackgroundParticles />

      {/* Contenido principal */}
      <div className="app-root relative z-10">
        <Navbar />
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
