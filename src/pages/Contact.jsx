import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailDestino = "immanol_alex22@hotmail.com"; // 📧 Cambiar correo
  const whatsappDestino = "51910248512"; // 📱 Cambiar con código de país

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Consulta de ${name}`;
    const body = `Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;

    // Abrir correo con mensaje estructurado
    window.location.href = `mailto:${emailDestino}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const texto = `Hola, soy ${name}.%0AEmail: ${email}%0AMensaje: ${message}`;
    window.open(`https://wa.me/${whatsappDestino}?text=${texto}`, "_blank");
  };

  return (
    <section className="contact">
      <h4>Si deseas más información</h4>
      <h2>Contáctanos</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <div className="btn-container">
          <button type="submit" className="btn">
            Enviar por Correo
          </button>
          <button
            type="button"
            className="btn whatsapp"
            onClick={handleWhatsApp}
          >
            Enviar por WhatsApp
          </button>
        </div>
      </form>
      <h4>¡No pierdas esta gran Oportunidad!</h4>
      <h2>¡Matriculate ya!</h2>
    </section>
  );
};

export default Contact;
