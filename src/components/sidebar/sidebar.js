// src/sidebar/sidebar.js
import React from 'react';
import './sidebar.css';

const Sidebar = ({ isOpen, onClose, categories = [] }) => { // Valor por defecto para categories
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>X</button>
      <h2>Categorías</h2>
      <ul>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))
        ) : (
          <li>No hay categorías disponibles</li> // Mensaje por si no hay categorías
        )}
      </ul>
    </div>
  );
};

export default Sidebar;