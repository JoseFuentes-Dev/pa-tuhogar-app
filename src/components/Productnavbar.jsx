
import { Link } from 'react-router-dom';

const ProductList = ({ handleCategoryClick }) => {
  return (
    <ul>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Climatización"  onClick={handleCategoryClick}>Climatización</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Refrigeración" onClick={handleCategoryClick}>Refrigeración</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Otros Equipos" onClick={handleCategoryClick}>Otros Equipos</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Para tu Cocina" onClick={handleCategoryClick}>Para tu Cocina</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/TV & Equipos" onClick={handleCategoryClick}>TV & Equipos</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Transporte" onClick={handleCategoryClick}>Transporte</Link>
      </li>
    </ul>
  );
};

export default ProductList;
