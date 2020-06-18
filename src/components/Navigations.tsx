import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Box, Image } from '@chakra-ui/core';
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
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      // maxWidth="1200px"
      width="100%"
      bg="#7EB2FF"
      as="nav"
      p={8}
      mt={0}
      mb={8}
      mx="auto"
    >
      <Box px={4} h={6}>
        <Image
          size="200px"
          h="30px"
          src="vercel.svg"
          alt="Paper Back Travels Logo"
        />
      </Box>
      <Box>
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            Home
          </Button>
        </NextLink>
        <NextLink href="/book-overviews" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            Book Overviews
          </Button>
        </NextLink>
        <NextLink href="/about" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            About
          </Button>
        </NextLink>
      </Box>
    </StickyNav>
  );
};

export default Navigation;
