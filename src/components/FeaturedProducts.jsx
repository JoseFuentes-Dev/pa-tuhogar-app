

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { productsdestacados } from './Productdestacados';
const FeaturedProducts = () => {



  return (
    <div className="mt-20">
      <h2 className="text-[1.8em] font-bold mb-4 ">Productos Destacados</h2>
      <div className="flex gap-6 flex-wrap  ">
        {productsdestacados.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 w-[210px] md:w-[250px] xl:w-[280px]"
          data-aos="fade-up" 
          data-aos-duration="600" 
          >
            <div className='w-full h-48 overflow-hidden cursor-pointer rounded-t-lg'>

            <img src={product.image} alt={product.name} className=" w-full h-full object-inherit rounded-t-lg  mb-2 transform transition-all duration-1000 hover:scale-110 " />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-xl text-gray-800">${product.price.toFixed(2)}</p>
            <button className=" mt-4 w-full bg-[#008DDA] text-white hover:text-black font-semibold py-2 rounded hover:bg-[#41C9E2]">
            <FontAwesomeIcon className=' text-[#FFFFF] mr-2' icon={faShoppingCart} size="1x" />
            Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
