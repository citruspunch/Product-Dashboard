import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, ProductPage, CartPage } from './pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;