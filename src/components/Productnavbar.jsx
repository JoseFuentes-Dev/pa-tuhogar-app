
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <ul>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="/Productsection/Climatizacion">Climatización</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="#">Refrigeración</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="#">Otros Equipos</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="#">Para tu Cocina</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="#">TV & Equipos</Link>
      </li>
      <li className='py-1 px-2 hover:bg-[#ACE2E1]'>
        <Link to="#">Transporte</Link>
      </li>
    </ul>
  );
};

export default ProductList;
