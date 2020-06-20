import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack, Box } from '@chakra-ui/core';
import { frontMatter as bookOverviewPosts } from '../pages/book-overviews/**/*.mdx';
import PictureItem from './PictureItem';
import Link from 'next/link';

export default function Homepage() {
  return (
    <div>
      <Box p={8} w="100%">
        <Flex justify="space-between" direction={['column', 'row']}>
          {bookOverviewPosts.map(frontMatter => (
            <Link
              key={frontMatter.slug}
              passHref
              href={`/book-overviews/${frontMatter.category}/${frontMatter.slug}`}
            >
              <a>
                <PictureItem
                  slug={frontMatter.slug}
                  title={frontMatter.title}
                  author={frontMatter.author}
                />
              </a>
            </Link>
          ))}
        </Flex>
      </Box>
    </div>
  );
}
