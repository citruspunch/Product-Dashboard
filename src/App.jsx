import React, {useState}  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components';
import { HomePage, ProductPage, CartPage } from './pages';

const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 1000,
        description: 'New Macbook Pro',
        image: 'https://istore.gt/wp-content/uploads/2023/02/ART004467i-1.jpg'
    },
    {
        id: 2,
        name: 'Desktop',
        price: 1500,
        description: 'Gaming Desktop',
        image: 'https://m.media-amazon.com/images/I/81JlCSDZ3AL._AC_SL1500_.jpg'
    },
    {
        id: 3,
        name: 'Tablet',
        price: 500,
        description: 'Samsung Galaxy Tab',
        image: 'https://shop.samsung.com/latin/cac/pub/media/catalog/product/cache/45eacecef37c2d34dea6bd1d0132e77c/s/m/sm-x820n_galaxy-tab-s10plus_00_thumb.png'
    }
];

export default function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        if (cartItems.find(item => item.id === product.id)) {
            setCartItems(cartItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    const handleRemoveItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const handleUpdateQuantity = (itemId, quantity) => {
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
    };
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage onAddToCart={handleAddToCart} products={products} />} />
                    <Route path="/product/:id" element={<ProductPage products={products}/>} />
                    <Route path="/cart" element={<CartPage cartItems={cartItems} removeItem={handleRemoveItem} updateQuantity={handleUpdateQuantity} getTotal={getTotalAmount} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};