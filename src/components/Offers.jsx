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
  className='items-center'
  >

    <div
        className="bg-[#FFFFFF]  rounded-lg shadow-md mx-3 card-contain "
        
        
        
        > 
        <div className="image-contain h-full rounded-t-lg"
            >
            <img src={product.image} alt={product.name} className="image-offer w-full h-60 bg-initial rounded-t-lg " />
        </div>
        <div className="description p-2 relative rounded-lg">
            <h2 className="font-semibold  text-[1em] mt-2">{product.name}</h2>
            <span className="text-[#FF0000] font-bold text-[1.2em]">{product.price}</span>
            <div href="#" className="absolute right-2 bottom-2 block md:inline-block">
            <button onClick={() => addToCart(product)} className="absolute right-2 bottom-2 block md:inline-block">
                    <FontAwesomeIcon className='hover:text-[#008DDA] text-[#41C9E2]' icon={faShoppingCart} size="2x" />
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
    price: PropTypes.string.isRequired,
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
      
        <div  id='ofertas' className="my-10 relative pt-[80px] "
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
            price: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default Offers;
