import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logoMC.webp';

const Login = ({setShowModal, setUserEmail}) => {
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
      },2000);
      
    } else {
      setMessage('Credenciales incorrectas. Intenta de nuevo.');
    }
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
        <button className="login-button" type="submit">Ingresar</button>
      </form>
      {message && <p className="login-message">{message}</p>}
      <div className="login-links">
        <a href="#">Recuperar contraseña</a>
        <p>¿No tienes cuenta? <a href="#">Crea una cuenta</a></p>
      </div>
    </div>
  );
};

export default Login;
