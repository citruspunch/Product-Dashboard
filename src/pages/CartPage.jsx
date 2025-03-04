import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

export default function CartPage({ cartItems, removeItem, updateQuantity, getTotal }) {
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <ShoppingCart cartItems={cartItems} removeItem={removeItem} updateQuantity={updateQuantity} getTotal={getTotal} />
            <button>Checkout</button>
        </div>
    );
};