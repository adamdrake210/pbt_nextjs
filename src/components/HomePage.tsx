import React, { useState, useEffect } from 'react';
import {
  Flex,
  Text,
  Heading,
  Box,
  Link,
  Badge,
  Tag,
  Button,
} from '@chakra-ui/core';
//@ts-ignore
import { frontMatter as bookSummariesPosts } from '../pages/book-summaries/**/*.mdx';
import { PictureItem } from './PictureItem';
import NextLink from 'next/link';
import { FrontMatterType } from '../types/types';
import EmailSubscription from './EmailSubscription';

export default function Homepage() {
  const [sortedBooks, setSortedBooks] = useState([]);
  const [numberSummaries, setNumberSummaries] = useState(9);
  const [isLoadButtonVisible, setIsLoadButtonVisible] = useState(true);

  function sortNumber(a: FrontMatterType, b: FrontMatterType) {
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  }

  const handleSortingBookOrder = () => {
    setSortedBooks(bookSummariesPosts.sort(sortNumber));
  };

  const handleButtonVisibility = (adjustedNumberSummary: number) => {
    if (adjustedNumberSummary >= sortedBooks.length) {
      setIsLoadButtonVisible(false);
    }
  };

  const handleLoadingMoreBookSummaries = () => {
    setNumberSummaries(numberSummaries + 9);
    handleButtonVisibility(numberSummaries + 9);
  };

  useEffect(() => {
    handleSortingBookOrder();
  }, [bookSummariesPosts]);

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
            sortedBooks.slice(0, numberSummaries).map(
              (frontMatter: FrontMatterType) =>
                frontMatter.published && (
                  <Box
                    flex={['1 0 100%', '0 0 33.33%']}
                    mb={8}
                    key={frontMatter.slug}
                  >
                    <NextLink
                      passHref
                      href={`/book-summaries/${frontMatter.category.toLowerCase()}`}
                    >
                      <Link>
                        <Flex
                          justifyContent={['center', 'space-between']}
                          alignItems="center"
                        >
                          <Tag
                            variantColor="purple"
                            size="md"
                            rounded="full"
                            mb={2}
                            textTransform="uppercase"
                          >
                            {frontMatter.category}
                          </Tag>
                        </Flex>
                      </Link>
                    </NextLink>
                    <PictureItem
                      slug={frontMatter.slug}
                      title={frontMatter.title}
                      author={frontMatter.author}
                      category={frontMatter.category}
                    />
                  </Box>
                ),
            )}
          {bookSummariesPosts.length < 1 && (
            <Text fontSize="4xl" color="cyan.500">
              No Books Found.
            </Text>
          )}
        </Flex>
      </Box>
      {isLoadButtonVisible && (
        <Box as="section" px={[4, 8]}>
          <Button
            variantColor="cyan"
            size="md"
            onClick={handleLoadingMoreBookSummaries}
          >
            Load More
          </Button>
        </Box>
      )}
      <Box as="section" px={[4, 8]}>
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
