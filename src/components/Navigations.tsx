import React from 'react';
import NextLink from 'next/link';
import {
  Button,
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
} from '@chakra-ui/core';
import styled from '@emotion/styled';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function DrawerNav() {
    const btnRef = React.useRef();

    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />

          <DrawerContent w={250}>
            <DrawerCloseButton />
            <DrawerHeader
              borderBottomWidth="1px"
              backgroundColor="cyan.400"
              color="white"
            >
              PAPERBACK TRAVELS
            </DrawerHeader>
            <DrawerBody>
              <Flex color="#000" direction="column" alignItems="flex-start">
                <NextLink href="/book-overviews" passHref>
                  <Button
                    as="a"
                    variant="link"
                    fontSize={18}
                    py={[3]}
                    color="cyan.400"
                  >
                    Book Overviews
                  </Button>
                </NextLink>
                <NextLink href="/about" passHref>
                  <Button
                    as="a"
                    variant="link"
                    fontSize={18}
                    py={[3]}
                    color="cyan.400"
                  >
                    About
                  </Button>
                </NextLink>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <StickyNav
      width="100%"
      bg="cyan.400"
      as="nav"
      p={[4, 4, 8]}
      fontFamily="Raleway"
    >
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
              variant="link"
              fontSize={[20, 20, 28]}
              fontWeight={500}
              color="white"
              p={[1, 4]}
            >
              PAPERBACK TRAVELS
            </Button>
          </NextLink>
        </Box>
        <Box color="#ffffff" display={['none', 'none', 'block']}>
          <NextLink href="/book-overviews" passHref>
            <Button
              as="a"
              variant="link"
              fontSize={24}
              fontWeight={300}
              p={[1, 4]}
              color="white"
            >
              Book Overviews
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="link"
              fontSize={24}
              fontWeight={300}
              p={[1, 4]}
              color="white"
            >
              About
            </Button>
          </NextLink>
        </Box>
        <Box color="#ffffff" display={['block', 'block', 'none']}>
          <Button
            as="button"
            variant="link"
            fontSize={24}
            p={[1, 4]}
            onClick={onOpen}
          >
            <Icon name="hamburger" color="white" />
          </Button>
        </Box>
      </Flex>
      <DrawerNav />
    </StickyNav>
  );
};

export default Navigation;
