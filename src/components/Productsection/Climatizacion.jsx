import { useState } from 'react';
import { products } from '../ProductList';
import Searchbarcategori from './Searchbarcategori';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Climatizacion = ({ handleAddToCart }) => {
  // Estado para la búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar los productos cuya categoría sea 'Climatización'
  const climatizacionProducts = products.filter(product => product.category === 'Climatización');

  // Filtrar en tiempo real por nombre y descripción basándose en el valor de la búsqueda
  const filteredProducts = climatizacionProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Barra de búsqueda */}
      <Searchbarcategori searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className='px-5 xl:px-20'>
        <h2 className="text-2xl font-bold text-[#008DDA] mb-4">Productos de Climatización</h2>
        
        {filteredProducts.length === 0 ? (
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        ) : (
          <ul className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
            {filteredProducts.map(product => (
              <li key={product.id} className="bg-white rounded-lg shadow-md w-[320px] sm:w-[285px] md:w-full ">
                <div className="overflow-hidden h-full rounded-t-lg">
                  <img src={product.image} alt={product.name} className="image-offer w-full h-60 rounded-t-lg " />
                </div>
                <div className="description flex flex-col justify-between h-[170px] p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <button onClick={() => handleAddToCart(product)} className="mt-4 w-full bg-[#008DDA] text-white hover:text-black font-semibold py-2 rounded hover:bg-[#41C9E2]">
                  <FontAwesomeIcon className='text-[#FFFFF] mr-2' icon={faShoppingCart} size="1x" />
                  Añadir al Carrito
                </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

Climatizacion.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default Climatizacion;
