import React from 'react';
import './App.css'; // Estilos globales de la app
import Header from './components/header/header.js';

function App() {
  return (
    <div className="App">
      <Header /> {/* Usar el componente Header */}
      <header className="App-header">
        {/* Otros contenidos o componentes pueden ir aquí */}
      </header>
    </div>
  );
}

export default App;