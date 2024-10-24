import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import image1 from '../assets/images/promotion.jpg';
import image2 from '../assets/images/promotion2.jpg';
import image3 from '../assets/images/promotion3.jpg';
import image4 from '../assets/images/promotion4.jpg';
import image5 from '../assets/images/promotion5.jpg';

const BusinessPromo = () => {
  const images = [image1, image2, image3, image4, image5];

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div className="relative w-full h-[340px] md:h-full shadow-lg rounded-[14px] overflow-hidden"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: 'easeInOut' }}
      variants={slideVariants}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex justify-center items-center">
            <img
              src={image}
              className="w-full h-[340px] sm:h-[350px] md:h-[410px] object-cover" // Cambié a object-cover para asegurar que la imagen cubra bien el área
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

      {/* Texto centrado sobre las imágenes */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2 px-4"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={titleVariants}
        >
          ¡Promociona tu Negocio!
        </motion.h2>
        <motion.p className="text-lg text-white text-center px-4 mb-2"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          variants={paragraphVariants}
        >
          ¿Quieres publicar o ver nuestras ofertas para promocionar tu negocio?
        </motion.p>

        <Link to="/services" className='hover:text-[#ACE2E1] text-white px-1 py-2 block md:inline-block transform transition-transform duration-300 hover:scale-105'>
          <motion.button className="bg-[#008DDA] text-white py-2 px-4 rounded hover:bg-[#41C9E2]"
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
