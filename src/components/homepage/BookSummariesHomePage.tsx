import React, { useState, useEffect } from 'react';
import { Flex, Text, Heading, Box, Link, Button, Tag } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FrontMatterBookSummariesType } from '../../types/types';
import CategoryTag from '../partials/CategoryTag';
import { sortNumberByPublishedDate } from '../../helpers/sortNumberByPublishedDate';
import { Image266x400 } from '../image_components/Image266x400';

export default function BookSummariesHomepage({ bookSummariesPosts }) {
  const [sortedBooks, setSortedBooks] = useState([]);
  const [numberSummaries, setNumberSummaries] = useState(9);
  const [isLoadButtonVisible, setIsLoadButtonVisible] = useState(true);

  const handleSortingOrder = () => {
    const sortedArray = bookSummariesPosts.sort(sortNumberByPublishedDate);
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
    handleSortingOrder();
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
                    <Box w={266}>
                      <NextLink
                        key={frontMatter.slug}
                        passHref
                        href={`/book-summaries/${frontMatter.category.toLowerCase()}/${frontMatter.slug.toLowerCase()}`}
                      >
                        <Link>
                          <Image266x400
                            src={`${frontMatter.slug}_${frontMatter.imageUniqueIdentifier}`}
                            altText={`${frontMatter.author} - ${frontMatter.title}`}
                            imageCategory="book-summaries"
                          />
                          <Flex
                            justifyContent={['center', 'space-between']}
                            alignItems="center"
                          >
                            <Tag colorScheme="cyan" size="sm">
                              Read Summary
                            </Tag>
                          </Flex>
                        </Link>
                      </NextLink>
                    </Box>
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
            colorScheme="cyan"
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
