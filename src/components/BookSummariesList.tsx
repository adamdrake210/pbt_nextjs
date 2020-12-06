import React, { useEffect, useState, ReactElement } from 'react';
import { Heading, Flex, Box, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

import { BookSummaryContentFrontMatter } from '../types/types';

export default function BookSummariesList({ bookSummaryPosts }) {
  const [categories, setCategories] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(bookSummaryPosts);
    const filterData = bookSummaryPosts.map(
      (bookSummary: BookSummaryContentFrontMatter) => {
        return bookSummary.data.category;
      },
    );

    const removedDuplicates = filterData.filter((item: string, pos: number) => {
      return filterData.indexOf(item) == pos;
    });
    setCategories(removedDuplicates);
  }, [bookSummaryPosts]);

  function findCategoryImage(category: string): string {
    const sortedBookSummeries = bookSummaryPosts.map(
      (bookSummary: BookSummaryContentFrontMatter) => {
        if (bookSummary.data.category === category) {
          return `${bookSummary.data.slug}_${bookSummary.data.imageUniqueIdentifier}`;
        }
      },
    );
    const imageUrlArray = sortedBookSummeries
      .filter((x: string) => x)
      .reverse();
    return imageUrlArray[0];
  }

  function makeCategoryList(category: string): ReactElement {
    return (
      <NextLink
        passHref
        href={{
          pathname: `/book-summaries/[category]`,
          query: { category },
        }}
        key={category}
      >
        <Link
          _hover={{
            textDecoration: 'underline',
            backgroundColor: '#f6f6f6',
          }}
          flex={['1 0 100%', '0 0 22%']}
          shadow="sm"
          p={4}
          my={['8px']}
          marginRight={6}
          w="100%"
          minH="230px"
        >
          <Flex
            flexDirection={['column']}
            alignItems="center"
            justifyContent="center"
          >
            <Heading
              as="h2"
              fontSize={20}
              textTransform="capitalize"
              mb={4}
              color="cyan.900"
            >
              {category.replace(/-/g, ' ')}
            </Heading>

            <Image
              src={`https://res.cloudinary.com/dg2r37ygd/image/upload/c_scale,h_300,w_205/v1605448173/images/book-summaries/${findCategoryImage(
                category,
              )}.jpg`}
              alt={`Book Category - ${category}`}
              w={90}
              h={140}
              borderRadius="48%"
            />
          </Flex>
        </Link>
      </NextLink>
    );
  }

  return (
    <Box p={[4, 8]}>
      <Heading as="h1" size="xl" mb={4} color="cyan.900">
        Book Summary Categories
      </Heading>
      {categories && (
        <Flex
          w="100%"
          justify={['flex-start', 'flex-start', 'flex-start']}
          alignItems={['flex-start']}
          direction={['column', 'column', 'row']}
          flexWrap="wrap"
        >
          {categories.map(category => {
            return makeCategoryList(category);
          })}
        </Flex>
      )}
    </Box>
  );
}
