

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { products } from './ProductList';
const FeaturedProducts = () => {



  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4"
          data-aos="fade-up" 
          data-aos-duration="600" 
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-xl text-gray-800">${product.price.toFixed(2)}</p>
            <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">
            <FontAwesomeIcon className='hover:text-[#008DDA] text-[#FFFFF] mr-2' icon={faShoppingCart} size="1x" />
            Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
