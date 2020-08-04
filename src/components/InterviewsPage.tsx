import React, { useState, useEffect } from 'react';
import { Flex, Text, Heading, Box, Link, Badge, Tag } from '@chakra-ui/core';
//@ts-ignore
import { frontMatter as interviewPosts } from '../pages/interviews/**/*.mdx';
import { PictureItem } from './PictureItem';
import NextLink from 'next/link';
import { FrontMatterType } from '../types/types';
import EmailSubscription from './EmailSubscription';

export default function InterviewsPage() {
  // const [sortedBooks, setSortedBooks] = useState([]);

  // function sortNumber(a: FrontMatterType, b: FrontMatterType) {
  //   return (
  //     new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  //   );
  // }

  // const handleSortingBookOrder = () => {
  //   setSortedBooks(bookSummariesPosts.sort(sortNumber));
  // };

  // useEffect(() => {
  //   handleSortingBookOrder();
  // }, [bookSummariesPosts]);

  return (
    <Flex mt={12} w="100%" direction="column" alignItems="center">
      <Box as="section" px={[4, 8]}>
        <Heading as="h1" size="lg" mb={4} textAlign="center">
          Interviews Coming Soon...
        </Heading>
      </Box>

      <Box as="section" px={[4, 8]}>
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
