import './ShoppingCart.css'; // CSS para el modal y oscurecer fondo
import PropTypes from 'prop-types';

const ShoppingCart = ({ cart, setCart, closeCart }) => {
     console.log('Contenido del carrito:', cart); 
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

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeCart}>❌</button>

        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                {product.name} - ${product.price} x {product.quantity}
                <div>
                  {/* Botón para aumentar/disminuir cantidad */}
                  <button onClick={() => product.quantity > 1 && updateQuantity(product.id, product.quantity - 1)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>

                  {/* Eliminar producto */}
                  <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Mostrar el total */}
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      {/* Fondo oscuro */}
      <div className="modal-overlay" onClick={closeCart}></div>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired
};

export default ShoppingCart;
