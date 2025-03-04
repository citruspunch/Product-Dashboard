import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Heading, List, ListItem, Text, Link } from '@chakra-ui/react';

export default function ProductList({ products, onAddToCart }) {
    return (
        <Box p={4}>
            <List.Root gap={4}>
                {products.map(product => (
                    <ListItem key={product.id} p={4} borderWidth="1.5px" borderRadius="lg">
                        <Heading size="xl" fontWeight="semibold" fontFamily="Poppins">
                            <Link as={RouterLink} to={`/product/${product.id}`} color="teal.500" _hover={{ textDecoration: 'underline' }} >
                                {product.name}
                            </Link>
                        </Heading>
                        <Text fontFamily="Poppins">{product.description}</Text>
                        <Text fontFamily="Poppins" fontWeight="bold">Price: ${product.price}</Text>
                        <Button fontFamily="Poppins" mt={2} colorScheme="teal" onClick={() => onAddToCart(product)}>Add to Cart</Button>
                    </ListItem>
                ))}
            </List.Root>
        </Box>
    );
}