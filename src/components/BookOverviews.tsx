import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

export default function BookOverviews() {
  return (
    <div>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="900px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="900px"
        >
          <Heading as="h1" size="2xl">
            Book Overviews
          </Heading>
        </Flex>
      </Stack>
    </div>
  );
}
