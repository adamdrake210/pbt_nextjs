import React from 'react';
import { useColorMode, Heading, Flex, Stack } from '@chakra-ui/core';
//@ts-ignore
import { frontMatter as bookOverviewPosts } from '../pages/book-overviews/**/*.mdx';
import PictureItem from './PictureItem';
import Link from 'next/link';
import { FrontMatterType } from '../types/types';

export default function Homepage() {
  return (
    <Flex
      p={[4, 8]}
      w="100%"
      justify={['center', 'center', 'space-between']}
      alignItems={['center']}
      direction={['column', 'row']}
      flexWrap="wrap"
    >
      {bookOverviewPosts.map(
        (frontMatter: FrontMatterType) =>
          frontMatter.published && (
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
          ),
      )}
    </Flex>
  );
}
