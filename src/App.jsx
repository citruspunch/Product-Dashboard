import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components';
import { HomePage, ProductPage, CartPage } from './pages';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" exact element={HomePage} />
                    <Route path="/product/:id" element={ProductPage} />
                    <Route path="/cart" element={CartPage} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;