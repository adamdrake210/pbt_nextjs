import React from 'react';
import { Heading, Flex, Box, Text, Image, Tag } from '@chakra-ui/core';

const BookPreviewCard = ({
  category,
  slug,
  author,
  title,
  intro,
  readingTime,
  imageUniqueIdentifier,
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
          src={`https://res.cloudinary.com/dg2r37ygd/image/upload/c_scale,h_90,w_140/v1605448126/images/book-summaries/${slug}_${imageUniqueIdentifier}.jpg`}
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
