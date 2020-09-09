import React from 'react';
import PageContainer from '../containers/PageContainer';
import {
  Heading,
  Image,
  Box,
  Flex,
  Divider,
  Text,
  Link,
  Tag,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import PageSeo from '../components/partials/PageSeo';
import { FrontMatterArticlesType } from '../types/types';
import EmailSubscription from '../components/partials/EmailSubscription';
import ReadMore from '../components/partials/ReadMore';
import { AmazonAdvert } from '../components/adverts/AmazonAdvert';

export default function ArticleLayout(frontMatter: FrontMatterArticlesType) {
  const { title, slug, intro, readingTime, tags } = frontMatter;
  return ({ children: content }) => {
    return (
      <PageContainer maxWidth="728px">
        <PageSeo
          {...frontMatter}
          url={`https://paperbacktravels.com/articles/${slug}`}
        />
        <Flex
          p={[4, 8]}
          w="100%"
          justify={['center']}
          alignItems={['center']}
          direction={['column']}
          flexWrap="wrap"
        >
          <Box textAlign="center" w="100%">
            <Heading color="cyan.900" as="h1">
              {title}
            </Heading>
          </Box>
          <Flex p={0} mb={8} w="100%" justifyContent="center">
            {readingTime && (
              <>
                <Text fontStyle="italic" color="grey" ml={1}>
                  {readingTime.text}
                </Text>
              </>
            )}
          </Flex>
        </Flex>
        <Divider />
        <AmazonAdvert />
        <Box px={[4, 8]} pt={[4, 8]} pb={0}>
          <Text fontSize="xl" fontWeight={500}>
            {intro}
          </Text>
        </Box>
        <Box px={[4, 8]}>{content}</Box>
        <Divider />
        <EmailSubscription />
        <Divider />
        <AmazonAdvert />
      </PageContainer>
    );
  };
}
