import React from 'react';
import './header.css';
import logo from '../../images/logoMC.webp';

function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt='Logo MediCommerce' className='header-logo' />  
      <h1>MediCommerce Online</h1>
    </header>
  );
}

export default Header;