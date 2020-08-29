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
import PageSeo from '../components/PageSeo';
import { FrontMatterType } from '../types/types';
import EmailSubscription from '../components/EmailSubscription';
import ReadMore from '../components/ReadMore';
import { AmazonAdvert } from '../components/adverts/AmazonAdvert';

export default function Layout(frontMatter: FrontMatterType) {
  const {
    title,
    slug,
    author,
    writtenBy,
    category,
    intro,
    readingTime,
    tags,
  } = frontMatter;
  return ({ children: content }) => {
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
            <Heading as="h1">{title}</Heading>
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
          <Image
            src={`../../../images/book-summaries/${slug}.jpg`}
            alt={`${author} - ${title}`}
            w={266}
            h={400}
            mb={4}
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
                <Tag
                  variantColor="purple"
                  size="md"
                  rounded="full"
                  mb={2}
                  textTransform="uppercase"
                >
                  {category}
                </Tag>
              </Flex>
            </Link>
          </NextLink>
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
        <ReadMore tags={tags} category={category} />
      </PageContainer>
    );
  };
}
