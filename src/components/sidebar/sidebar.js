import React, { useEffect, useRef } from 'react';
import './sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, categories = [] }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(); // Cierra el sidebar si se hace clic afuera
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside); // Detecta clics afuera
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Limpia el evento al desmontar o cerrar el sidebar
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-section">
        <h2>Categorías</h2>
        <ul>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))
          ) : (
            <>
              <li>Medicamentos</li>
              <li>Vitaminas y suplementos</li>
              <li>Cuidado personal</li>
              <li>Equipo médico</li>
            </>
          )}
        </ul>
      </div>

      <div className="sidebar-section">
        <h2>Tiendas físicas</h2>
        <ul>
          <li>Tienda 1</li>
          <li>Tienda 2</li>
          <li>Tienda 3</li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h2>Contáctenos</h2>
        <ul>
          <li>Email: contacto@medicommerce.com</li>
          <li>Teléfono: +123456789</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
