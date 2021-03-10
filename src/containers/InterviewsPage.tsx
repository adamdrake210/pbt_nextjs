import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Link, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { InterviewsContentFrontMatter } from '@/types/types';
import EmailSubscriptionForm from '@/modules/email/EmailSubscriptionForm';
import InterviewPreviewCard from '@/modules/common/cards/InterviewPreviewCard';
import { sortNumberByPublishedDateRemote } from '@/helpers/sortNumberByPublishedDate';

export default function InterviewsPage({ interviewPosts }) {
  const [sortedPosts, setSortedPosts] = useState([]);

  const handleSortingOrder = () => {
    return interviewPosts.sort(sortNumberByPublishedDateRemote);
  };

  useEffect(() => {
    setSortedPosts(handleSortingOrder());
  }, []);

  return (
    <Flex mt={12} w="100%" direction="column" alignItems="center">
      <Box as="section" px={[4, 8]}>
        <Heading as="h1" size="xl" mb={4} color="cyan.900">
          Interviews
        </Heading>
        <Flex
          pb={[4, 8]}
          w="100%"
          justify={['center', 'center', 'space-between', 'flex-start']}
          alignItems={['center']}
          direction={['column', 'row']}
          flexWrap="wrap"
        >
          {sortedPosts?.map(
            ({ data }: InterviewsContentFrontMatter) =>
              data.published && (
                <Box flex={['1 0 100%']} mb={8} key={data.slug}>
                  <NextLink passHref href={`/interviews/${data.slug}`}>
                    <Link>
                      <Flex
                        justifyContent={['center', 'space-between']}
                        alignItems="center"
                      ></Flex>
                      <InterviewPreviewCard
                        slug={data.slug}
                        title={data.title}
                        imageUniqueIdentifier={data.imageUniqueIdentifier}
                        description={data.description}
                        readTime={data.readTime}
                      />
                    </Link>
                  </NextLink>
                </Box>
              ),
          )}
          {sortedPosts.length < 1 && (
            <Text fontSize="4xl" color="cyan.500">
              No Interviews Found. Coming soon...
            </Text>
          )}
        </Flex>
      </Box>

      <Box as="section" px={[4, 8]}>
        <EmailSubscriptionForm />
      </Box>
    </Flex>
  );
}
