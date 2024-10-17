import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { productsdestacados } from './Productdestacados';

const FeaturedProducts = ({ onAddToCart }) => {
  console.log(onAddToCart);
  return (
    <div className="mt-20 ">
      <h2 className="text-[1.8em] font-bold mb-6">Productos Destacados</h2>
      <div 
        className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 "
      >
        {productsdestacados.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md w-[320px] sm:w-[285px] md:w-full   "
            data-aos="fade-up" 
            data-aos-duration="600"
          >
            <div className='w-full h-48 overflow-hidden cursor-pointer rounded-t-lg '>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-inherit rounded-t-lg mb-2 transform transition-all duration-1000 hover:scale-110" 
              />
            </div>
            <div className="description flex flex-col justify-between h-[170px] p-4">

            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-xl text-gray-800">${product.price.toFixed(2)} USD</p>
            <button  onClick={() => onAddToCart(product)}  className="mt-4 w-full bg-[#008DDA] text-white hover:text-black font-semibold py-2 rounded hover:bg-[#41C9E2]">
    
              <FontAwesomeIcon className='text-[#FFFFF] mr-2' icon={faShoppingCart} size="1x" />
              Añadir al Carrito
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
