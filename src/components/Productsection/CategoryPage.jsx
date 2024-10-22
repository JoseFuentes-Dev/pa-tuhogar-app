// CategoryPage.js
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { products } from '../ProductList';
import Searchbarcategori from './Searchbarcategori';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CategoryPage = ({ handleAddToCart }) => {
  const { categoryName } = useParams(); // Obtener la categoría de la URL
  const location = useLocation(); // Obtener la ubicación actual
  const selectedProduct = location.state?.selectedProduct; // Accede al producto seleccionado
  const [searchTerm, setSearchTerm] = useState('');
  const [placeholder, setPlaceholder] = useState(`Buscar en ${categoryName}...`);

  // Establecer el término de búsqueda inicial y el placeholder
  useEffect(() => {
    if (selectedProduct) {
      setSearchTerm(selectedProduct.name); // Establecer el término de búsqueda inicial como el nombre del producto seleccionado
      setPlaceholder(selectedProduct.name);
    } else {
      setSearchTerm('');
      setPlaceholder(`Buscar en ${categoryName}...`);
    }
  }, [selectedProduct, categoryName]);

  // Filtrar productos por categoría
  const filteredProducts = products.filter(product => product.category === categoryName);
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (a.inStock === b.inStock) return 0; // No cambia el orden si ambos productos tienen el mismo estado de stock
    return a.inStock ? -1 : 1; // Coloca productos en stock antes que los agotados
  });
  
  // Si hay un término de búsqueda, filtrar productos también por el término de búsqueda
  const searchedProducts = searchTerm.length === 0 
    ? sortedProducts 
    : sortedProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  // Función para manejar el clic en un producto
  const handleProductSelect = (product) => {
    setSearchTerm(product.name); // Establecer el término de búsqueda como el nombre del producto seleccionado
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-[#008DDA] mb-4">
      Categoria - {categoryName} 
      </h2>

      <Searchbarcategori 
        searchTerm={searchTerm} 
        setSearchTerm={(term) => setSearchTerm(term)}
        placeholder={placeholder}
        handleProductSelect={handleProductSelect} 
      />

      {searchedProducts.length === 0 ? (
        <p className='absolute ml-3 -mt-5 text-[#FF0000]'>No hay productos disponibles en la categoría {categoryName}.</p>
      ) : (
        <ul className=" grid place-items-center gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
  {searchedProducts.map(product => (
    <li key={product.id} className="relative h-full w-full">
      {/* Superposición para productos agotados */}
      {!product.inStock && (
        <div className="absolute  inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-10 rounded-lg cursor-not-allowed">
          <p className="text-white text-xl font-bold">Producto agotado</p>
        </div>
      )}
      
    <div className=" flex flex-col h-full bg-white rounded-lg shadow-md    max-w-[340px] mx-auto">
<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg ">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
                />
              </div>
      <div className="description flex flex-col justify-between flex-grow p-3">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p>Precio: {product.price} USD</p>

        {/* Botón deshabilitado si el producto está agotado */}
        <button 
          onClick={() => handleAddToCart(product)} 
          className={`mt-4 w-full bg-[#008DDA] text-white hover:text-black font-semibold py-2 rounded hover:bg-[#41C9E2] 
            ${!product.inStock ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={!product.inStock}
        >
          <FontAwesomeIcon className='text-[#FFFFF] mr-2' icon={faShoppingCart} size="1x" />
          Añadir al Carrito
        </button>
      </div>
      </div>
    </li>
  ))}
</ul>

      )}
    </div>
  );
};

export default CategoryPage;
