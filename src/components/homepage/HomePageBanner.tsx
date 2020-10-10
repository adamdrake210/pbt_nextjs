import React from 'react';
import { Flex, Text, Box, Link, Tag, Image, Heading } from '@chakra-ui/core';
import NextLink from 'next/link';

export default function HomePageBanner({ post, pageCategory, cta }) {
  const { slug, title, description, readingTime } = post;

  return (
    <Box
      w="100%"
      shadow={['none', 'none', 'none', 'sm']}
      p={4}
      mb={8}
      borderBottom="5px solid #00A3C4"
    >
      <NextLink passHref href={`/${pageCategory}/${slug}`} key={slug}>
        <Link
          _hover={{
            backgroundColor: '#f6f6f6',
          }}
          w="100%"
        >
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Image
              src={`/images/${pageCategory}/${slug}.jpg`}
              alt={`${title}`}
              w={['100%', '100%', '100%', '50%']}
              mr={[0, 0, 0, 4]}
              mb={[4, 4, 4, 0]}
            />
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Heading fontSize={40} color="cyan.900">
                {title}
              </Heading>
              <Text mt={2} fontSize={20}>
                {description}
              </Text>
              <Box w="100%" textAlign={['center', 'left']}>
                <Tag variantColor="cyan" size="lg" mt={2}>
                  {cta}
                </Tag>
                <Text fontStyle="italic" color="grey" mt={1}>
                  {`${readingTime.text}`}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}
