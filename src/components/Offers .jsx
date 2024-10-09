// src/components/Offers.jsx

import Slider from 'react-slick';
import PropTypes from 'prop-types'; 
import './offers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; // Importar Framer Motion

// Componente de tarjeta de oferta
const OfferCard = ({ product }) => (
    <div className="pruebA"
    data-aos="fade-up" 
    data-aos-duration="1000"
    >

    <motion.div
        className="bg-[#FFFFFF] rounded-lg shadow-md mx-3 card-contain"
        initial={{ opacity: 0, y: 20 }} // Comienza oculto y desplazado hacia abajo
        animate={{ opacity: 1, y: 0 }} // Desaparece y se mueve a su posición original
        transition={{ duration: 0.6 }} // Duración de la transición

   
        >
        <div className="image-contain w-full h-full"
            >
            <img src={product.image} alt={product.name} className="image-offer w-full h-60 bg-initial rounded-t-lg" />
        </div>
        <div className="description p-2 relative rounded-lg">
            <h2 className="font-semibold text-xl mt-2">{product.name}</h2>
            <span className="text-[#FF0000] font-bold text-[1.2em]">{product.price}</span>
            <a href="#" className="absolute right-2 bottom-2 block md:inline-block">
                <FontAwesomeIcon className='hover:text-[#008DDA] text-[#41C9E2]' icon={faShoppingCart} size="2x" />
            </a>
        </div>
    </motion.div>
                </div>
);

// Componente principal de Ofertas
const Offers = ({ products }) => {
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
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };        

    return (
        <div id='offer-list' className="my-8 relative"
       >
            <h1 className="text-[1.8em] font-bold mb-4 text-[#FF0000]"
              >Ofertas</h1>
            <Slider {...settings}
            >
                {products.map((product) => (
                    <OfferCard key={product.id} product={product} />
                ))}
            </Slider>
        </div>
    );
};

// Validación de PropTypes
Offers.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Offers;
