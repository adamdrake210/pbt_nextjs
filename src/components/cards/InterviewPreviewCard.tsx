import React from 'react';
import { Heading, Flex, Box, Text, Image, Tag } from '@chakra-ui/core';

const InterviewPreviewCard = ({ slug, title, description, readingTime }) => {
  return (
    <Box key={slug} w="100%" shadow="sm" borderBottom="5px solid #00A3C4" p={4}>
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`/images/interviews/${slug}.jpg`}
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
              Read Interview
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

export default InterviewPreviewCard;
