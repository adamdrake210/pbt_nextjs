import React from 'react';
import NextLink from 'next/link';
import {
  Button,
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { HamburgerIcon } from '@chakra-ui/icons';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Navigation: React.FC = () => {
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
              fontWeight={600}
              fontFamily="Eczar"
            >
              PAPERBACK TRAVELS
            </DrawerHeader>
            <DrawerBody>
              <Flex
                color="#000"
                direction="column"
                alignItems="flex-start"
                fontWeight={600}
                textTransform="uppercase"
              >
                <NextLink href="/book-summaries" passHref>
                  <Button
                    as="a"
                    variant="link"
                    fontSize={18}
                    py={[3]}
                    color="cyan.400"
                    fontWeight={600}
                  >
                    Book Summaries
                  </Button>
                </NextLink>
                <NextLink href="/interviews" passHref>
                  <Button
                    as="a"
                    variant="link"
                    fontSize={18}
                    py={[3]}
                    color="cyan.400"
                    fontWeight={600}
                  >
                    Interviews
                  </Button>
                </NextLink>
                <NextLink href="/articles" passHref>
                  <Button
                    as="a"
                    variant="link"
                    fontSize={18}
                    py={[3]}
                    color="cyan.400"
                    fontWeight={600}
                  >
                    Articles
                  </Button>
                </NextLink>
                <NextLink href="/about" passHref>
                  <Button
                    as="a"
                    variant="link"
                    fontSize={18}
                    py={[3]}
                    color="cyan.400"
                    fontWeight={600}
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
      p={[2]}
      fontFamily="Raleway"
      shadow="lg"
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
              fontSize={[20, 20, 36]}
              fontWeight={700}
              color="white"
              p={[1, 2]}
              fontFamily="Eczar"
            >
              PAPERBACK TRAVELS
            </Button>
          </NextLink>
        </Box>
        <Box
          color="#ffffff"
          display={['none', 'none', 'none', 'block']}
          fontWeight={600}
          textTransform="uppercase"
        >
          <NextLink href="/book-summaries" passHref>
            <Button
              as="a"
              variant="link"
              color="#ffffff"
              fontSize={20}
              p={[1, 4]}
            >
              Book Summaries
            </Button>
          </NextLink>

          <NextLink href="/interviews" passHref>
            <Button
              as="a"
              variant="link"
              fontSize={20}
              p={[1, 4]}
              color="white"
            >
              Interviews
            </Button>
          </NextLink>
          <NextLink href="/articles" passHref>
            <Button
              as="a"
              variant="link"
              fontSize={20}
              p={[1, 4]}
              color="white"
            >
              Articles
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="link"
              fontSize={20}
              p={[1, 4]}
              color="white"
            >
              About
            </Button>
          </NextLink>
        </Box>
        <Box color="#ffffff" display={['block', 'block', 'block', 'none']}>
          <Button
            as="button"
            variant="link"
            fontSize={22}
            p={[1, 4]}
            onClick={onOpen}
          >
            <HamburgerIcon color="white" />
          </Button>
        </Box>
      </Flex>
      <DrawerNav />
    </StickyNav>
  );
};

export default Navigation;
