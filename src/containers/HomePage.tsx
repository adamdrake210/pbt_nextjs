import React, { useEffect, useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import HomePageBanner from '@/modules/homepage/HomePageBanner';
import BookSummariesHomePage from '@/modules/homepage/BookSummariesHomePage';
import EmailSubscriptionForm from '@/modules/email/EmailSubscriptionForm';
import Quote from '@/modules/common/Quote';
import { sortNumberByPublishedDateRemote } from '@/helpers/sortNumberByPublishedDate';

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
        <EmailSubscriptionForm />
      </Box>
    </Flex>
  );
}
