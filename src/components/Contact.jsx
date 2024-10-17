const Contact = () => {
  return (
    <div className="container-contact w-full flex  justify-center">


    <div className="contact-container mx-5 p-8 bg-[#fff] mb-10 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-extrabold text-[#008DDA] mb-6 text-center">Contacto</h2>

      <section className="about-me mb-10">
        <h3 className="text-2xl font-semibold text-[#008DDA] mb-2">Sobre mí</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          ¡Hola! Soy [Tu Nombre], un apasionado desarrollador frontend especializado en crear
          experiencias web atractivas y funcionales. Con un enfoque en la usabilidad y el diseño,
          mi objetivo es brindar soluciones personalizadas que se adapten a las necesidades de
          mis clientes.
        </p>
      </section>

      <section className="services mb-10">
        <h3 className="text-2xl font-semibold text-[#008DDA] mb-2">Servicios que ofrezco</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-lg">
          <li>Desarrollo de sitios web responsivos</li>
          <li>Optimización de la experiencia de usuario (UX)</li>
          <li>Implementación de tiendas en línea</li>
          <li>Asesoría en diseño de interfaz (UI)</li>
          <li>Soporte técnico y mantenimiento web</li>
        </ul>
      </section>

      <section className="pricing mb-10">
        <h3 className="text-2xl font-semibold text-[#008DDA] mb-2">Precios</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Mis precios son competitivos y varían según la complejidad del proyecto. Aquí tienes
          algunas tarifas generales:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-lg">
          <li>Desarrollo de página web: desde $500</li>
          <li>Tiendas en línea: desde $800</li>
          <li>Consultoría UX/UI: desde $100/hora</li>
        </ul>
        <p className="mt-4 text-gray-600">
          Para un presupuesto personalizado, no dudes en contactarme directamente.
        </p>
      </section>

      <section className="contact-info mb-6">
        <h3 className="text-2xl font-semibold text-[#008DDA] mb-2">Información de contacto</h3>
        <p className="text-gray-700 text-lg">
          Puedes contactarme a través de:
        </p>
        <ul className="text-gray-700 mt-2 space-y-2 text-lg">
          <li>Email: <a href="mailto:joc.fuentes.dev@gmail.com" className="text-[#008DDA] hover:underline">joc.fuentes.dev@gmail.com</a></li>
          <li>Teléfono: <a href="tel:+5359014481" className="text-[#008DDA] hover:underline">+53 5901 4481</a></li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default Contact;
