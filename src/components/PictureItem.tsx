import React from 'react';
import { Box, Image, Badge, Tag, Flex } from '@chakra-ui/core';

interface Props {
  slug: string;
  title: string;
  author: string;
  category: string;
}

export const PictureItem: React.FC<Props> = ({
  slug,
  title,
  author,
  category,
}) => {
  return (
    <Box my={['24px', '16px']} w={266}>
      <Image
        src={`./images/book-summaries/${slug}.jpg`}
        alt={`${author} - ${title}`}
        w={266}
        h={400}
        mb={2}
      />
      <Flex justifyContent={'space-between'} alignItems="center">
        <Badge variantColor="purple">{category}</Badge>
        <Tag variantColor="cyan" size="sm">
          Read Summary
        </Tag>
      </Flex>
    </Box>
  );
};
