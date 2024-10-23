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
import image9 from '../assets/images/9.jpg';



const HeroSection = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
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
    hidden: { opacity: 0, scale: 1.2, filter: 'blur(100px)' }, // Agregado efecto de desenfoque
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }, // Agregado efecto de desenfoque
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
    <motion.section className="z-0 w-full h-[500px] relative sm:h-[650px] md:w-2/3  text-white flex flex-col "
    initial="hidden"
    animate="visible"
    transition={{ duration: 1, ease: 'easeInOut' }}
    variants={slideVariants}>
      {/* Slider animado */}

        <Slider {...settings} className="w-full h-full rounded-lg ">
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
        
        <motion.h1 
          className="title flex flex-col xl:flex-row text-4xl sm:text-5xl font-bold mb-4 bg-white text-black p-3 rounded-lg"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={titleVariants}
        >
          <span className="sm:hidden">Bienvenido a</span>
          <span className="hidden sm:inline">Bienvenido a&nbsp;</span>
          <span>
            Pa&apos;tu H <FontAwesomeIcon className="text-[#FF0000]" icon={faHeart} size="1x" /> gar
          </span>
        </motion.h1>
        <motion.p className="text-[1.1em]  xl:text-[1.2em]  p-3 mb-4 bg-white text-black  rounded-lg "
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          variants={paragraphVariants}
          >
         Un mundo de productos a tu alcance, en un solo lugar
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          variants={buttonVariants}
        >
        <Link to="ofertas" smooth="true" duration={700} className="bg-[#ACE2E1] text-black px-6 py-2 hover:bg-[#41C9E2] flex flex-col items-center cursor-pointer rounded-lg transform transition-transform duration-300 hover:scale-105">
          <label className='hero-label text-[1em] cursor-pointer '>Ver Productos</label>
          <FontAwesomeIcon className='hero-chevron -mt-2 cursor-pointer text-[#008DDA]' icon={faChevronDown} size="2x" />
        </Link>
        </motion.div>
      </div>

  
    </motion.section>
  );
};

export default HeroSection;
