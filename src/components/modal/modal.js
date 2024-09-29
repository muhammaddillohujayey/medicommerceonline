import React from 'react';
import './modal.css';
import Login from '../login/login';

const Modal = ({ children, onClose }) => {

  const handleOverlayClick = (event) => {
    
    if (event.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>x</button>
        {children} 
      </div>
    </div>
  );
};

export default Modal;