import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Link, Tag, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FrontMatterArticlesType } from '../types/types';
import EmailSubscription from '../components/partials/EmailSubscription';
import ArticlePreviewCard from '../components/cards/ArticlePreviewCard';
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
          {sortedPosts &&
            sortedPosts.map(
              (frontMatter: any) =>
                frontMatter.data.published && (
                  <Box flex={['1 0 100%']} mb={8} key={frontMatter.data.slug}>
                    <NextLink
                      passHref
                      href={`/articles/${frontMatter.data.slug}`}
                    >
                      <Link>
                        <Flex
                          justifyContent={['center', 'space-between']}
                          alignItems="center"
                        ></Flex>
                        <ArticlePreviewCard
                          slug={frontMatter.data.slug}
                          imageUniqueIdentifier={
                            frontMatter.data.imageUniqueIdentifier
                          }
                          title={frontMatter.data.title}
                          description={frontMatter.data.description}
                          readTime={frontMatter.data.readTime}
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
        <EmailSubscription />
      </Box>
    </Flex>
  );
}
