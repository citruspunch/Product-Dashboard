import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';


export default function Navigation() {
    return (
        <Box bg="teal.500" p={5}>
            <Flex as="nav" justify="space-between" align="center">
                <Link as={RouterLink} to="/" fontWeight="bold" fontFamily="Poppins" _hover={{ textDecoration: 'underline' }}>
                    Home
                </Link>
                <Link as={RouterLink} to="/cart" fontWeight="bold" fontFamily="Poppins" _hover={{ textDecoration: 'underline' }}>
                    Shopping Cart
                </Link>
                <ColorModeButton />
            </Flex>
        </Box>
    );
}