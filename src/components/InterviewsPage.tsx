import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Link, Tag, Image, Heading } from '@chakra-ui/core';
import NextLink from 'next/link';
import { FrontMatterInterviewsType } from '../types/types';
import EmailSubscription from './partials/EmailSubscription';
import InterviewPreviewCard from './cards/InterviewPreviewCard';
import { sortNumberByPublishedDate } from '../helpers/sortNumberByPublishedDate';

export default function InterviewsPage({ interviewPosts }) {
  const [sortedPosts, setSortedPosts] = useState([]);

  const handleSortingOrder = () => {
    return interviewPosts.sort(sortNumberByPublishedDate);
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
          {sortedPosts &&
            sortedPosts.map(
              (frontMatter: FrontMatterInterviewsType) =>
                frontMatter.published && (
                  <Box flex={['1 0 100%']} mb={8} key={frontMatter.slug}>
                    <NextLink passHref href={`/interviews/${frontMatter.slug}`}>
                      <Link>
                        <Flex
                          justifyContent={['center', 'space-between']}
                          alignItems="center"
                        ></Flex>
                        <InterviewPreviewCard
                          slug={frontMatter.slug}
                          title={frontMatter.title}
                          imageUniqueIdentifier={
                            frontMatter.imageUniqueIdentifier
                          }
                          description={frontMatter.description}
                          readingTime={frontMatter.readingTime}
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
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
