import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { createRoot } from 'react-dom/client';
import ShoppingCart from './components/ShoppingCart';

import Home from './Home';
import CategoryPage from './components/Productsection/CategoryPage';
AOS.init();

const root = createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [showToast, setShowToast] = useState(false); // Estado del toast

  // Función para mostrar el toast temporalmente
  const showTemporaryToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000); // Oculta el toast después de 4 segundos
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find(item => item.id === product.id);

      if (isProductInCart) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity < 5 ? item.quantity + 1 : 5 } : item
        );
      }

      if (prevCart.length >= 5) {
        showTemporaryToast(); // Muestra el mensaje emergente si se alcanzan 5 productos
        return prevCart; // No agregar más productos
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  const toggleCart = () => {
      setIsCartOpen(prev => !prev);
  };

  const closeCart = () => {
      setIsCartOpen(false);
  };
  
  

  return (
    <div className="min-h-screen flex flex-col"> {/* Ajuste aquí */}
      <Router basename='/pa-tuhogar-app/'>
        <span id='top'></span>
        <Navbar toggleCart={toggleCart} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
        {isCartOpen && (
            <ShoppingCart cart={cart} setCart={setCart} closeCart={closeCart} />
        )}
      
        {showToast && (
          <div className="toast-message">
            No puedes agregar más de 5 productos distintos al carrito.
          </div>
        )}
        
        {/* Contenido principal */}
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
            <Route path="/Productsection/:categoryName" element={<CategoryPage handleAddToCart={handleAddToCart} />} />
          </Routes>
        </div>

        {/* Footer siempre en la parte inferior */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
