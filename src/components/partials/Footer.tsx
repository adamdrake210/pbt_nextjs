import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
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
        p="16px 24px"
        justifyContent="center"
        alignContent="center"
        textAlign="center"
        backgroundColor="cyan.600"
        color="white"
        flexDirection="column"
      >
        <Text>PaperBackTravels &#169; {new Date().getFullYear()}</Text>
        <Text fontSize={12}>
          Paperback Travels is an Amazon Associate. When you buy through links
          on our site, we may earn a commission through qualifying purchases.
        </Text>
      </Flex>
    </StickyFooter>
  );
}
