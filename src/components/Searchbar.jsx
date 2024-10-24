import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './search.css';
import { products } from './ProductList'; 
import { motion } from 'framer-motion'; // Importa motion

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const searchBarRef = useRef(null);
  const navigate = useNavigate(); // Inicializa useNavigate

  // Detectar clics fuera de la barra de búsqueda
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        resetSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const resetSearch = () => {
    setInputValue('');
    setFilteredProducts([]);
    setNoResults(false);
    setIsVisible(true);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    
    if (value.trim() === '') {
      resetSearch();
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase().trim()) || 
      product.description.toLowerCase().includes(value.toLowerCase().trim())
    );

    setFilteredProducts(filtered);
    setNoResults(filtered.length === 0);
    setIsVisible(false);
  };

  const handleProductClick = (product) => {
    // Redirigir al usuario a la página de categoría del producto
    navigate(`/Productsection/${product.category}`, { state: { selectedProduct: product } });
    resetSearch(); // Resetea la búsqueda después de hacer clic
  };

  const highlightMatch = (text, query) => {
    if (!query) return text; 
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: '#008DDA', color: '#FFFFFF' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <motion.div 
      id='search-bar' 
      ref={searchBarRef} 
      className="flex flex-col items-center justify-center z-60"
      initial={{ y: -100, opacity: 0 }} // Inicializa la posición y la opacidad
      animate={{ y: 0, opacity: 1 }} // Animación al aparecer
      transition={{ duration: 0.8, delay: 0.5 }} // Añade un retraso aquí
    >
      <div className="contain-input relative w-full max-w-4xl">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="relative shadow-md pl-4 text-[1.2em] text-[rgba(0,0,0,.7)] h-[50px] w-full max-w-4xl p-2 rounded-bl-lg rounded-br-lg focus:outline-none focus:ring-1 focus:ring-[#008DDA]"
          placeholder='Buscar:'
        />

        {isVisible && (
          <div className="wrapper absolute left-20 top-3" style={{ pointerEvents: 'none' }}>
            <div className="words">
              <span>Split</span>
              <span>Refrigeración</span>
              <span>Ollas</span>
              <span>TV & Equipos</span>
              <span>Split</span>
            </div>
          </div>
        )}
      </div>

      <div className="w-full mt-1 max-w-4xl relative z-50">
        {filteredProducts.length > 0 ? (
          <ul className="product-list rounded-lg bg-[#F7EEDD] absolute z-50 w-full">
            {filteredProducts.map(product => (
              <li
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer shadow-md p-2 hover:bg-[#ACE2E1] transition-all "
              >
                {highlightMatch(product.name, inputValue)} - <span className="text-gray-500">{product.category}</span>
              </li>
            ))}
          </ul>
        ) : (
          noResults && <p className='err-message absolute ml-3 text-[#FF0000]'>No se encontraron coincidencias</p>
        )}
      </div>
    </motion.div>
  );
};

export default SearchBar;
