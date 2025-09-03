import React, { useState, useEffect } from "react";
import hero1 from "../assets/images/hero.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import fundadorImg from "../assets/images/fundador.jpg";

const images = [hero1, hero2, hero3];

const Home = () => {
  const [index, setIndex] = useState(0);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div>
      {/* Hero con carrusel */}
      <section className="hero">
        <div className="hero-carousel">
          <button className="hero-btn-nav" onClick={prevSlide}>&lt;</button>
          <div className="hero-slider">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Institución"
                className={`hero-img ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
          <button className="hero-btn-nav" onClick={nextSlide}>&gt;</button>
        </div>

        <div className="hero-text">
          <h2>Bienvenidos a Nuestra Institución Educativa</h2>
          <p>Formando estudiantes con valores y excelencia académica.</p>
        </div>
      </section>

      {/* Información General */}
      <section className="info">
        <h2>Sobre Nosotros</h2>
        <p>
          Nuestra institución educativa tiene como objetivo brindar una educación integral, 
          fomentando valores, disciplina y responsabilidad. 
          Contamos con modernas instalaciones y un equipo comprometido con la formación de los estudiantes.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="mision-vision">
        <div className="card">
          <h3>Misión Xammarina</h3>
          <p>
            Somos la institución educativa más representativa de la provincia de Huaura orientada a lograr que sus estudiantes culminen satisfactoriamente la escolaridad primaria y secundaria, que desarrollen y afiancen aprendizajes útiles, significativos y pertinentes a través de una formación integral que desarrolle su pensamiento analítico, crítico, creativo y de emprendimiento; que promueve una conciencia ambiental, la inclusión, la interculturalidad, la sana convivencia y la promoción y consolidación de una identidad local, regional y nacional.
          </p>
        </div>
        <div className="card">
          <h3>Visión Xammarina</h3>
          <p>
            Ser reconocidos como una institución líder y emblema de la educación pública en la región, que contribuye a que sus estudiantes desarrollen todo su potencial, que sean autónomos para seguir aprendiendo, que cuiden el medio ambiente y practiquen valores, que asuman una ciudadanía con derechos y responsabilidades y que, con un adecuado actuar ético, una sólida identtidad cultural y práctica de la interculturalidad, contribuyan al desarrollo de su comunidad y país utilizando y generando avances científicos, tencológicos y humanísticos.
          </p>
        </div>
      </section>

      {/* Reglas */}
      <section className="rules">
        <h2>Valores Xammarinos Institucionales</h2>
        <ul>
          <li>Conciencia ambiental</li>
          <li>Creatividad e innovación</li>
          <li>Democracia</li>
          <li>Ética</li>
          <li>Inclusión</li>
          <li>Identidad</li>
          <li>Interculturalidad</li>
          <li>Responsabilidad</li>
          <li>Solidaridad</li>
        </ul>
      </section>

      {/* Fundador */}
      <section className="founder">
        <img src={fundadorImg} alt="Fundador" className="founder-img" />
        <div className="founder-text">
          <h4>¿Quien fue?</h4>
          <h2>Luis Fabio Xammar Jurado</h2>
          <p>
            Luis Fabio Xammar Jurado fue un destacado diplomático, periodista y político peruano del siglo XX. Se desempeñó en diversos cargos en el servicio exterior, representando al Perú en varios países y defendiendo los intereses nacionales en el ámbito internacional. También incursionó en la política y en la prensa, contribuyendo con ideas y análisis sobre la realidad nacional. Su labor lo convirtió en una figura influyente dentro de la vida pública peruana.
          </p>
        </div>
      </section>ç
    </div>
  );
};

export default Home;
