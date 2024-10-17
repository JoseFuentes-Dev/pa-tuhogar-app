// App.js
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
            const updatedCart = [...prevCart];
            const existingProduct = updatedCart[existingProductIndex];

            if (existingProduct.quantity < 5) {
                existingProduct.quantity += 1;
            }

            return updatedCart;
        } else {
            return [...prevCart, { ...product, quantity: 1 }];
        }
    });
  };

  return (
    <Router basename='/pa-tuhogar-app/'>
      <span id='top'></span>
      <Navbar toggleCart={toggleCart} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      {isCartOpen && (
          <ShoppingCart cart={cart} setCart={setCart} closeCart={closeCart} />
      )}
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="/Productsection/:categoryName" element={<CategoryPage handleAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer  />
    </Router>
  );
}

export default App;
