import React, { useState, useContext } from 'react';
import Modal from '../modal/modal.js';
import './shoppingcart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Crea un contexto para el carrito
const ShoppingCartContext = React.createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Añadir producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Actualizar cantidad de un producto en el carrito
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calcular la cantidad total de productos en el carrito
  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Manejar el proceso de pago
  const handlePayment = () => {
    const total = calculateTotal();
    if (total > 0) {
      alert(`Procediendo al pago de $${total.toFixed(2)}`);
      // Lógica de pago aquí
    } else {
      alert("No hay productos en el carrito para realizar el pago.");
    }
  };

  // Mostrar u ocultar el carrito
  const toggleCart = () => {
    setShowCart(prev => !prev);
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, calculateTotal, getCartItemCount, toggleCart }}>
      {children}
      {showCart && (
        <Modal onClose={toggleCart}>
          <div className="cart-content">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              <table className="shopping-cart-table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Valor</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>
                        <input 
                          type="number" 
                          min="1" 
                          value={item.quantity} 
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        />
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                        <button onClick={() => removeFromCart(item.id)} className="remove-button">
                          <FontAwesomeIcon icon={faTrash} /> {/* Ícono de papelera */}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <div className="cart-total">
              <strong>Total General: ${calculateTotal().toFixed(2)}</strong>
            </div>
            <br></br>
            <button className="pay-button" onClick={handlePayment}>Pagar</button>
          </div>
        </Modal>
      )}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider };