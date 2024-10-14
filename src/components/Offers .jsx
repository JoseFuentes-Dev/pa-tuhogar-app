import Slider from 'react-slick';
import PropTypes from 'prop-types'; 
import './offers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


// Componente de tarjeta de oferta
const OfferCard = ({ product }) => (
    <div
    data-aos="fade-up" 
    data-aos-duration="600"
    >

    <div
        className="bg-[#FFFFFF] rounded-lg shadow-md mx-3 card-contain p-4"


   
        >
        <div className="image-contain w-full h-full rounded-t-lg"
            >
            <img src={product.image} alt={product.name} className="image-offer w-full h-60 bg-initial rounded-t-lg " />
        </div>
        <div className="description p-2 relative rounded-lg">
            <h2 className="font-semibold  text-[1em] mt-2">{product.name}</h2>
            <span className="text-[#FF0000] font-bold text-[1.2em]">{product.price}</span>
            <a href="#" className="absolute right-2 bottom-2 block md:inline-block">
                <FontAwesomeIcon className='hover:text-[#008DDA] text-[#41C9E2]' icon={faShoppingCart} size="2x" />
            </a>
        </div>
    </div>
                </div>
);

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
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
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
        <div  id='ofertas' className="my-10 relative pt-[80px] "
        >
            <h1 className="text-[1.8em] font-bold mb-6 text-[#FF0000]"
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
    productsoffers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Offers;
