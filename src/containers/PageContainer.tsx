import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, Image, Stack } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900',
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white',
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)',
  };

  return (
    <>
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
          <NextLink href="/bookoverviews" passHref>
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
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
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
            {children}
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default Container;
