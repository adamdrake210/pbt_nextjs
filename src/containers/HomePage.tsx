import React from 'react';
import { Flex, Box, Divider, Heading } from '@chakra-ui/core';
// @ts-ignore
import { frontMatter as interviewPosts } from '../pages/interviews/*.mdx';
// @ts-ignore
import { frontMatter as articlePosts } from '../pages/articles/*.mdx';
import HomePageBanner from '../components/homepage/HomePageBanner';
import BookSummariesHomePage from '../components/homepage/BookSummariesHomePage';
import EmailSubscription from '../components/partials/EmailSubscription';
import Quote from '../components/partials/Quote';

export default function Homepage() {
  return (
    <Flex mt={[2, 2, 2, 12]} w="100%" direction="column" alignItems="center">
      <HomePageBanner
        post={articlePosts[0]}
        pageCategory="articles"
        cta="Read Article"
      />
      <Quote />
      <Heading
        as="h2"
        fontSize={['4xl', '5xl']}
        mb={4}
        w="100%"
        textAlign={['center', 'center', 'left']}
        color="cyan.900"
        px={[4]}
      >
        Latest Interview
      </Heading>
      <HomePageBanner
        post={interviewPosts[0]}
        pageCategory="interviews"
        cta="Read Interview"
      />

      <BookSummariesHomePage />
      <Box as="section" px={[4, 8]}>
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
