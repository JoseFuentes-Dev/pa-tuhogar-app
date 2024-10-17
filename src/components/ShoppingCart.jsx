import './ShoppingCart.css'; // Mantén esta línea si agregas la animación personalizada aquí
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = ({ cart, setCart, closeCart }) => {
  // Función para eliminar productos del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Función para actualizar la cantidad de productos
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: quantity > 5 ? 5 : quantity } : item
      )
    );
  };

  // Calcular el total del carrito
  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  // Función para generar el mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    let message = '¡Hola! Me gustaría realizar el siguiente pedido:\n\n';

    cart.forEach(product => {
      message += `- ${product.name} (Cantidad: ${product.quantity}) - Precio: $${product.price.toFixed(2)}\n`;
    });

    message += `\nTotal a pagar: $${totalPrice.toFixed(2)}\n`;
    message += 'Por favor, confirmar la compra. ¡Gracias!';
    
    return message;
  };

  // Función para abrir WhatsApp con el mensaje
  const handleBuy = () => {
    const message = encodeURIComponent(generateWhatsAppMessage()); // Codifica el mensaje
    const phoneNumber = '+5359014481';
    const url = `https://wa.me/${phoneNumber}?text=${message}`; // URL con el mensaje codificado
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-10 animate-slideDown">
        {/* Botón de cerrar */}
        <button onClick={closeCart} className="absolute top-3 right-3 text-red-600 text-2xl">
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2 className="text-2xl font-bold text-[#008DDA] mb-4">Carrito de Compras</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">El carrito está vacío</p>
        ) : (
          <ul className="space-y-4">
            {cart.map(product => (
              <li key={product.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="text-lg font-medium">{product.name}</p>
                  <p className="text-gray-600">${product.price.toFixed(2)} x {product.quantity}</p>
                </div>
                <div className="flex items-center">
                  {/* Botón para reducir cantidad */}
                  <button
                    onClick={() => product.quantity > 1 && updateQuantity(product.id, product.quantity - 1)}
                    className={`text-white p-2 rounded hover:bg-[#41C9E2] ${product.quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#008DDA]'}`}
                    disabled={product.quantity === 1} // Deshabilitar el botón si la cantidad es 1
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  
                  <span className="mx-2">{product.quantity}</span>

                  {/* Botón para aumentar cantidad */}
                  <button
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    className="bg-[#008DDA] text-white p-2 rounded hover:bg-[#41C9E2]">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>

                  {/* Botón para eliminar producto */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="ml-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Mostrar el total */}
        <h3 className="mt-6 text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>

        {/* Botón de Comprar */}
        {cart.length > 0 && (
          <button
            onClick={handleBuy}
            className="mt-6 w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600">
            Comprar
          </button>
        )}
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired
};

export default ShoppingCart;
