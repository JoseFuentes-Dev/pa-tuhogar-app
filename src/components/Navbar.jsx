import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Productnavbar from './Productnavbar';
import { Link } from 'react-scroll';

const Navbar = ({ cartCount, toggleCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Estado para detectar scroll

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const toggleProducts = () => {
        event.preventDefault();
        setIsProductsOpen(!isProductsOpen);
    };

    // Efecto para cambiar el estado cuando se hace scroll
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

    return (
        <>
            {/* Navbar */}
            <nav className={`menu-principal bg-[#008DDA] w-full h-20 flex justify-between pr-5 items-center fixed top-0 z-50 transition-all duration-500 ease-in-out 
                ${isScrolled ?  'h-[50px]' : 'h-20'}`}>
                {/* Logo */}
                <img src={logo} alt="Pa' tu hogar logo" className={`transition-all duration-500 ease-in-out ${isScrolled ? 'h-[50px]' : 'h-20'}`} />

                {/* Hamburger Menu (for mobile) */}
                <div className='md:hidden'>
                    <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
                        {isOpen ? 'X' : '☰'}
                    </button>
                </div>

                {/* Links (desktop && Mobile) */}
                <ul className={`z-40 flex flex-col bg-[#008DDA] items-center md:flex-row md:items-center text-white md:static absolute  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-9 transition-all duration-500 ease-in-out  ${isOpen ? 'top-10' : 'top-[-490px]'}`}>
                    <li><Link to="top" smooth={true} duration={700} className='cursor-pointer hover:text-[#ACE2E1] text-white px-3 py-2 block md:inline-block'>Inicio</Link></li>

                    {/* Menú de Productos */}
                    <li 
                        className='hover:text-[#ACE2E1] relative flex items-center group'
                        onClick={toggleProducts} // Activar el menú en móviles
                    >
                        <a 
                            href='#' 
                            className='hover:text-[#ACE2E1] text-white px-1 py-2 block md:inline-block'
                        >
                            Productos
                            {/* Flecha */}
                            <FontAwesomeIcon 
                                className={`ml-1 cursor-pointer transition-transform duration-300 ease-in-out ${isProductsOpen ? 'rotate-180' : ''} md:group-hover:rotate-180`}
                                icon={faChevronDown} 
                                size="1x" 
                            />
                        </a>

                        {/* Menú para desktop */}
                        <ul className={`z-30 productos-menu absolute w-[150px] md:group-hover:block hidden bg-white text-black mt-0 p-4 rounded-lg shadow-lg top-full`}>
                            <Productnavbar />
                        </ul>
                    </li>

                    {/* Menú para mobile */}
                    {isProductsOpen && (
                        <ul className='z-30 productos-menu flex flex-col items-center md:hidden bg-[#008DDA] text-[#ffff] mt-1 p-2 rounded-lg  w-full'>
                            <Productnavbar />
                        </ul>
                    )}

                    <li><a href='#' className='hover:text-[#ACE2E1] text-white px-3 py-2 block md:inline-block'>Contacto</a></li>
                    <li><a href='#' className='hover:text-[#ACE2E1] text-white px-1 py-2 block md:inline-block'>Acerca De</a></li>

                    {/* Carrito de compras */}
                    <li className='relative cursor-pointer'>
                        <a onClick={toggleCart} className="mr-2 px-4 py-2 block md:inline-block">
                      
                            <FontAwesomeIcon className='hover:text-[#ACE2E1]' icon={faShoppingCart} size="1x" />
                            {/* Contador de productos en el carrito */}
                            {cartCount > 0 && (
                                <span className="  absolute  top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                                    {cartCount}
                                </span>
                            )}
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Agregar espacio superior equivalente a la altura de la navbar */}
            <div className='h-20'></div>
        </>
    );
};

export default Navbar;
