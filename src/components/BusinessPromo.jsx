import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BusinessPromo = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Opcional: Puedes mantener o eliminar las flechas
    dots: false,   // Eliminamos los dots
    autoplay: true, // Activa el cambio automático
    autoplaySpeed: 3000, // Cambia la velocidad si lo necesitas
  };

  return (
    <div className="relative w-full md:w-1/3 h-64 bg-white shadow-lg rounded-lg overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzM3wwfDF8c2VhcmNofDEyfHxidXNpbmVzcyUyMHByb21vdGlvbnxlbnwwfHx8fDE2OTcwMzA5OTR8MA&ixlib=rb-4.0.3&q=80&w=400"
            alt="Publicar promociones"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1494177310976-79e93ee893a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzM3wwfDF8c2VhcmNofDd8fGJ1c2luZXNzJTIwcHJvbW90aW9ufGVufDB8fHx8MTY5NzAzMDk5NHww&ixlib=rb-4.0.3&q=80&w=400"
            alt="Ofertas destacadas"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581091012184-e04f26ef3eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjYzM3wwfDF8c2VhcmNofDV8fG1hcmtldGluZ3xlbnwwfHx8fDE2OTcwMzA5OTR8MA&ixlib=rb-4.0.3&q=80&w=400"
            alt="Haz crecer tu negocio"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>

      {/* Texto centrado sobre las imágenes */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h2 className="text-3xl font-bold text-white text-center mb-4">¡Promociona tu Negocio!</h2>
        <p className="text-lg text-white text-center px-4 mb-4">
          ¿Quieres publicar o ver nuestras ofertas para promocionar tu negocio?
        </p>
        <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500">
          Ver Ofertas
        </button>
      </div>
    </div>
  );
};

export default BusinessPromo;
