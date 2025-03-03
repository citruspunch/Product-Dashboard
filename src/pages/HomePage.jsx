import React from 'react';
import ProductList from '../components/ProductList';

export default function HomePage () {
    return (
        <div>
            <h1>Welcome to the Product Dashboard</h1>
            <h2>Featured Products</h2>
            <ProductList />
        </div>
    );
};
