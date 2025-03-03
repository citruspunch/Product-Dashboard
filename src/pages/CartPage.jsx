import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

export default function CartPage(){
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <ShoppingCart />
            <button>Checkout</button>
        </div>
    );
};