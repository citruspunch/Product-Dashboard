import React from 'react';
import { Box, Heading, Text, Button, List, ListItem, Input } from '@chakra-ui/react';

export default function ShoppingCart({ cartItems, removeItem, updateQuantity, getTotal }) {
    return (
        <Box p={4}>
            <Heading as="h1" mb={7} size="4xl" fontFamily="Poppins" >Shopping Cart</Heading>
            {cartItems.length === 0 ? (
                <Text fontFamily="Poppins" color="teal.500">Your cart is empty.</Text>
            ) : (
                <List.Root spacing={4}>
                    {cartItems.map(item => (
                        <ListItem key={item.id} p={4} borderWidth="1px" borderRadius="lg">
                            <Heading size="xl" fontFamily="Poppins"color="teal.500">{item.name}</Heading>
                            <Text fontFamily="Poppins">Price: ${item.price}</Text>
                            <Text fontFamily="Poppins">Quantity: 
                                <Input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))} 
                                    min="1" 
                                    max="10"
                                    width="60px"
                                    ml={2}
                                />
                            </Text>
                            <Button mt={2} colorScheme="red" fontFamily="Poppins" onClick={() => removeItem(item.id)} >Remove</Button>
                        </ListItem>
                    ))}
                </List.Root>
            )}
            <Heading as="h3" mt={4} fontFamily="Poppins">Total: ${getTotal().toFixed(2)}</Heading>
        </Box>
    );
}