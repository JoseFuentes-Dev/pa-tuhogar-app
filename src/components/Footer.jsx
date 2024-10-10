import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-[#008DDA] text-white py-8 px-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Logotipo y descripción */}
        <div>
          <h2 className="text-2xl font-bold">Pa'tu Hogar</h2>
          <p className="text-sm mt-2">Tu hogar, nuestra prioridad. Ofrecemos productos de calidad para hacer de tu vida más fácil y cómoda.</p>
        </div>

        {/* Columna 2: Menú de Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Inicio</a></li>
            <li><a href="#featured-products" className="hover:underline">Productos Destacados</a></li>
            <li><a href="#offers" className="hover:underline">Ofertas</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonios</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
            <li><a href="#about-us" className="hover:underline">Sobre Nosotros</a></li>
          </ul>
        </div>

        {/* Columna 3: Información de Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
          <p className="text-sm">Dirección: Calle Ejemplo 123, Holguín, Cuba</p>
          <p className="text-sm">Teléfono: +53 555 555</p>
          <p className="text-sm">Correo: contacto@patuhogar.com</p>
          
          {/* Redes Sociales */}
          <div className="mt-4">
            <a href="https://facebook.com" className="mr-4">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com" className="mr-4">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 Pa'tu Hogar. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
