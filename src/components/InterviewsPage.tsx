import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Link, Tag, Image } from '@chakra-ui/core';
//@ts-ignore
import { frontMatter as interviewPosts } from '../pages/interviews/*.mdx';
import NextLink from 'next/link';
import { FrontMatterInterviewsType } from '../types/types';
import EmailSubscription from './partials/EmailSubscription';

export default function InterviewsPage() {
  return (
    <Flex mt={12} w="100%" direction="column" alignItems="center">
      <Box as="section" mt={12} px={[4, 8]}>
        <Flex
          pb={[4, 8]}
          w="100%"
          justify={['center', 'center', 'space-between', 'flex-start']}
          alignItems={['center']}
          direction={['column', 'row']}
          flexWrap="wrap"
        >
          {interviewPosts &&
            interviewPosts.map(
              (frontMatter: FrontMatterInterviewsType) =>
                frontMatter.published && (
                  <Box
                    flex={['1 0 100%', '0 0 33.33%']}
                    mb={8}
                    key={frontMatter.slug}
                  >
                    <NextLink passHref href={`/interviews/${frontMatter.slug}`}>
                      <Link>
                        <Flex
                          justifyContent={['center', 'space-between']}
                          alignItems="center"
                        ></Flex>
                        <Box w={266}>
                          <Image
                            src={`./images/book-summaries/cal-newport-deep-work.jpg`}
                            alt="cal-newport-deep-work"
                            w={266}
                            h={400}
                            mb={2}
                          />
                          <Flex
                            justifyContent={['center', 'space-between']}
                            alignItems="center"
                          >
                            <Tag variantColor="cyan" size="sm">
                              Read Interview
                            </Tag>
                          </Flex>
                        </Box>
                      </Link>
                    </NextLink>
                  </Box>
                ),
            )}
          {interviewPosts.length < 1 && (
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
