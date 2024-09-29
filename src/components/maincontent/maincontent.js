import React from 'react';
import './maincontent.css';
import Catalog from '../catalog/catalog.js';
import Carousel from '../carousel/carousel.js';


const MainContent = () => {

  return (
    <div className="main-content">
      <Carousel />
      <p>Aquí puedes encontrar los mejores productos farmacéuticos a precios competitivos.</p>
      <Catalog /> 
    </div>
  );
}

export default MainContent;
