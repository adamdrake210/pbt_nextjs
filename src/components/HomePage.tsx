import React, { useState, useEffect } from 'react';
import {
  Flex,
  Input,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/core';
//@ts-ignore
import { frontMatter as bookOverviewPosts } from '../pages/book-overviews/**/*.mdx';
import PictureItem from './PictureItem';
import Link from 'next/link';
import { FrontMatterType } from '../types/types';

export default function Homepage() {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(bookOverviewPosts);
  }, []);

  function handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== '') {
      currentList = bookOverviewPosts;
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
      newList = bookOverviewPosts;
    }
    setFilteredBooks(newList);
  }

  return (
    <Flex m="24px 0 0" w="100%" direction="column" alignItems="center">
      <Box p="0 32px" w="100%">
        <InputGroup>
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input
            placeholder="Search for a book..."
            size="lg"
            variant="flushed"
            onChange={e => handleChange(e)}
            color="gray.600"
          />
        </InputGroup>
      </Box>

      <Flex
        p={[4, 8]}
        w="100%"
        justify={['center', 'center', 'space-between']}
        alignItems={['center']}
        direction={['column', 'row']}
        flexWrap="wrap"
      >
        {filteredBooks &&
          filteredBooks.map(
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
                      category={frontMatter.category}
                    />
                  </a>
                </Link>
              ),
          )}
        {filteredBooks.length < 1 && (
          <Text fontSize="4xl" color="cyan.500">
            No Books Found.
          </Text>
        )}
      </Flex>
    </Flex>
  );
}
