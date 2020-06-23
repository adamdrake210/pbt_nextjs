import React from 'react';
import { Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StickyFooter = styled(Flex)`
  z-index: 10;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default function Footer() {
  return (
    <StickyFooter>
      <Flex
        w="100%"
        p="5px 0"
        justifyContent="center"
        alignContent="center"
        backgroundColor="cyan.400"
        color="white"
      >
        PaperBackTravels Copyright &#169; {new Date().getFullYear()}
      </Flex>
    </StickyFooter>
  );
}
