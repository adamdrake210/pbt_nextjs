import React, { useEffect, useState } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/core';
// @ts-ignore
import { frontMatter as interviewPosts } from '../pages/interviews/*.mdx';
// @ts-ignore
import { frontMatter as articlePosts } from '../pages/articles/*.mdx';
import HomePageBanner from '../components/homepage/HomePageBanner';
import BookSummariesHomePage from '../components/homepage/BookSummariesHomePage';
import EmailSubscription from '../components/partials/EmailSubscription';
import Quote from '../components/partials/Quote';
import { sortNumberByPublishedDate } from '../helpers/sortNumberByPublishedDate';

export default function Homepage() {
  const [interviewArr, setInterviewArr] = useState([]);
  const [articleArr, setArticleArr] = useState([]);
  useEffect(() => {
    setInterviewArr(interviewPosts.sort(sortNumberByPublishedDate));
    setArticleArr(articlePosts.sort(sortNumberByPublishedDate));
  }, []);

  return (
    <Flex mt={[2, 2, 2, 12]} w="100%" direction="column" alignItems="center">
      {articleArr.length && (
        <HomePageBanner
          post={articleArr[0]}
          pageCategory="articles"
          cta="Read Article"
        />
      )}
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
      {interviewArr.length && (
        <HomePageBanner
          post={interviewArr[0]}
          pageCategory="interviews"
          cta="Read Interview"
        />
      )}

      <BookSummariesHomePage />
      <Box as="section" px={[4, 8]}>
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
