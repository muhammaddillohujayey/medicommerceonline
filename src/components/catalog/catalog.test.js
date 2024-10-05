    import React from 'react';
    import { render, screen, fireEvent, within } from '@testing-library/react';
    import Catalog from './catalog';
    import { ShoppingCartProvider, useShoppingCart } from '../shoppingcart/shoppingcart';


    jest.mock('../shoppingcart/shoppingcart', () => {
        const actualModule = jest.requireActual('../shoppingcart/shoppingcart');
        return {
        ...actualModule,
        useShoppingCart: jest.fn(),
        };
    });

    describe('Catalog Component', () => {
    const mockAddToCart = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        useShoppingCart.mockReturnValue({
        addToCart: mockAddToCart,
        });
    });

    test('Debe agregar un producto al carrito correctamente', () => {

        render(
            <ShoppingCartProvider>
                <Catalog />
            </ShoppingCartProvider>
        );

    const productCard = screen.getByText(/paracetamol/i).closest('.product-card');

    const { getByRole } = within(productCard);
    
    const addToCartButton = getByRole('button', { name: /añadir al carrito/i });
    
    fireEvent.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalled();
    });

    test('Debe buscar y filtrar productos correctamente', () => {

        render(<Catalog />);

        const searchInput = screen.getByPlaceholderText(/¿Que estas buscando?/i);

        fireEvent.change(searchInput, { target: { value: 'Acetaminofen' } });

        const product = screen.getByText(/Acetaminofen/i);

        expect(product).toBeInTheDocument();

        const missingProduct = screen.queryByText(/Paracetamol/i);

        expect(missingProduct).not.toBeInTheDocument();
    });

    test('Debe mostrar "No se encontraron productos" cuando no hay coincidencias de búsqueda', () => {
        
        render(<Catalog />);

        const searchInput = screen.getByPlaceholderText(/¿Que estas buscando?/i);

        fireEvent.change(searchInput, { target: { value: 'Ibuprofeno' } });

        const noProductsMessage = screen.getByText(/No se encontraron productos/i);
        expect(noProductsMessage).toBeInTheDocument();
    });
    });

