import React, { useEffect, useState, ReactElement } from 'react';
import { Heading, Flex, Box, Link, Image } from '@chakra-ui/core';
// @ts-ignore
import { frontMatter as bookSummariesPosts } from '../pages/book-summaries/**/*.mdx';
import NextLink from 'next/link';
import { FrontMatterBookSummariesType } from '../types/types';

export default function BookSummariesList() {
  const [categories, setCategories] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(bookSummariesPosts);
    const filterData = bookSummariesPosts.map(
      (frontMatter: FrontMatterBookSummariesType) => {
        return frontMatter.category;
      },
    );
    const removedDuplicates = filterData.filter((item: string, pos: number) => {
      return filterData.indexOf(item) == pos;
    });
    setCategories(removedDuplicates);
  }, [bookSummariesPosts]);

  function findCategoryImage(category: string): string {
    const sortedBookSummeries = bookSummariesPosts.map(
      (frontMatter: FrontMatterBookSummariesType) => {
        if (frontMatter.category === category) {
          return frontMatter.slug;
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
      <NextLink passHref href={`/book-summaries/${category}`} key={category}>
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
              {category.replaceAll('-', ' ')}
            </Heading>
            <Image
              src={`../images/book-summaries/${findCategoryImage(
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
