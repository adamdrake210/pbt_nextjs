import React from 'react';
import PageContainer from '../containers/PageContainer';
import { Heading, Box, Flex, Text } from '@chakra-ui/core';
import PageSeo from '../components/partials/PageSeo';
import { FrontMatterInterviewsType } from '../types/types';
import EmailSubscription from '../components/partials/EmailSubscription';
import { AmazonAdvert } from '../components/adverts/AmazonAdvert';
import { ImageFlexCenter } from '../components/partials/ImageFlexCenter';

interface Props {
  frontMatter: FrontMatterInterviewsType;
  children: any;
}

export default function InterviewLayout({ frontMatter, children }: Props) {
  const { title, slug, readingTime } = frontMatter;
  return (
    <PageContainer maxWidth="728px">
      <PageSeo
        {...frontMatter}
        url={`https://paperbacktravels.com/interviews/${slug}`}
      />
      <ImageFlexCenter src={`interviews/${slug}`} altText={slug} width={728} />
      <Flex
        p={[4, 8]}
        pt={[0, 0]}
        w="100%"
        justify={['center']}
        alignItems={['center']}
        direction={['column']}
        flexWrap="wrap"
      >
        <Box textAlign="center" w="100%">
          <Heading as="h1" color="cyan.900">
            {title}
          </Heading>
        </Box>
        <Flex p={0} w="100%" justifyContent="center">
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
      <Box px={[4, 8]} mb={6}>
        {children}
      </Box>
      <AmazonAdvert />
      <EmailSubscription />
    </PageContainer>
  );
}
