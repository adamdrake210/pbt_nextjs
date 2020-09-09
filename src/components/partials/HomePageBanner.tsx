import React from 'react';
import { Flex, Text, Box, Link, Tag, Image, Heading } from '@chakra-ui/core';
import NextLink from 'next/link';

export default function HomePageBanner({ post }) {
  const { category, slug, title, description, readingTime } = post;
  return (
    <NextLink passHref href={`/interviews/${slug}`} key={slug}>
      <Link
        _hover={{
          backgroundColor: '#f6f6f6',
        }}
        w="100%"
      >
        <Box w="100%" shadow="md" borderWidth="1px" p={4}>
          <Flex
            flexDirection={['column', 'row']}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Image
              src={`/images/interviews/${slug}.jpg`}
              alt={`${title}`}
              w={['100%', '50%']}
              mr={[0, 4]}
              mb={[4, 0]}
            />
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Heading fontSize={40}>{title}</Heading>
              <Text mt={2} fontSize={20}>
                {description}
              </Text>
              <Box w="100%" textAlign={['center', 'left']}>
                <Tag variantColor="cyan" size="lg" mt={2}>
                  Read Interview
                </Tag>
                <Text fontStyle="italic" color="grey" mt={1}>
                  {`${readingTime.text}`}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </NextLink>
  );
}
