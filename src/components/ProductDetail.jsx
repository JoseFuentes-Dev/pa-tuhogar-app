import  { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom'; // Importa el hook para obtener parámetros de la URL y navegar

const ProductDetail = ({ products, addToCart, cart = [] }) => {
  const { id } = useParams(); // Obtiene el id desde la URL
  const product = products.find((item) => item.id === parseInt(id)); // Busca el producto por id
  const navigate = useNavigate(); // Hook para navegar a la página anterior

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (!product) {
    return <p>Producto no encontrado.</p>; // Manejo de caso si el producto no existe
  }

  // Crea el mensaje de WhatsApp
  const createWhatsAppMessage = () => {
    const domicilio = product.domicilio ? 'incluido' : 'no incluido';
    return `¡Hola! Estoy interesado en comprar **${quantity} unidad(es)** de **${product.name}**. \n\nDetalles:\n- Domicilio: ${domicilio}\n- Garantía: ${product.garantia ? 'Incluida' : 'No incluida'}\n\nEl precio total es **${product.price * quantity} USD**.`;
  };

  const handleAddToCart = () => {
    const totalQuantityInCart = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (totalQuantityInCart + quantity > 5) {
      showTemporaryToast(); // Muestra el mensaje si se excede el límite
    } else {
      addToCart(product, quantity); // Agrega al carrito con la cantidad seleccionada
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-lg">
      <div className="md:w-1/2 flex flex-col items-center mb-4 md:mb-0">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="mt-3 text-xl font-bold text-center">{product.name}</h1>
        <button 
          className="mt-3 text-blue-500 underline" 
          onClick={() =>  navigate(`/Productsection/${product.category}`)} // Navega a la página anterior
        >
          Volver Atrás
        </button>
      </div>
      <div className="md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <p className="text-gray-700">{product.description}</p>
          <p className="mt-2">
            <strong>Precio:</strong> {product.price} USD
          </p>
          <p className="mt-2">
            <strong>Domicilio:</strong> {product.domicilio ? 'Incluido' : 'No incluido'}
          </p>
          <p className="mt-2">
            <strong>Garantía:</strong> {product.garantia ? 'Si' : 'No'}
          </p>
        </div>

        <div className="mt-4 flex items-center">
          <button 
            onClick={handleDecrease} 
            disabled={quantity === 1} 
            className={`bg-red-500 text-white font-bold py-2 px-4 rounded ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            -
          </button>
          <span className="mx-4 text-lg">{quantity}</span>
          <button 
            onClick={handleIncrease} 
            disabled={quantity === 5} 
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded ${quantity === 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            +
          </button>
        </div>

        <button 
          onClick={() => window.open(`https://wa.me/59014481?text=${encodeURIComponent(createWhatsAppMessage())}`)} 
          className="mt-4 bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
        >
          Comprar Ahora
        </button>
        <button 
          onClick={handleAddToCart} 
          className="mt-2 bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  products: PropTypes.array.isRequired, // Lista de productos
  addToCart: PropTypes.func.isRequired, // Función para agregar al carrito
};

export default ProductDetail;
