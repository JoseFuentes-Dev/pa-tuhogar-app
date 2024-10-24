import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import ShoppingCart from './components/ShoppingCart';
import Contact from './components/Contact';
import About from './components/About';
import Home from './Home';
import Services from './components/Services';
import CategoryPage from './components/Productsection/CategoryPage';
import ProductDetail from './components/ProductDetail'; // Asegúrate de importar ProductDetail
import { products } from './components/ProductList';

AOS.init();

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false); 

  // Función para mostrar el toast temporalmente
  const showTemporaryToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000); // Oculta el toast después de 4 segundos
  };
  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
        // Calcular la cantidad total en el carrito
        const totalQuantityInCart = prevCart.reduce((acc, item) => acc + item.quantity, 0);
        
        // Verificar si se excede el límite total de 5 productos diferentes
        const uniqueProductsCount = new Set(prevCart.map(item => item.id)).size;

        // Verificar si se excede el límite de 5 productos iguales
        const isProductInCart = prevCart.find(item => item.id === product.id);
        const currentProductQuantity = isProductInCart ? isProductInCart.quantity : 0;

        // Si se intenta agregar un nuevo producto diferente
        if (!isProductInCart) {
            if (uniqueProductsCount >= 5) {
                showTemporaryToast(); // Muestra el mensaje si se excede el límite de productos diferentes
                return prevCart; // No agregar más productos
            }
        }

        // Verificar si se excede el límite de 5 productos iguales
        if (isProductInCart && currentProductQuantity + quantity > 5) {
            showTemporaryToast(); // Muestra el mensaje si se excede el límite de productos iguales
            return prevCart; // No agregar más productos
        }

        // Verificar si el producto ya está en el carrito
        if (isProductInCart) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            return prevCart.map(item =>
                item.id === product.id 
                    ? { 
                        ...item, 
                        quantity: Math.min(item.quantity + quantity, 5) // Asegurarse de que no supere 5
                      } 
                    : item
            );
        }

        // Si el producto no está en el carrito, agregarlo
        return [...prevCart, { ...product, quantity: Math.min(quantity, 5) }]; // Asegurarse de que no supere 5 al agregar
    });
};


  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Router basename='/pa-tuhogar-app/'>
        <span id='top'></span>
        <Navbar toggleCart={toggleCart} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
        {isCartOpen && (
          <ShoppingCart 
            cart={cart} 
            setCart={setCart} 
            closeCart={closeCart} 
            showToast={showToast} // Pasar la función de mostrar toast
          />
        )}
        
        {showToast && (
          <div className="toast-message">
            No puedes agregar más de 5 productos al carrito.
          </div>
        )}
        
        {/* Contenido principal */}

          <Routes>
            <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
            <Route 
              path="/Productsection/:categoryName" 
              element={<CategoryPage handleAddToCart={handleAddToCart} />} 
            />
            <Route 
              path="/product/:id" // Ruta para ProductDetail
              element={<ProductDetail products={products} addToCart={handleAddToCart} />} 
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>


        {/* Footer siempre en la parte inferior */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
