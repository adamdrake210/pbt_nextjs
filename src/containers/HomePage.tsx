import React, { useEffect, useState } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import HomePageBanner from '../components/homepage/HomePageBanner';
import BookSummariesHomePage from '../components/homepage/BookSummariesHomePage';
import EmailSubscription from '../components/email/EmailSubscription';
import Quote from '../components/partials/Quote';
import { sortNumberByPublishedDateRemote } from '../helpers/sortNumberByPublishedDate';

export default function Homepage({
  interviewPosts,
  articlePosts,
  bookSummariesPosts,
}) {
  const [interviewArr, setInterviewArr] = useState([]);
  const [articleArr, setArticleArr] = useState([]);
  useEffect(() => {
    setInterviewArr(interviewPosts.sort(sortNumberByPublishedDateRemote));
    setArticleArr(articlePosts.sort(sortNumberByPublishedDateRemote));
  }, []);

  return (
    <Flex mt={[2, 2, 2, 12]} w="100%" direction="column" alignItems="center">
      {interviewArr.length && (
        <HomePageBanner
          post={interviewArr[0].data}
          pageCategory="interviews"
          cta="Read Interview"
          pageTitle="Latest Interview"
        />
      )}
      <Quote />

      {articleArr.length && (
        <HomePageBanner
          post={articleArr[0].data}
          pageCategory="articles"
          cta="Read Article"
          pageTitle="Latest Article"
        />
      )}
      <BookSummariesHomePage bookSummariesPosts={bookSummariesPosts} />
      <Box as="section">
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
