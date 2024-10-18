import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import image1 from '../assets/images/promotion.jpg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';

const BusinessPromo = () => {
  const images = [image1, image7, image8];

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Opcional: Puedes mantener o eliminar las flechas
    dots: false,   // Eliminamos los dots
    autoplay: true, // Activa el cambio automático
    autoplaySpeed: 3000, // Cambia la velocidad si lo necesitas
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 }, // Desplazado a la derecha y oculto
    visible: { opacity: 1, x: 0 },  // Visible y en su posición original
  };
  return (
    <motion.div className="relative w-full h-[240px]   md:h-2/3 shadow-lg rounded-lg overflow-hidden  "
    initial="hidden"
    animate="visible"
    transition={{ duration: 1, ease: 'easeInOut' }}
    variants={slideVariants}
    >
      <Slider {...settings}>
      {images.map((image, index) => (
            <div key={index} className="w-full h-full flex justify-center items-center rounded-lg ">
              <img
                src={image}
                className="w-full h-[240px] md:h-[370px] rounded-lg object-initial"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
      </Slider>

      {/* Texto centrado sobre las imágenes */}
      <div className="  absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 ">
        <motion.h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white text-center mb-2 px-4"
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={titleVariants}
        >¡Promociona tu Negocio!</motion.h2>
        <motion.p className="  text-md  xl:text-lg  text-white text-center px-4 mb-2"
         initial="hidden"
         animate="visible"
         transition={{ duration: 1, delay: 0.5 }}
         variants={paragraphVariants}
        >
          ¿Quieres publicar o ver nuestras ofertas para promocionar tu negocio?
        </motion.p>

             <Link to="/services" className='hover:text-[#ACE2E1] text-white px-1 py-2 block md:inline-block'>
           
        <motion.button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500"
         initial="hidden"
         animate="visible"
         transition={{ duration: 0.5, ease: 'easeInOut' }}
         variants={buttonVariants}
         >
      Ver Ofertas
        </motion.button>
          </Link>
      </div>
    </motion.div>
  );
};

export default BusinessPromo;
