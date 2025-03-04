import React from 'react';
import { Box } from '@chakra-ui/react';
import ShoppingCart from '../components/ShoppingCart';

export default function CartPage({ cartItems, removeItem, updateQuantity, getTotal }) {
    return (
        <Box p={4}>
            <ShoppingCart cartItems={cartItems} removeItem={removeItem} updateQuantity={updateQuantity} getTotal={getTotal} />
        </Box>
    );
}