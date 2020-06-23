/** @jsx jsx */
import {
  Box,
  Callout,
  Code,
  Heading,
  Kbd,
  Link,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/core';
import { jsx } from '@emotion/core';
import NextLink from 'next/link';

const CustomLink = props => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)',
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = props => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900',
  };

  return (
    <Callout
      mt={4}
      w="98%"
      color="cyan.400"
      fontSize="20px"
      fontWeight="600"
      bg="white"
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  h1: props => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: props => (
    <Heading as="h2" fontWeight="bold" size="lg" m="32px 0 0px" {...props} />
  ),
  h3: props => (
    <Heading as="h3" size="md" fontWeight="bold" m="32px 0 0px" {...props} />
  ),
  inlineCode: props => (
    <Code variantColor="yellow" fontSize="0.84em" {...props} />
  ),
  kbd: Kbd,
  br: props => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: props => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: props => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: props => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: props => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
};

export default MDXComponents;
