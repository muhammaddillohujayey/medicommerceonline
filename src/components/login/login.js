import React, { useState } from 'react';
import './login.css'; // Crea este archivo para estilos personalizados
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logoMC.webp'; // Asegúrate de tener el logo en la ruta correcta

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para iniciar sesión
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt="MediCommerce Logo" />
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input
            type="text"
            placeholder="Email o Número de identificación"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Ingresar</button>

        <div className="login-links">
          <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a><br/><br/>
          <a href="#" className="create-account">¿No tienes cuenta? Crear cuenta</a>
        </div>
      </form>
    </div>
  );
};

export default Login;