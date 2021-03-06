import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ArticlesContentFrontMatter } from '../types/types';
import EmailSubscriptionForm from '@/modules/email/EmailSubscriptionForm';
import ArticlePreviewCard from '@/modules/common/cards/ArticlePreviewCard';
import { sortNumberByPublishedDateRemote } from '../helpers/sortNumberByPublishedDate';

export default function ArticlesPage({ articlePosts }) {
  const [sortedPosts, setSortedPosts] = useState([]);

  const handleSortingOrder = () => {
    return articlePosts.sort(sortNumberByPublishedDateRemote);
  };

  useEffect(() => {
    setSortedPosts(handleSortingOrder());
  }, []);

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
          {sortedPosts?.map(
            ({ data }: ArticlesContentFrontMatter) =>
              data.published && (
                <Box flex={['1 0 100%']} mb={8} key={data.slug}>
                  <NextLink passHref href={`/articles/${data.slug}`}>
                    <Link>
                      <Flex
                        justifyContent={['center', 'space-between']}
                        alignItems="center"
                      ></Flex>
                      <ArticlePreviewCard
                        slug={data.slug}
                        imageUniqueIdentifier={data.imageUniqueIdentifier}
                        title={data.title}
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
              No Articles Found. Coming soon...
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
