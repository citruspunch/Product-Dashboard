import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image, Container } from "@chakra-ui/react";

export default function ProductPage({ products }) {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <Box p={4}>Product not found</Box>;
    }

    return (
        <Container maxW="container.md" p={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" mx="auto" />
                <Heading as="h1" size="xl" mt={4} textAlign="center">{product.name}</Heading>
                <Text mt={2} textAlign="center">{product.description}</Text>
                <Text fontWeight="bold" mt={2} textAlign="center">Price: ${product.price}</Text>
            </Box>
        </Container>
    );
}