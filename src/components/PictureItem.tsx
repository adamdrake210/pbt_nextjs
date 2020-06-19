import React from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Image,
} from '@chakra-ui/core';

type Props = {
  slug: string;
  title: string;
  author: string;
};

export default function PictureItem({ slug, title, author }: Props) {
  return (
    <Box size="sm">
      <Image
        src={`./images/book-overviews/${slug}.jpg`}
        alt={`${author} - ${title}`}
        w={266}
        h={400}
      />
    </Box>
  );
}
