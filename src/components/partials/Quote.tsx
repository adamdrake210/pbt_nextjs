import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Quote() {
  return (
    <Box
      as="section"
      px={[2, 2, 2, 8]}
      py={[4]}
      backgroundColor="cyan.400"
      color="white"
      mb={8}
      borderBottom="5px solid #00A3C4"
    >
      <Heading as="h3" size="md" mb={2} textAlign="center">
        “Reading is a discount ticket to everywhere.” - Mary Schmich
      </Heading>

      <Text fontSize="l" textAlign="center">
        Welcome to Paperback Travels. The world is full of words. This is our
        attempt to guide you towards some of the best combinations of them.
      </Text>
    </Box>
  );
}
