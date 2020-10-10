import React from 'react';
import PageContainer from '../containers/PageContainer';
import { Heading, Box, Flex, Text } from '@chakra-ui/core';
import PageSeo from '../components/partials/PageSeo';
import { FrontMatterArticlesType } from '../types/types';
import EmailSubscription from '../components/partials/EmailSubscription';
import { AmazonAdvert } from '../components/adverts/AmazonAdvert';
import { ImageFlexCenter } from '../components/partials/ImageFlexCenter';

export default function ArticleLayout(frontMatter: FrontMatterArticlesType) {
  const { title, slug, intro, readingTime } = frontMatter;
  return ({ children: content }) => {
    return (
      <PageContainer maxWidth="728px">
        <PageSeo
          {...frontMatter}
          url={`https://paperbacktravels.com/articles/${slug}`}
        />
        <ImageFlexCenter
          src={`articles/${slug}`}
          altText="Brian Schæfer Dreyer"
          width={728}
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
        <AmazonAdvert />
        <Box px={[4, 8]} pt={[4, 8]} pb={0}>
          <Text fontSize="xl" fontWeight={500}>
            {intro}
          </Text>
        </Box>
        <Box px={[4, 8]}>{content}</Box>
        <EmailSubscription />
        <AmazonAdvert />
      </PageContainer>
    );
  };
}
