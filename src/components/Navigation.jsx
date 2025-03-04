import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

export default function Navigation() {
    return (
        <Box bg="teal.500" p={4}>
            <Flex as="nav" justify="space-between" align="center">
                <Link as={RouterLink} to="/" color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                    Home
                </Link>
                <Link as={RouterLink} to="/cart" color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                    Shopping Cart
                </Link>
            </Flex>
        </Box>
    );
}