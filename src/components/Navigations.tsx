import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Navigation = () => {
  return (
    <StickyNav width="100%" bg="cyan.600" as="nav" p={8}>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1200px"
        width="100%"
        m="0 auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              fontSize={28}
              fontWeight={600}
              color="white"
              p={[1, 4]}
            >
              PAPER BACK TRAVELS
            </Button>
          </NextLink>
        </Box>
        <Box color="#ffffff">
          <NextLink href="/book-overviews" passHref>
            <Button as="a" variant="ghost" fontSize={24} p={[1, 4]}>
              Book Overviews
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" fontSize={24} p={[1, 4]}>
              About
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </StickyNav>
  );
};

export default Navigation;
