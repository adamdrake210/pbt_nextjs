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
} from '@chakra-ui/core';
// @ts-ignore
import { frontMatter as bookSummariesPosts } from '../pages/book-summaries/**/*.mdx';
import NextLink from 'next/link';
import { FrontMatterType } from '../types/types';
import Search from './Search';

type Props = {
  category: string;
};

export default function BookCategory({ category }: Props) {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(bookSummariesPosts);
  }, [bookSummariesPosts]);

  function handleChange(e) {
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
                        textDecoration: 'underline',
                        backgroundColor: '#f6f6f6',
                      }}
                      mb={4}
                    >
                      <Box
                        key={category}
                        w="100%"
                        shadow="md"
                        borderWidth="1px"
                        p={4}
                      >
                        <Flex
                          flexDirection={['column', 'row']}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Image
                            src={`../images/book-summaries/${frontMatter.slug}.jpg`}
                            alt={`${frontMatter.author} - ${frontMatter.title}`}
                            w={90}
                            h={140}
                            mr={4}
                            mb={[4, 0]}
                          />
                          <Flex flexDirection="column">
                            <Heading
                              fontSize="xl"
                              mb={-3}
                            >{`${frontMatter.title} - ${frontMatter.author}`}</Heading>
                            <Text mt={4}>{frontMatter.intro}</Text>
                          </Flex>
                        </Flex>
                      </Box>
                    </Link>
                  </NextLink>
                );
              }
            })}
        </Stack>
      </Flex>
    </Box>
  );
}
