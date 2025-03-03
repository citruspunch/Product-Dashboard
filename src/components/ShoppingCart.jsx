import React, {useState} from 'react';

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId ? { ...item, quantity: quantity } : item
        ));
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        cartItems.forEach(item => {
            totalAmount += item.price * item.quantity;
        });
        return totalAmount;
    }

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
            <h3>Total: ${getTotalAmount().toFixed(2)}</h3>
        </div>
    );
};
