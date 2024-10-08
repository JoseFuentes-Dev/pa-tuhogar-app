import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './herosection.css'


// Importar las imágenes directamente
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';

const HeroSection = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    
  };

  return (
    <section className=" z-0 w-[20rem] h-[500px]  relative sm:w-[1200px] sm:h-[600px] rounded-lg text-white flex flex-col overflow-hidden">
      <Slider {...settings} className="w-full h-full ">
        {images.map((image, index) => (
          <div key={index} className=" w-full h-full flex justify-center items-center">
            <img
              src={image}
              className="w-full h-[500px] sm:h-[600px]" 
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

      {/* Contenido sobre el banner */}
      <div className=" absolute inset-0 flex flex-col justify-center items-center z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Pa'tu H <FontAwesomeIcon 
                        className={`text-[#FF0000]`}
                        icon={faHeart} 
                        size="1x" 
                    /> gar</h1>
        <p className="text-xl mb-6">
          Encuentra los mejores electrodomésticos para tu hogar en Holguín.
        </p>

        <a href="#offer-list" className="bg-[#ACE2E1] text-black  px-6 py-1 rounded-lg hover:bg-[#41C9E2] flex flex-col items-center">  
             <label className=' hero-label text-xl '>
          Ver Productos 
          </label>
          <FontAwesomeIcon 
                        className='hero-chevron -mt-2 cursor-pointer  text-[#008DDA] ' 
                        icon={faChevronDown} 
                        size="2x" 
                    />
          </a>
                          </div>
   
      {/* Fondo oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    </section>
  );
};

export default HeroSection;
