import React, { useState } from 'react';
import './catalog.css';
import { useShoppingCart } from '../shoppingcart/shoppingcart';

const productImages = {
    paracetamol: require('../../images/Paracetamol.jpg'),
    acetaminofen: require('../../images/Acetaminofen.jpg'),
    vitaminaC: require('../../images/vitaminaC.jpg'),
    mylanta: require('../../images/Mylanta.jpg'),
    balsamoLabial: require('../../images/balsamo-labial.jpg'),
    ensure: require('../../images/Ensure.jpg'),
    termometro: require('../../images/termometro.jpg'),
    azitromicina: require('../../images/Azitromicina-MK-suspension-200mg-x15ml.jpg'),
    cepillo: require('../../images/Cepillo oral B.jpg'),
    tensiometro: require('../../images/tensiometro_digital.jpg'),
    vitaminaA: require('../../images/vitaminaC.jpg'),
    vitaminaD: require('../../images/vitaminaC.jpg'),
};

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { addToCart } = useShoppingCart();

    const products = [
        { id: 1, name: 'Paracetamol', price: 10000, image: productImages.paracetamol, category: 'Medicamentos' },
        { id: 2, name: 'Acetaminofen', price: 2500, image: productImages.acetaminofen, category: 'Medicamentos' },
        { id: 3, name: 'Vitamina C', price: 20000, image: productImages.vitaminaC, category: 'Vitaminas y suplementos' },
        { id: 4, name: 'Mylanta', price: 15000, image: productImages.mylanta, category: 'Medicamentos' },
        { id: 5, name: 'Balsamo labial', price: 12000, image: productImages.balsamoLabial, category: 'Cuidado personal' },
        { id: 6, name: 'Ensure', price: 18000, image: productImages.ensure, category: 'Vitaminas y suplementos' },
        { id: 7, name: 'Termometro', price: 30000, image: productImages.termometro, category: 'Equipo medico' },
        { id: 8, name: 'Azitromicina', price: 22000, image: productImages.azitromicina, category: 'Medicamentos' },
        { id: 9, name: 'Cepillo', price: 12000, image: productImages.cepillo, category: 'Cuidado personal' },
        { id: 10, name: 'Tensiometro', price: 18000, image: productImages.tensiometro, category: 'Equipo medico' },
        { id: 11, name: 'Vitamina A', price: 30000, image: productImages.vitaminaA, category: 'Vitaminas y suplementos' },
        { id: 12, name: 'Vitamina D', price: 22000, image: productImages.vitaminaD, category: 'Vitaminas y suplementos' },
    ];

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="catalog-container">
            <h2 className="catalog-title">Catálogo de productos</h2>

            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="¿Que estas buscando?"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="search-button" type="submit">
                    Buscar
                </button>
            </form>

            <div className="catalog">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price.toFixed(2)}</p>
                            <button 
                                className="add-to-cart"
                                onClick={() => handleAddToCart(product)}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron productos.</p>
                )}
            </div>
        </div>
    );
};

export default Catalog;