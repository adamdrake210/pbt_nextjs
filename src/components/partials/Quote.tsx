import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';

export default function Quote() {
  return (
    <Box
      as="section"
      px={[2, 2, 2, 8]}
      py={[4, 8]}
      backgroundColor="cyan.500"
      color="white"
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        “Reading is a discount ticket to everywhere.” - Mary Schmich
      </Heading>

      <Text fontSize="xl" textAlign="center">
        Welcome to Paperback Travels. The world is full of words. This is our
        attempt to guide you towards some of the best combinations of them.
      </Text>
    </Box>
  );
}
