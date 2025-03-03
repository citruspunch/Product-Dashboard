import React from 'react';

export default function ProductPage(productList) {
    return (
        <div>
            <h1>Product Details</h1>
            {productList.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};