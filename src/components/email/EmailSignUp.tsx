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
        Please find your download link to our ultimate guide to reading:
        <br></br>
        <Link href="#" color="green.300" textDecoration="underline">
          Click here to download
        </Link>
      </Text>
      <Text fontSize={['lg']} px={[4, 4, 4, 0]}>
        You have successfully joined the Paperback Travels mailing list. Please
        feel free to continue checking out the great interviews and articles on
        our site.
      </Text>
      <ReadMoreInterviews interviewPosts={interviewPosts} />
    </Flex>
  );
};
