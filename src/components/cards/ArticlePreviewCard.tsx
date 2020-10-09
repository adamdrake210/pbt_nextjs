import React from 'react';
import { Heading, Flex, Box, Text, Image, Tag } from '@chakra-ui/core';

const ArticlePreviewCard = ({ slug, title, description, readingTime }) => {
  return (
    <Box key={slug} w="100%" shadow="md" borderWidth="1px" p={4}>
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`/images/articles/${slug}.jpg`}
          alt={title}
          w={300}
          mr={4}
          mb={[4, 0]}
        />
        <Flex flexDirection="column">
          <Heading fontSize="xl" mb={-2} color="cyan.900">
            {title}
          </Heading>
          <Text mt={2}>{description}</Text>
          <Box w="100%" textAlign={['center', 'left']}>
            <Tag variantColor="cyan" size="md" mt={2} width="116px">
              Read Article
            </Tag>
            <Text fontStyle="italic" color="grey" mt={1}>
              {`${readingTime.text}`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ArticlePreviewCard;
