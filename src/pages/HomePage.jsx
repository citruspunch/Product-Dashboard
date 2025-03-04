import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import ProductList from '../components/ProductList';

export default function HomePage({ onAddToCart, products }) {
    return (
        <Box p={7}>
            <Heading as="h1" size="5xl" mb={4} fontWeight="bold" fontFamily="Poppins" textAlign="center">Welcome to the Product Dashboard</Heading>
            <Text px={5} pt={5} fontWeight="semibold" fontSize="2xl" fontFamily="Poppins" mb={4}>Featured Products</Text>
            <ProductList products={products} onAddToCart={onAddToCart} />
        </Box>
    );
}