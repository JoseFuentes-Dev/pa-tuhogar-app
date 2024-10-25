import { Link as ScrollLink } from 'react-scroll'; // Para scroll suave dentro de la misma página
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Para navegar entre páginas
import { scroller } from 'react-scroll'; // Importar scroller

const Footer = () => {
  const location = useLocation(); // Obtener la ubicación actual

  // Función para manejar el clic en "Inicio"
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Si ya estamos en la página de inicio, hacemos scroll al inicio
      scroller.scrollTo('home', { smooth: true, duration: 500 }); // Cambiar a scroller.scrollTo
    } else {
      // Si estamos en otra página, redirigimos a la página de inicio y hacemos scroll al inicio
      window.scrollTo(0, 0); // Hacer scroll al inicio
    }
  };

  const handleScrollToSection = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, { smooth: true, duration: 500 });
    } else {
      window.scrollTo(0, 0); // Hacer scroll al inicio
      setTimeout(() => {
        scroller.scrollTo(section, { smooth: true, duration: 500 });
      }, 100); // Esperar un poco antes de hacer scroll a la sección
    }
  };

  return (
    <footer className="bg-[#008DDA] text-white py-8 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Logotipo y descripción */}
        <div>
          <h2 className="text-2xl font-bold">Pa'tu Hogar</h2>
          <p className="text-sm mt-2 leading-relaxed">Tu hogar, nuestra prioridad. Ofrecemos productos de calidad para hacer de tu vida más fácil y cómoda.</p>
        </div>

        {/* Columna 2: Menú de Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li>
              {/* Si estamos en la página principal, solo hacemos scroll al inicio */}
              {location.pathname === "/" ? (
                <ScrollLink to="home" smooth={true} duration={500} onClick={handleHomeClick} className="hover:underline cursor-pointer">Inicio</ScrollLink>
              ) : (
                // Si estamos en otra página, usamos RouterLink para redirigir a la página de inicio
                <RouterLink to="/" onClick={handleHomeClick} className="hover:underline">Inicio</RouterLink>
              )}
            </li>
            <li>
              {location.pathname === "/" ? (
                <ScrollLink to="featured-products" smooth={true} duration={500} onClick={() => handleScrollToSection('featured-products')} className="hover:underline cursor-pointer">Productos Destacados</ScrollLink>
              ) : (
                <RouterLink to="/" onClick={() => handleScrollToSection('featured-products')} className="hover:underline cursor-pointer">Productos Destacados</RouterLink>
              )}
            </li>
            <li>
              {location.pathname === "/" ? (
                <ScrollLink to="offers" smooth={true} duration={500} onClick={() => handleScrollToSection('offers')} className="hover:underline cursor-pointer">Ofertas</ScrollLink>
              ) : (
                <RouterLink to="/" onClick={() => handleScrollToSection('offers')} className="hover:underline">Ofertas</RouterLink>
              )}
            </li>
            <li>
              <RouterLink to="/contact" className="hover:underline">Contacto</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" className="hover:underline">Sobre Nosotros</RouterLink>
            </li>
          </ul>
        </div>

        {/* Columna 3: Información de Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
          <p className="text-sm">Dirección: Calle Ejemplo 123, Holguín, Cuba</p>
          <p className="text-sm">Teléfono: +53 555 555</p>
          <p className="text-sm">Correo: contacto@patuhogar.com</p>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 Pa'tu Hogar. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
