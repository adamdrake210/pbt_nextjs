import React, { useState, useEffect } from 'react';
import { Flex, Text, Heading, Box, Link, Button } from '@chakra-ui/core';
//@ts-ignore
import { frontMatter as bookSummariesPosts } from '../../pages/book-summaries/**/*.mdx';
import { PictureItem } from '../partials/PictureItem';
import NextLink from 'next/link';
import { FrontMatterBookSummariesType } from '../../types/types';
import CategoryTag from '../partials/CategoryTag';

export default function Homepage() {
  const [sortedBooks, setSortedBooks] = useState([]);
  const [numberSummaries, setNumberSummaries] = useState(9);
  const [isLoadButtonVisible, setIsLoadButtonVisible] = useState(true);

  function sortNumber(
    a: FrontMatterBookSummariesType,
    b: FrontMatterBookSummariesType,
  ) {
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  }

  const handleSortingBookOrder = () => {
    const sortedArray = bookSummariesPosts.sort(sortNumber);
    console.log('sortedArray: ', sortedArray);
    setSortedBooks(sortedArray);
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
    <Flex mt={8} w="100%" direction="column" alignItems="center" px={[4, 4]}>
      <Heading
        as="h2"
        fontSize={['4xl', '5xl']}
        mb={4}
        w="100%"
        textAlign={['center', 'center', 'left']}
        color="cyan.900"
      >
        Book Summaries
      </Heading>
      <Box as="section" mt={1}>
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
              (frontMatter: FrontMatterBookSummariesType) =>
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
                          <CategoryTag category={frontMatter.category} />
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
    </Flex>
  );
}
