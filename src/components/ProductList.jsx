import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ products, onAddToCart }) {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};