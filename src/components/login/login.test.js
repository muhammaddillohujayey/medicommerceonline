import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login';

describe('Login Component - Autenticación', () => {
  const mockSetShowModal = jest.fn();
  const mockSetUserEmail = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe mostrar mensaje de error con credenciales incorrectas', () => {
    render(<Login setShowModal={mockSetShowModal} setUserEmail={mockSetUserEmail} />);

    // Ingresar credenciales incorrectas
    fireEvent.change(screen.getByPlaceholderText(/Email o Número de Identificación/i), { 
      target: { value: 'wronguser@example.com' } 
    });
    fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), { 
      target: { value: 'wrongpassword' } 
    });

    // Disparar el evento de clic en el botón de Ingresar
    fireEvent.click(screen.getByText(/Ingresar/i));

    // Verificar que se muestra el mensaje de error
    expect(screen.getByText(/Credenciales incorrectas. Intenta de nuevo./i)).toBeInTheDocument();

    // Asegurarse de que el modal no se cerró ni se actualizó el email
    expect(mockSetShowModal).not.toHaveBeenCalled();
    expect(mockSetUserEmail).not.toHaveBeenCalled();
  });
});