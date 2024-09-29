import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faShoppingCart, faPills } from '@fortawesome/free-solid-svg-icons';
import { useShoppingCart } from '../shoppingcart/shoppingcart.js';
import Login from '../login/login.js';
import Modal from '../modal/modal.js';

const Header = ({ onSearch }) => {
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { toggleCart, getCartItemCount } = useShoppingCart(); // Obtener la función para contar productos

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className="header-container">
      <div className="logo-section">
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
        <FontAwesomeIcon icon={faPills} className="header-logo" /> 
      </div>
      <div>
        <h1>Bienvenido a MediCommerce Online</h1>
      </div>

      <div className="user-section">
        <button onClick={handleLoginClick} className="user-link">
          <span>{userEmail ? userEmail : 'Mi cuenta'}</span>
          <FontAwesomeIcon icon={faUser} className="user-icon" />  
        </button>
        <button onClick={toggleCart} className="cart-button">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          {getCartItemCount() > 0 && ( // Mostrar el contador solo si hay productos en el carrito
            <span className="cart-count">{getCartItemCount()}</span>
          )}
        </button>
      </div>
      
      {showModal && (
        <Modal onClose={closeModal} setShowModal={setShowModal}>
          <Login setShowModal={setShowModal} setUserEmail={setUserEmail} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
