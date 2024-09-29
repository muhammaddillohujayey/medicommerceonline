import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './App.css'; // Estilos globales de la app
import Header from './components/header/header.js';
import MainContent from './components/maincontent/maincontent.js';
import Footer from './components/footer/footer.js';
import { ShoppingCartProvider } from './components/shoppingcart/shoppingcart'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <ShoppingCartProvider> {/* Envuelve la aplicación con ShoppingCartProvider */}
      <div className="App">
        <Header /> {/* Usar el componente Header */}
        <MainContent /> {/* Contenido principal */}
        <Footer /> {/* Usar el componente Footer */}
      </div>
    </ShoppingCartProvider>
  );
}

export default App;