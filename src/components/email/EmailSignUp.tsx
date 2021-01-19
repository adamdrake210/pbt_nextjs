import React from 'react';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import ReadMoreInterviews from '../readmore/ReadMoreInterviews';
import { InterviewsContentFrontMatter } from '../../types/types';

type Props = {
  interviewPosts: InterviewsContentFrontMatter[];
};

export const EmailSignUp: React.FC<Props> = ({ interviewPosts }) => {
  return (
    <Flex mt={[4, 4, 4, 20]} w="100%" direction="column">
      <Heading
        as="h1"
        size="xl"
        color="cyan.900"
        textAlign="center"
        fontSize={['4xl', '5xl']}
        mb={4}
      >
        You've got mail!
      </Heading>
      <Flex flexDirection="column" alignItems="center" w="100%" mb={4}>
        <Text fontSize={['3xl']} px={[4, 4, 4, 0]} mb={4}>
          Please check your inbox to download your pdf:
          <br />{' '}
          <strong>
            How To Build An Effective Reading Habit in{' '}
            {new Date().getFullYear()}.
          </strong>
        </Text>
      </Flex>
      <Text fontSize={['lg']} px={[4, 4, 4, 0]} mb={4}>
        Thank you for visiting Paperback Travels, we hope you will keep coming
        back. Below are some recent articles we think you will enjoy. James and
        Adam
      </Text>
      <ReadMoreInterviews interviewPosts={interviewPosts} />
    </Flex>
  );
};
