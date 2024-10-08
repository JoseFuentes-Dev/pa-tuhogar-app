import React, {  useState } from 'react';
import './search.css'

const SearchBar = ({ placeholder, onSearch }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const[inputValue, setInputValue] = useState(' ');
 const [isVisible, setIsVisible] = useState(true);

 
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    const value = event.target.value;
    setInputValue(value);

    // Oculta el elemento si hay texto en el input o si se presiona la barra espaciadora
    setIsVisible(value.trim() === '' && !event.nativeEvent.inputType.includes('insertText'));
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };


  return (
    <div className=" -mt-0 flex items-center justify-center w-full ">
    <div className="contain-input relative w-full max-w-4xl ">

      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        
        className="relative shadow-md pl-4 text-[1.2em] text-[rgba(0,0,0,.7)] h-[50px] -mt-0 w-full max-w-4xl p-2 rounded-bl-lg focus:outline-none focus:ring-1 focus:ring-[#008DDA] "
        />

        {isVisible && (

      <div className="wrapper absolute left-2 top-3  " style={{ pointerEvents: 'none' }}>
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
      <button
        onClick={handleSearch}
        className="shadow-md h-[50px] text-[1.2em] -mt-0 bg-[#41C9E2] text-[#FFFFFF] px-4 py-2  rounded-br-lg hover:bg-[#008DDA] transition-all"
      >

        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
