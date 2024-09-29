import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faPills } from '@fortawesome/free-solid-svg-icons';

const Login = ({ setShowModal, setUserEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const fakeUser = {
      email: 'yury.montoya@uniremington.edu.co',
      password: '123456'
    };

    if (email === fakeUser.email && password === fakeUser.password) {
      setMessage('Inicio de sesión exitoso!');
      setUserEmail(email);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    } else {
      setMessage('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesion</h2>
      <div className="login-logo">
        <FontAwesomeIcon icon={faPills} className="header-logo" />
      </div>
      <div className="input-group">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input 
          type="text" 
          placeholder="Email o Número de Identificación" 
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
      <button className="login-button" type="submit" onClick={handleLogin}>Ingresar</button>
      {message && <p className="login-message">{message}</p>}
      <div className="login-links">
        <a href="#">Recuperar contraseña</a>
        <p>¿No tienes cuenta? <a href="#">Crea una cuenta</a></p>
      </div>
    </div>
  );
};

export default Login;