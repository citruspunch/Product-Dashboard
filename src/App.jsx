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
                    <Route path="/" exact component={HomePage} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route path="/cart" component={CartPage} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;