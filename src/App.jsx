import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Badges from './components/Badges';
import SearchBar from './components/Searchbar';
import Offers from './components/Offers';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BusinessPromo from './components/BusinessPromo';
import { productsoffers } from './components/Productoffers';
import { productsdestacados } from './components/Productdestacados';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { createRoot } from 'react-dom/client';
import ShoppingCart from './components/ShoppingCart';

AOS.init();

const root = createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  const [cart, setCart] = useState([]); // Inicializar el carrito como un arreglo vacío
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
      setIsCartOpen(prev => !prev);
  };

  const closeCart = () => {
      setIsCartOpen(false);
  };
  
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Si el producto ya existe, actualiza la cantidad
            const updatedCart = [...prevCart];
            const existingProduct = updatedCart[existingProductIndex];

            // Solo incrementar si no se ha alcanzado la cantidad máxima
            if (existingProduct.quantity < 5) {
                existingProduct.quantity += 1;
            }

            return updatedCart;
        } else {
            // Si el producto no existe, añádelo al carrito con cantidad 1
            return [...prevCart, { ...product, quantity: 1 }];
        }
    });
};
  return (
    <>
      <span id='top'></span>
      <Navbar toggleCart={toggleCart} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      {isCartOpen && (
          <ShoppingCart cart={cart} setCart={setCart} closeCart={closeCart} />
      )}
      <main className='px-5 xl:px-20'>
        <SearchBar />
        <div className='flex flex-col items-center md:items-start my-5 mt-12 z-0 md:flex-row w-full gap-5'>
          <HeroSection />
          <section className='flex flex-col md:h-[650px] gap-5 z-0 w-full md:w-1/3 pr-5'>
            <BusinessPromo />
            <Badges />
          </section>
        </div>
        <Offers products={productsoffers} onAddToCart={handleAddToCart} />
        <FeaturedProducts products={productsdestacados} onAddToCart={handleAddToCart}/>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
