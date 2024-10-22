import Slider from 'react-slick';
import PropTypes from 'prop-types'; 
import './offers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


// Componente de tarjeta de oferta
const OfferCard = ({ product, addToCart }) => (
  <div
  data-aos="fade-up" 
  data-aos-duration="600"
  className='w-full px-1'
  >
    <div className="bg-[#FFFFFF] rounded-lg shadow-md flex flex-col h-full max-w-[340px] mx-auto">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
        />
      </div>
      <div className="p-3 flex flex-col justify-between flex-grow">
        <h2 className="text-base font-bold mb-2">{product.name}</h2>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-[#FF0000] font-bold text-[1.1em]">{product.price} USD</span>
          <button 
            onClick={() => addToCart(product)} 
            className="text-[#41C9E2] hover:text-[#008DDA]"
          >
            <FontAwesomeIcon 
              icon={faShoppingCart}  
              style={{ fontSize: '20px' }}
            />
          </button>
        </div>
      </div>
    </div>
  </div>
);

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
  
// Agregar validación de PropTypes
CustomPrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

CustomNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

// Componente principal de Ofertas
const Offers = ({ products, onAddToCart }) => {

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
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
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
      
        <div  id='ofertas' className="my-24 relative pt-[60px] "
        >
            <h1 className="text-[1.8em] font-bold mb-6 text-[#FF0000]"
              >Ofertas</h1>
            <Slider {...settings}
            >
                {products.map((product) => (
                    <OfferCard key={product.id} product={product}  addToCart={onAddToCart}/>
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
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Aceptar tanto string como number
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};


export default Offers;
