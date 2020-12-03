import React from 'react';
import PageContainer from '../containers/PageContainer';
import { Heading, Image, Box, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import PageSeo from '../components/partials/PageSeo';
import { FrontMatterBookSummariesType } from '../types/types';
import EmailSubscription from '../components/partials/EmailSubscription';
import ReadMore from '../components/partials/ReadMore';
import { AmazonAdvert } from '../components/adverts/AmazonAdvert';
import CategoryTag from '../components/partials/CategoryTag';
import { Image266x400 } from '../components/image_components/Image266x400';

interface Props {
  frontMatter: FrontMatterBookSummariesType;
  children: any;
}

export default function Layout({ frontMatter, children }: Props) {
  const {
    title,
    slug,
    imageUniqueIdentifier,
    author,
    writtenBy,
    category,
    intro,
    readingTime,
    tags,
  } = frontMatter;
  return (
    <PageContainer maxWidth="728px">
      <PageSeo
        {...frontMatter}
        url={`https://paperbacktravels.com/book-summaries/${category.toLowerCase()}/${slug.toLowerCase()}`}
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
          <Heading as="h1" color="cyan.900">
            {title}
          </Heading>
        </Box>
        <Flex p={0} mb={8} w="100%" justifyContent="center">
          {readingTime && (
            <>
              <Text>Written By {writtenBy} - </Text>
              <Text fontStyle="italic" color="grey" ml={1}>
                {readingTime.text}
              </Text>
            </>
          )}
        </Flex>
        <Image266x400
          src={`${slug}_${imageUniqueIdentifier}`}
          altText={`${author} - ${title}`}
          imageCategory="book-summaries"
        />
        <NextLink
          passHref
          href={`/book-summaries/${frontMatter.category.toLowerCase()}`}
        >
          <Link>
            <Flex
              justifyContent={['center', 'space-between']}
              alignItems="center"
            >
              <CategoryTag category={category} />
            </Flex>
          </Link>
        </NextLink>
      </Flex>
      <AmazonAdvert />
      <Box px={[4, 8]} pt={[4, 8]} pb={0}>
        <Text fontSize="xl" fontWeight={500}>
          {intro}
        </Text>
      </Box>
      <Box px={[4, 8]}>{children}</Box>
      <AmazonAdvert />
      <EmailSubscription />
      <ReadMore tags={tags} category={category} />
    </PageContainer>
  );
}
