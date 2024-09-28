import React from 'react';
import './App.css'; // Estilos globales de la app
import Header from './components/header/header.js';
import MainContent from './components/maincontent/maincontent.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className="App">
      <Header /> {/* Usar el componente Header */}
      <MainContent /> {/* Contenido principal */}
      <Footer /> {/* Usar el componente Footer */}
    </div>
  );
}

export default App;