import React from "react";
import "../styles/App.css"; 

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="achievements-section">
  <h2 className="section-title">Sobre Nosotros</h2>
  <div className="achievements-grid">
    <div className="achievement-card video-card">
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/ey8I6YJ9A90?si=9j_b-n2V2IPMaOJ3"
        title="Video institucional"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="achievement-card video-card">
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/opq4_cTit5E?si=PK1yp846d4rBY3rE"
        title="Video promocional"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="achievement-card video-card">
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/39EhSvQX6n8?si=IVDTz-0YI64lSRzA"
        title="Video promocional"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>


  </div>
</div>


      {/* Sección de razones */}
      <h3 className="achievements-subtitle">
        ¿Por qué deberías matricularte con nosotros?
      </h3>
      <div className="achievements-grid-reasons">
        <div className="card">
          <h4 className="card-title text-blue">Calidad Académica</h4>
          <p>
            Nuestro plan de estudios está diseñado para desarrollar el
            pensamiento crítico y las habilidades necesarias para el futuro.
          </p>
        </div>
        <div className="card">
          <h4 className="card-title text-green">Docentes Especializados</h4>
          <p>
            Contamos con un equipo de profesores altamente capacitados que
            acompañan a los estudiantes en su proceso de aprendizaje.
          </p>
        </div>
        <div className="card">
          <h4 className="card-title text-purple">Innovación y Tecnología</h4>
          <p>
            Aplicamos herramientas modernas que facilitan el aprendizaje y
            preparan a los alumnos para los retos del mundo actual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
