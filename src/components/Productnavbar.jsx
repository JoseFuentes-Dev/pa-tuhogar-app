
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <ul>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Climatización">Climatización</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Refrigeración">Refrigeración</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Otros Equipos">Otros Equipos</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Para tu Cocina">Para tu Cocina</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/TV & Equipos">TV & Equipos</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Transporte">Transporte</Link>
      </li>
    </ul>
  );
};

export default ProductList;
