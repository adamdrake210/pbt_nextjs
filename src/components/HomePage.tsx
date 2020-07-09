import React, { useState, useEffect } from 'react';
import { Flex, Text, Heading, Box, Link } from '@chakra-ui/core';
//@ts-ignore
import { frontMatter as bookOverviewPosts } from '../pages/book-overviews/**/*.mdx';
import PictureItem from './PictureItem';
import NextLink from 'next/link';
import { FrontMatterType } from '../types/types';
import EmailSubscription from './EmailSubscription';

export default function Homepage() {
  const [sortedBooks, setSortedBooks] = useState([]);

  function sortNumber(a: FrontMatterType, b: FrontMatterType) {
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  }

  const handleSortingBookOrder = () => {
    setSortedBooks(bookOverviewPosts.sort(sortNumber));
  };

  useEffect(() => {
    handleSortingBookOrder();
  }, [bookOverviewPosts]);

  return (
    <Flex mt={12} w="100%" direction="column" alignItems="center">
      <Box as="section" px={[4, 8]}>
        <Heading as="h1" size="lg" mb={4} textAlign="center">
          “Reading is a discount ticket to everywhere.” - Mary Schmich
        </Heading>

        <Text fontSize="xl" textAlign="center">
          Welcome to Paperback Travels. The world is full of words. This is our
          attempt to guide you towards some of the best combinations of them.
        </Text>
      </Box>
      <Box as="section" mt={12} px={[4, 8]}>
        <Flex
          pb={[4, 8]}
          w="100%"
          justify={['center', 'center', 'space-between', 'flex-start']}
          alignItems={['center']}
          direction={['column', 'row']}
          flexWrap="wrap"
        >
          {sortedBooks &&
            sortedBooks.map(
              (frontMatter: FrontMatterType) =>
                frontMatter.published && (
                  <NextLink
                    key={frontMatter.slug}
                    passHref
                    href={`/book-overviews/${frontMatter.category.toLowerCase()}/${frontMatter.slug.toLowerCase()}`}
                  >
                    <Link flex={['1 0 100%', '0 0 33.33%']}>
                      <PictureItem
                        slug={frontMatter.slug}
                        title={frontMatter.title}
                        author={frontMatter.author}
                        category={frontMatter.category}
                      />
                    </Link>
                  </NextLink>
                ),
            )}
          {bookOverviewPosts.length < 1 && (
            <Text fontSize="4xl" color="cyan.500">
              No Books Found.
            </Text>
          )}
        </Flex>
      </Box>
      <Box as="section" px={[4, 8]}>
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
