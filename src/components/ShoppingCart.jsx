import React from 'react';

export default function ShoppingCart({ cartItems, removeItem, updateQuantity, getTotal }) {
    

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                            <input 
                                type="number" 
                                value={item.quantity} 
                                onChange={(e) => updateQuantity(item.id, Number(e.target.value))} 
                                min="1" 
                            />
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${getTotal().toFixed(2)}</h3>
        </div>
    );
};
