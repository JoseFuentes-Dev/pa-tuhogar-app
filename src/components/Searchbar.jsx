import React, { useState, useEffect, useRef } from 'react';
import './search.css';
import { products } from './ProductList'; 

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const searchBarRef = useRef(null); // Referencia para la barra de búsqueda


  // Detectar clics fuera de la barra de búsqueda
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        resetSearch(); // Resetear búsqueda y ocultar mensajes
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para resetear la búsqueda
  const resetSearch = () => {
    setInputValue('');
    setFilteredProducts([]);
    setNoResults(false);
    setIsVisible(true); // Mostrar el placeholder
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    
    // Si el input está vacío, no mostramos sugerencias
    if (value.trim() === '') {
      resetSearch();
      return;
    }

    // Actualizamos la lista filtrada en tiempo real
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase().trim())
    );

    setFilteredProducts(filtered);
    setNoResults(filtered.length === 0);
    setIsVisible(false); // Ocultamos el placeholder si hay texto
  };

  const handleProductClick = () => {
    setInputValue('');
    setFilteredProducts([]);
    setNoResults(false); // Al seleccionar un producto, quitamos el mensaje de "no resultados"
    setIsVisible(true);
  };

  // Función para resaltar las coincidencias
  const highlightMatch = (text, query) => {
    if (!query) return text; // Si no hay consulta, retornamos el texto original
    const parts = text.split(new RegExp(`(${query})`, 'gi')); // Divide el texto por la consulta
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: '#008DDA', color: '#FFFFFF' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div ref={searchBarRef} className="flex flex-col items-center justify-center w-full ">
      <div className="contain-input relative w-full max-w-4xl">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="relative shadow-md pl-4 text-[1.2em] text-[rgba(0,0,0,.7)] h-[50px] w-full max-w-4xl p-2 rounded-bl-lg rounded-br-lg focus:outline-none focus:ring-1 focus:ring-[#008DDA]"
          placeholder='Buscar:'
        />

        {/* Placeholder si no hay texto en el input */}
        {isVisible && (
          <div className="wrapper absolute left-20 top-3" style={{ pointerEvents: 'none' }}>
            <div className="words">
              <span>Climatización</span>
              <span>Refrigeración</span>
              <span>Para tu Cocina</span>
              <span>TV & Equipos</span>
              <span>Climatización</span>
            </div>
          </div>
        )}
      </div>

      {/* Mostrar productos filtrados */}
      <div className="w-full mt-1 max-w-4xl relative ">
        {filteredProducts.length > 0 ? (
          <ul className="product-list rounded-lg bg-white absolute z-50 w-full">

            {filteredProducts.map(product => (
              <li
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="cursor-pointer  shadow-md p-2  hover:bg-[#ACE2E1] transition-all"
              >
                {highlightMatch(product.name, inputValue)} - <span className="text-gray-500">{product.category}</span>
              </li>
            ))}

          </ul>
        ) : (
          noResults && <p className='absolute ml-3 text-[#FF0000]'>No se encontraron coincidencias</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
