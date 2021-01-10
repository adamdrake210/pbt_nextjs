import React from 'react';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import ReadMoreInterviews from '../readmore/ReadMoreInterviews';
import { InterviewsContentFrontMatter } from '../../types/types';

type Props = {
  interviewPosts: InterviewsContentFrontMatter[];
};

export const EmailSignUp: React.FC<Props> = ({ interviewPosts }) => {
  return (
    <Flex mt={[4, 4, 4, 12]} w="100%" direction="column">
      <Heading
        as="h1"
        size="xl"
        color="cyan.900"
        textAlign="center"
        fontSize={['4xl', '5xl']}
        mb={4}
      >
        Thank you.
      </Heading>
      <Text fontSize={['2xl']} px={[4, 4, 4, 0]} mb={4}>
        <strong>Please check your emails</strong>. You should have received an
        email with the the download link to our Ultimate Guide to Reading. Happy
        Reading!
      </Text>
      <Text fontSize={['lg']} px={[4, 4, 4, 0]} mb={4}>
        Thank you for joining the Paperback Travels mailing list. We will
        endeavour to only send you interesting and relevant content and we
        promise not to send emails too often. That way when you do receive them
        they will hopefully be something special.
      </Text>
      <Text fontSize={['lg']} px={[4, 4, 4, 0]}>
        Want to read some more? Check out these great interviews and articles on
        our site.
      </Text>
      <ReadMoreInterviews interviewPosts={interviewPosts} />
    </Flex>
  );
};
