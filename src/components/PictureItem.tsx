import React from 'react';
import { Box, Image, Badge, Tag, Flex } from '@chakra-ui/core';

type Props = {
  slug: string;
  title: string;
  author: string;
  category: string;
};

export default function PictureItem({ slug, title, author, category }: Props) {
  return (
    <Box m={['24px 0', '16px 0']}>
      <Image
        src={`./images/book-overviews/${slug}.jpg`}
        alt={`${author} - ${title}`}
        w={266}
        h={400}
        mb={2}
      />
      <Flex justifyContent={'space-between'} alignItems="center">
        <Badge variantColor="purple">{category}</Badge>
        <Tag variantColor="cyan" size="sm">
          Read Overview
        </Tag>
      </Flex>
    </Box>
  );
}
