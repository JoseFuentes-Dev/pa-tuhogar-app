import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const handleClick = (plan, description, price) => {
    const message = `Hola! Estoy interesado en el ${plan}. ${description}. Precio: ${price}.`;
    const whatsappUrl = `https://wa.me/5359014481?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="px-5 mt-10 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#008DDA] text-center mb-5">
        <FontAwesomeIcon icon={faBullhorn} className="text-[#FF0000] mr-2" />
        Servicios de Publicidad
      </h1>
      <p className="text-center text-lg md:text-xl mb-10">
        "En Pa'tu hogar, ofrecemos servicios de publicidad para ayudar a los negocios a aumentar su visibilidad. A continuación, encontrarás nuestros planes de publicación mensual"
      </p>

      <div className="flex flex-col xl:flex-row gap-5 w-full justify-center">
        {/* Tarjeta 1 */}
        <div
          className="service-card w-full max-w-md h-[400px] flex flex-col justify-center bg-white shadow-lg rounded-lg p-5 hover:shadow-xl hover:scale-105 transition-all duration-300"
          onClick={() => handleClick('Plan Básico', 'Publica 5 productos durante todo el mes.', '1000 CUP/Mes')}
        >
          <h2 className="text-4xl font-bold text-[#008DDA] mb-3">Plan Básico</h2>
          <p className="text-lg text-gray-700">Publica 5 productos durante todo el mes.</p>
          <p className="text-xl font-bold mt-5 text-[#FF0000]">1000 CUP/Mes</p>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="service-card w-full max-w-md h-[400px] flex flex-col justify-center bg-white shadow-lg rounded-lg p-5 hover:shadow-xl hover:scale-105 transition-all duration-300"
          onClick={() => handleClick('Plan Avanzado', 'Publica 10 productos y 1 producto en la sección de ofertas.', '2000 CUP/Mes')}
        >
          <h2 className="text-4xl font-bold text-[#008DDA] mb-3">Plan Avanzado</h2>
          <p className="text-lg text-gray-700">Publica 10 productos y 1 producto en la sección de ofertas.</p>
          <p className="text-xl font-bold mt-5 text-[#FF0000]">2000 CUP/Mes</p>
        </div>

        {/* Tarjeta 3 */}
        <div
          className="service-card w-full max-w-md h-[400px] flex flex-col justify-center bg-white shadow-lg rounded-lg p-5 hover:shadow-xl hover:scale-105 transition-all duration-300"
          onClick={() => handleClick('Plan Premium', 'Publica 10 productos, 1 producto en la sección de ofertas y 2 productos en la sección de destacados.', '3000 CUP/Mes')}
        >
          <h2 className="text-4xl font-bold text-[#008DDA] mb-3">Plan Premium</h2>
          <p className="text-lg text-gray-700">Publica 10 productos, 1 en ofertas y 2 en destacados.</p>
          <p className="text-xl font-bold mt-5 text-[#FF0000]">3000 CUP/Mes</p>
        </div>
      </div>

      <p className="text-lg text-center my-10">
        Todos nuestros planes están diseñados para maximizar la exposición de tus productos en nuestra plataforma. Contáctanos para más detalles y <strong>¡Empieza a publicitar tus productos hoy mismo!</strong>
      </p>
    </div>
  );
};

export default Services;
