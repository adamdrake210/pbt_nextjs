import React, { useEffect, useState } from 'react';
import {
  Heading,
  Flex,
  Box,
  List,
  ListItem,
  Link,
  Stack,
  Text,
  Image,
  Tag,
} from '@chakra-ui/core';
// @ts-ignore
import { frontMatter as bookSummariesPosts } from '../pages/book-summaries/**/*.mdx';
import NextLink from 'next/link';
import { FrontMatterType } from '../types/types';
import { Search } from './partials/Search';
import BookPreviewCard from './cards/BookPreviewCard';

interface Props {
  category: string;
}

const BookCategoryList: React.FC<Props> = ({ category }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(bookSummariesPosts);
  }, [bookSummariesPosts]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== '') {
      currentList = bookSummariesPosts;
      newList = currentList.filter(item => {
        const titleLowerCase = item.title.toLowerCase();
        const authorLowerCase = item.author.toLowerCase();
        const filterLowerCase = e.target.value.toLowerCase();
        return (
          titleLowerCase.includes(filterLowerCase) ||
          authorLowerCase.includes(filterLowerCase)
        );
      });
    } else {
      newList = bookSummariesPosts;
    }
    setFilteredBooks(newList);
  }

  return (
    <Box p={[4, 8]}>
      <Box mb={8}>
        <Search handleChange={handleChange} />
      </Box>

      <Heading as="h1" size="xl" mb={4} textTransform="capitalize">
        {category}
      </Heading>
      <Flex
        w="100%"
        justify={['flex-start', 'flex-start', 'space-between', 'flex-start']}
        alignItems={['flex-start']}
        direction={['column', 'column', 'row']}
        flexWrap="wrap"
      >
        <Stack spacing={8}>
          {filteredBooks &&
            filteredBooks.map((frontMatter: FrontMatterType) => {
              if (category === frontMatter.category && frontMatter.published) {
                return (
                  <NextLink
                    key={frontMatter.slug}
                    passHref
                    href={`/book-summaries/${category}/${frontMatter.slug}`}
                  >
                    <Link
                      _hover={{
                        backgroundColor: '#f6f6f6',
                      }}
                      mb={4}
                    >
                      <BookPreviewCard
                        category={frontMatter.category}
                        slug={frontMatter.slug}
                        author={frontMatter.author}
                        title={frontMatter.title}
                        intro={frontMatter.intro}
                        readingTime={frontMatter.readingTime}
                      />
                    </Link>
                  </NextLink>
                );
              }
            })}
        </Stack>
      </Flex>
    </Box>
  );
};

export default BookCategoryList;
