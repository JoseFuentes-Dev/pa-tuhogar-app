import Slider from 'react-slick';
import PropTypes from 'prop-types'; 
import './offers.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

const OfferCard = ({ product, addToCart }) => {
  
  const [isAnimating, setIsAnimating] = useState(false); // Estado para manejar la animación
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setIsAnimating(true); // Iniciar la animación
    addToCart(product, 1);
    
    // Detener la animación después de un tiempo
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Duración de la animación
  };
  return (
    <div
      data-aos="fade-up" 
      data-aos-duration="600"
      className='w-full px-1'
     
    >
      <div className="bg-[#FFFFFF] rounded-lg shadow-md flex flex-col h-full max-w-[500px] mx-auto">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full hover:cursor-pointer h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
            onClick={() => navigate(`/product/${product.id}`)}
        />
        </div>
        <div className="p-3 h-[110px] flex flex-col justify-between flex-grow">
          <h2 className=" text-[1.1em] font-semibold mb-2 ">{product.name}</h2>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-[#FF0000] font-bold text-[1em]">{product.price} USD</span>
            <motion.button
              className="text-[#41C9E2] hover:text-[#008DDA]"
              onClick={handleAddToCart}
              animate={{ scale: isAnimating ? 1.3 : 1 }} // Escalar cuando está animando
              transition={{ type: 'spring', stiffness: 300 }} // Configuración de la animación
            >
              <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '25px' }} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

OfferCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

CustomPrevArrow.propTypes = {
  className: PropTypes.string, // Añadir validación para className
  style: PropTypes.object,      // Añadir validación para style
  onClick: PropTypes.func,      // Añadir validación para onClick
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

CustomNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,      // Añadir validación para style
  onClick: PropTypes.func,      // Añadir validación para onClick
};

const Offers = ({ products, onAddToCart }) => {
  const offerProducts = products.filter(product => product.offer);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id='ofertas' className="my-24 relative pt-[60px]">
      <h2 className="text-[2em] font-bold mb-8 text-[#008DDA] underline decoration-[#ACE2E1]">Ofertas</h2>

      <Slider {...settings}>
        {offerProducts.length > 0 ? (
          offerProducts.map((product) => (
            <OfferCard key={product.id} product={product} addToCart={onAddToCart}/>
          ))
        ) : (
          <div className="text-center">No hay productos en oferta.</div>
        )}
      </Slider>
    </div>
  );
};

Offers.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Offers;
