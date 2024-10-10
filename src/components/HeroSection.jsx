// src/components/HeroSection.jsx

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
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

  // Definición de las variantes de animación
  const slideVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section className="mt-10 z-0 w-[20rem] h-[500px] relative sm:w-[1200px] sm:h-[650px]  text-white flex flex-col overflow-hidden"
    initial="hidden"
    animate="visible"
    transition={{ duration: 1, ease: 'easeInOut' }}
    variants={slideVariants}>
      {/* Slider animado */}

        <Slider {...settings} className="w-full h-full rounded-xl ">
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex justify-center items-center rounded-lg ">
              <img
                src={image}
                className="w-full h-[500px] sm:h-[650px] rounded-lg"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
          
        </Slider>

      {/* Contenido sobre el banner */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center rounded-lg "
       
      >
        
        <motion.h1 className="text-4xl font-bold mb-4 bg-white text-black p-2 rounded-lg mx-2"
         initial="hidden"
         animate="visible"
         transition={{ duration: 1 }}
         variants={titleVariants}>
          Bienvenido a Pa'tu H <FontAwesomeIcon className={`text-[#FF0000]`} icon={faHeart} size="1x" /> gar
        </motion.h1>
        <motion.p className="text-xl mb-6 bg-white text-black p-2 rounded-lg mx-2"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          variants={paragraphVariants}
          >
          Encuentra los mejores electrodomésticos para tu hogar en Holguín.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          variants={buttonVariants}
        >
        <Link to="ofertas" smooth={true} duration={700} className="bg-[#ACE2E1] text-black px-6 py-1  hover:bg-[#41C9E2] flex flex-col items-center cursor-pointer rounded-lg">
          <label className='hero-label text-xl cursor-pointer '>Ver Productos</label>
          <FontAwesomeIcon className='hero-chevron -mt-2 cursor-pointer text-[#008DDA]' icon={faChevronDown} size="2x" />
        </Link>
        </motion.div>
      </div>

      {/* Fondo oscuro para mejorar la legibilidad del texto */}
    </motion.section>
  );
};

export default HeroSection;
