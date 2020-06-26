import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/core';

export default function About() {
  return (
    <Box p={[4, 8]}>
      <Heading as="h1" size="2xl">
        About Us
      </Heading>
      <Text>
        Paperback Travels is a small corner of the internet dedicated to sharing
        non-fiction books that have had an impact on us.
      </Text>
      <Text>
        We discuss books covering many topics and from many time periods. Some
        are bestsellers, others may be out of print. We don’t always agree with
        the authors and maybe don’t always even understand what they’re saying,
        but each book has helped us grow, and we hope they will help you grow
        too.
      </Text>
    </Box>
  );
}
