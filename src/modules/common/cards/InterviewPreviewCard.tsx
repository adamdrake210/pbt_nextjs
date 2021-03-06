import React from 'react';
import { Heading, Flex, Box, Text, Image, Tag } from '@chakra-ui/react';
import { CLOUDINARY_URL } from '../../../constants';

const InterviewPreviewCard = ({
  slug,
  title,
  description,
  readTime,
  imageUniqueIdentifier,
}) => {
  return (
    <Box
      key={imageUniqueIdentifier}
      w="100%"
      shadow="sm"
      borderBottom="5px solid #00A3C4"
      p={4}
    >
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`${CLOUDINARY_URL}c_scale,h_205,w_300/images/interviews/${slug}_${imageUniqueIdentifier}.jpg`}
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
            <Tag colorScheme="cyan" size="md" mt={2} width="130px">
              Read Interview
            </Tag>
            <Text fontStyle="italic" color="grey" mt={1}>
              {`${readTime.text}`}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default InterviewPreviewCard;
