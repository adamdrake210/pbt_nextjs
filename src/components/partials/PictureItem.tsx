import React from 'react';
import { Box, Image, Tag, Flex, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

interface Props {
  slug: string;
  title: string;
  author: string;
  category?: string;
}

export const PictureItem: React.FC<Props> = ({
  slug,
  title,
  author,
  category,
}) => {
  return (
    <Box w={266}>
      <NextLink
        key={slug}
        passHref
        href={`/book-summaries/${category.toLowerCase()}/${slug.toLowerCase()}`}
      >
        <Link>
          <Image
            src={`./images/book-summaries/${slug}.jpg`}
            alt={`${author} - ${title}`}
            w={266}
            h={400}
            mb={2}
          />
          <Flex
            justifyContent={['center', 'space-between']}
            alignItems="center"
          >
            <Tag variantColor="cyan" size="sm">
              Read Summary
            </Tag>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
};
