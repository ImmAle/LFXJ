import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa"; // 👉 iconos react-icons
import escudo from "/src/assets/images/escudo.png"; // ✅ importamos la imagen
import "/src/styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* ✅ usamos el import en vez de ruta absoluta */}
        <img src={escudo} alt="Escudo Colegio" className="escudo" />
        <h1 className="logo-text">Luis Fabio Xammar Jurado</h1>
      </div>

      {/* Botón de cambio de tema */}
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>

      {/* Botón menú hamburguesa */}
      <button className="menu-btn" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/servicios" onClick={() => setMenuOpen(false)}>Niveles</Link></li>
        <li><Link to="/logros" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link></li>
        <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
