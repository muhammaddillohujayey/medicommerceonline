import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../login/login.js';
import logo from '../../images/logoMC.webp'; // Ajusta la ruta según tu estructura


function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin); // Muestra u oculta el componente Login
  };

  return (
    <header className="header-container">
      <div className="logo-section">
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
        <img className="header-logo" src={logo} alt="Logo MediCommerce" />  
      </div>

      <div className="search-section">
        <form className="search-form">
          <input type="text" className="search-input" placeholder="¿Qué estás buscando?" />
          <button className="search-button" type="submit">Buscar</button>
        </form>
      </div>

      <div className="user-section">
        <button onClick={handleLoginClick} className="user-link">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <span>Mi cuenta</span>
        </button>
      </div>
      {/* Mostrar el componente Login cuando el estado showLogin sea verdadero */}
      {showLogin && <Login />}
    </header>
  );
}

export default Header;