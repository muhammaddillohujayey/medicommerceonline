import React from 'react';
import './modal.css';

const Modal = ({ children, onClose, setShowModal }) => {

  const handleOverlayClick = (e) => {

    if (e.target.className === ('modal-overlay')) {
      onClose();
      setShowModal(false);
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