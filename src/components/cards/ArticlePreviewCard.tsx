import React from 'react';
import { Heading, Flex, Box, Text, Image, Tag } from '@chakra-ui/react';

const ArticlePreviewCard = ({
  slug,
  title,
  imageUniqueIdentifier,
  description,
  readingTime,
}) => {
  return (
    <Box key={slug} w="100%" shadow="sm" p={4} borderBottom="5px solid #00A3C4">
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`https://res.cloudinary.com/dg2r37ygd/image/upload/c_scale,h_205,w_300/v1605448173/images/articles/${slug}_${imageUniqueIdentifier}.jpg`}
          alt={title}
          w={['100%', 300]}
          mr={[0, 0, 4]}
          mb={[4, 0]}
        />
        <Flex flexDirection="column">
          <Heading fontSize="xl" mb={-2} color="cyan.900">
            {title}
          </Heading>
          <Text mt={2}>{description}</Text>
          <Box w="100%" textAlign={['center', 'left']}>
            <Tag colorScheme="cyan" size="md" mt={2} width="116px">
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
