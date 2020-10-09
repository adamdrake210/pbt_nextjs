import React from 'react';
import { Flex, Box, Divider } from '@chakra-ui/core';
// @ts-ignore
import { frontMatter as interviewPosts } from '../pages/interviews/*.mdx';
import HomePageBanner from '../components/homepage/HomePageBanner';
import BookSummariesHomePage from '../components/homepage/BookSummariesHomePage';
import EmailSubscription from '../components/partials/EmailSubscription';
import Quote from '../components/partials/Quote';

export default function Homepage() {
  return (
    <Flex mt={[2, 2, 2, 12]} w="100%" direction="column" alignItems="center">
      <HomePageBanner post={interviewPosts[0]} />
      <Quote />

      <BookSummariesHomePage />
      <Box as="section" px={[4, 8]}>
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
