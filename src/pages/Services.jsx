import React from "react";
import service1 from "../assets/images/primaria.jpg";
import service2 from "../assets/images/secundaria.jpg";

const Services = () => {
  return (
    <section className="services">
      <h2>Niveles Educativos</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={service1} alt="Educación Primaria" />
          <h3>Educación Primaria</h3>
          <h4>Objetivo</h4>
          <p>Buscamos proporcionar a los estudiantes las competencias básicas en lectura, escritura, matemáticas, ciencias naturales y sociales, además de fomentar hábitos de estudio, disciplina, valores y trabajo en equipo.
          </p>
          <h4>Características:</h4>
           <li>Se busca el desarrollo de habilidades de comprensión lectora, operaciones matemáticas básicas y expresión oral y escrita.</li>
          <li>Se introduce la enseñanza de ciencias, historia, geografía, artes y educación física.</li>
          <li>El enfoque es más general y formativo que especializado.</li>
        </div>
        <div className="service-card">
          <img src={service2} alt="Educación Secundaria" />
          <h3>Educación Secundaria</h3>
          <h4>Objetivo</h4>
          <p>Ampliar y profundizar los conocimientos adquiridos en primaria, preparando al estudiante para la educación superior o la formación técnica laboral.
          </p>
          <h4>Características:</h4>
           <li>Se organiza por cursos o grados (1° a 5° de secundaria).</li>
          <li>Se incluyen áreas más específicas y complejas: álgebra, geometría, física, química, biología, literatura, filosofía, idiomas, etc.</li>
          <li>Se fomenta el pensamiento crítico, la resolución de problemas y el desarrollo de un criterio propio.</li>
          <li>En los últimos años, puede haber orientación hacia carreras técnicas, científicas o humanísticas dependiendo del sistema educativo.</li>
         
        </div>
        
      </div>
    </section>
  );
};

export default Services;
