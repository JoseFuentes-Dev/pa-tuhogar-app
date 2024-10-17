
import './Contact.css'; // Asegúrate de crear estilos si es necesario

const Contact = () => {
  return (
    <div className="contact-container p-6 bg-[#F7EEDD]">
      <h2 className="text-2xl font-bold text-[#008DDA] mb-4">Contacto</h2>

      <section className="about-me mb-6">
        <h3 className="text-xl font-semibold">Sobre mí</h3>
        <p className="text-gray-700">
          ¡Hola! Soy [Tu Nombre], un apasionado desarrollador frontend especializado en crear
          experiencias web atractivas y funcionales. Con un enfoque en la usabilidad y el diseño,
          mi objetivo es brindar soluciones personalizadas que se adapten a las necesidades de
          mis clientes.
        </p>
      </section>

      <section className="services mb-6">
        <h3 className="text-xl font-semibold">Servicios que ofrezco</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Desarrollo de sitios web responsivos</li>
          <li>Optimización de la experiencia de usuario (UX)</li>
          <li>Implementación de tiendas en línea</li>
          <li>Asesoría en diseño de interfaz (UI)</li>
          <li>Soporte técnico y mantenimiento web</li>
        </ul>
      </section>

      <section className="pricing mb-6">
        <h3 className="text-xl font-semibold">Precios</h3>
        <p className="text-gray-700">
          Mis precios son competitivos y varían según la complejidad del proyecto. Aquí tienes
          algunas tarifas generales:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Desarrollo de página web: desde $500</li>
          <li>Tiendas en línea: desde $800</li>
          <li>Consultoría UX/UI: desde $100/hora</li>
        </ul>
        <p className="mt-2 text-gray-600">
          Para un presupuesto personalizado, no dudes en contactarme directamente.
        </p>
      </section>

      <section className="contact-info">
        <h3 className="text-xl font-semibold">Información de contacto</h3>
        <p className="text-gray-700">
          Puedes contactarme a través de:
        </p>
        <ul className="text-gray-700">
          <li>Email: <a href="mailto:joc.fuentes.dev@gmail.com" className="text-[#008DDA]">joc.fuentes.dev@gmail.com</a></li>
          <li>Teléfono: <a href="tel:+5359014481" className="text-[#008DDA]">+53 5901 4481</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
