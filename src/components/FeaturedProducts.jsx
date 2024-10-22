import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { productsdestacados } from './Productdestacados';

const FeaturedProducts = ({ onAddToCart }) => {
  return (
    <div className="mt-20">
      <h2 className="text-[1.8em] font-bold mb-6">Productos Destacados</h2>
      <div 
        className="grid place-items-center gap-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        {productsdestacados.map((product) => (
          <div 
            key={product.id} 
            className="w-full "
            data-aos="fade-up" 
            data-aos-duration="600"
          >
            <div className="bg-[#FFFFFF] rounded-lg shadow-md flex flex-col mb-5 h-full max-w-[340px] mx-auto">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
                />
              </div>
              <div className="p-3 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-base font-bold">{product.name}</h2>
                  <span className=" text-[1.1em]">{product.price.toFixed(2)} USD</span>
                </div>
                <button 
                  onClick={() => onAddToCart(product)} 
                  className="mt-1 w-full bg-[#008DDA] text-white hover:text-black font-semibold py-2 rounded hover:bg-[#41C9E2]"
                >
                  <FontAwesomeIcon className='text-[#FFFFFF] mr-2' icon={faShoppingCart} style={{ fontSize: '20px' }} />
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
