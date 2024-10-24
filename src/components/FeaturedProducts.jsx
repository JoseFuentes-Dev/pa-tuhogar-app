import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const FeaturedProducts = ({ onAddToCart, products }) => { // Asegúrate de recibir 'products'
  const navigate = useNavigate(); // Inicializar useNavigate

  // Filtrar productos destacados
  const featuredProducts = products.filter(product => product.featured); // Filtrar usando la prop 'products'

  return (
    <div className="mt-20">
      <h2 className="text-[1.8em] font-bold mb-6">Productos Destacados</h2>
      <div 
        className="grid place-items-center gap-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        {featuredProducts.length > 0 ? ( // Verificar si hay productos destacados
          featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="w-full "
              data-aos="fade-up" 
              data-aos-duration="600"
            >
              <div className="bg-[#FFFFFF]  rounded-lg shadow-md flex flex-col mb-5 h-full w-full max-w-[400px] mx-auto">
                <div className="aspect-w-1 hover:cursor-pointer aspect-h-1 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
                    onClick={() => navigate(`/product/${product.id}?featured=true`)} // Agregado para redirigir a detalles
                  />
                </div>
                <div className="p-3  flex flex-col gap-2 flex-grow">
                  <div>
                  <h2 className="text-[1.1em] font-semibold">{product.name}</h2>
                  <span className="text-[1em] ">{product.price} USD</span>

                  </div>
                  
                  <button 
                    onClick={() => onAddToCart(product, 1)} // Agregado para añadir al carrito
                    className="mt-1 w-full bg-[#008DDA] text-white hover:text-black font-semibold py-2 rounded hover:bg-[#41C9E2]  transition-colors duration-300"
                  >
                    <FontAwesomeIcon className=' mr-2 ' icon={faShoppingCart} style={{ fontSize: '20px' }} />
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No hay productos destacados para mostrar.</div> // Mensaje si no hay productos destacados
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
