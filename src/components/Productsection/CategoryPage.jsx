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

  // Establecer el término de búsqueda inicial
  useEffect(() => {
    if (selectedProduct) {
      setSearchTerm(selectedProduct.name); // Establecer el término de búsqueda inicial como el nombre del producto seleccionado
    }
  }, [selectedProduct]);

  // Filtrar productos por categoría
  const filteredProducts = products.filter(product => product.category === categoryName);

  // Si hay un término de búsqueda, filtrar productos también por el término de búsqueda
  const searchedProducts = searchTerm.length === 0 
    ? filteredProducts 
    : filteredProducts.filter(product => 
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
        setSearchTerm={(term) => {
          setSearchTerm(term);
          if (term === '') {
            setSelectedProduct(null); // Si se borra el término de búsqueda, restablecer el producto seleccionado
          }
        }} 
        placeholder={selectedProduct ? selectedProduct.name : `Buscar en ${categoryName}...`} 
        handleProductSelect={handleProductSelect} 
      />

      {searchedProducts.length === 0 ? (
        <p className='absolute ml-3 -mt-5 text-[#FF0000]'>No hay productos disponibles en la categoría {categoryName}.</p>
      ) : (
        <ul className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {searchedProducts.map(product => (
            <li key={product.id} className="bg-white rounded-lg shadow-md w-[320px] sm:w-[285px] md:w-full">
              <div className="overflow-hidden h-full rounded-t-lg">
                <img src={product.image} alt={product.name} className="image-offer w-full h-60 rounded-t-lg " />
              </div>
              <div className="description flex flex-col justify-between h-[170px] p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p>Precio: {product.price} USD</p>
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
  );
};

export default CategoryPage;
