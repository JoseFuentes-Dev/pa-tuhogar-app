import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Productnavbar from './Productnavbar';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ cartCount, toggleCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProducts = (event) => {
        setIsProductsOpen(!isProductsOpen);
        event.preventDefault();
    };

    const handleCategoryClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <nav className={`p-2 menu-principal bg-[#008DDA] w-full flex justify-between items-center fixed top-0 z-50 transition-all duration-500 ease-in-out 
                ${isScrolled ? 'h-[50px]' : 'h-20'}`}>
                <img src={logo} alt="Pa' tu hogar logo" className={`transition-all duration-500 ease-in-out ${isScrolled ? 'h-[50px]' : 'h-20'}`} />

                <div className='md:hidden pr-5'>
                    <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
                        {isOpen ? 'X' : '☰'}
                    </button>
                </div>

                <ul className={`z-40 flex flex-col bg-[#008DDA] items-center md:flex-row md:items-center text-white md:static absolute  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-9 transition-all duration-500 ease-in-out  ${isOpen ? 'top-10' : 'top-[-490px]'}`}>
                    <li>
                        <Link to="/" className='cursor-pointer hover:text-[#ACE2E1] text-white px-3 py-2 block md:inline-block'>Inicio</Link>
                    </li>

                    <li className='hover:text-[#ACE2E1] relative flex items-center group'>
                        <a href='#' className='hover:text-[#ACE2E1] text-white px-1 py-2 block md:inline-block' onClick={toggleProducts}>
                            Productos
                            <FontAwesomeIcon
                                className={`ml-1 cursor-pointer transition-transform duration-300 ease-in-out ${isProductsOpen ? 'rotate-180' : ''} md:group-hover:rotate-180`}
                                icon={faChevronDown}
                                size="1x"
                            />
                        </a>

                        <ul className={`z-30 productos-menu absolute w-[180px] md:group-hover:block hidden bg-white text-black mt-0 p-4 rounded-lg shadow-lg top-full`}>
                            <Productnavbar handleCategoryClick={handleCategoryClick} />
                        </ul>
                    </li>

                    {isProductsOpen && (
                        <ul className='z-30 productos-menu flex flex-col items-center md:hidden bg-[#008DDA] text-[#ffff] mt-1 p-2 rounded-lg w-full'>
                            <Productnavbar handleCategoryClick={handleCategoryClick} />
                        </ul>
                    )}
                    <li>
                        <Link to="/services" className='hover:text-[#ACE2E1] text-white px-1 py-2 block md:inline-block'>Servicios</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='hover:text-[#ACE2E1] text-white px-3 py-2 block md:inline-block'>Contacto</Link>
                    </li>
                    <li>
                        <Link to="/about" className='hover:text-[#ACE2E1] text-white px-1 py-2 block md:inline-block'>Acerca De</Link>
                    </li>

                    <li className='relative cursor-pointer'>
                        <a onClick={toggleCart} className="mr-2 px-4 py-2 block md:inline-block">
                            <FontAwesomeIcon className='hover:text-[#ACE2E1]' icon={faShoppingCart} size="1x" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                                    {cartCount}
                                </span>
                            )}
                        </a>
                    </li>
                </ul>
            </nav>

            <div className='h-20'></div>
        </>
    );
};

export default Navbar;
