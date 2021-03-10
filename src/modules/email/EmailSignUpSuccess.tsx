import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { InterviewsContentFrontMatter } from '@/types/types';

type Props = {
  interviewPosts: InterviewsContentFrontMatter[];
};

export const EmailSignUpSuccess: React.FC<Props> = () => {
  return (
    <Flex
      mt={[4, 4, 4, 20]}
      w="100%"
      direction="column"
      border="5px solid"
      borderColor="cyan.300"
      borderRadius="3px"
      p={8}
      boxShadow="0 10px 24px 0 rgba(54, 61, 77, 0.15)"
      bg="gray.100"
    >
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
        <Text fontSize={['3xl']} px={[4, 4, 4, 0]} mb={4} textAlign="center">
          Please check your inbox to confirm your email. You'll then receive an
          email to download your pdf:
          <br />{' '}
          <strong>
            How To Build An Effective Reading Habit in{' '}
            {new Date().getFullYear()}.
          </strong>
        </Text>
        <Text fontSize={['lg']} px={[4, 4, 4, 0]} mb={4} textAlign="center">
          Thank you for visiting Paperback Travels, we hope you will keep coming
          back. James and Adam
        </Text>
      </Flex>
    </Flex>
  );
};
