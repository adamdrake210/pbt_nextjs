import React from 'react';
import { Heading, Flex, Box, Text, Image, Tag } from '@chakra-ui/core';
// @ts-ignore
const BookPreviewCard = ({
  category,
  slug,
  author,
  title,
  intro,
  readingTime,
}) => {
  return (
    <Box
      key={category}
      w="100%"
      shadow="sm"
      p={4}
      borderBottom="5px solid #00A3C4"
    >
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`/images/book-summaries/${slug}.jpg`}
          alt={`${author} - ${title}`}
          w={90}
          h={140}
          mr={4}
          mb={[4, 0]}
        />
        <Flex flexDirection="column">
          <Heading
            color="cyan.900"
            fontSize="xl"
            mb={-2}
          >{`${title} - ${author}`}</Heading>
          <Text mt={2}>{intro}</Text>
          <Box w="100%" textAlign={['center', 'left']}>
            <Tag variantColor="cyan" size="md" mt={2} width="116px">
              Read Summary
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

export default BookPreviewCard;
