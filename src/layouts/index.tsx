import React from 'react';
import PageContainer from '../containers/PageContainer';
import {
  Heading,
  Image,
  Box,
  Flex,
  Divider,
  Text,
  Badge,
} from '@chakra-ui/core';
import PageSeo from '../components/PageSeo';
import { FrontMatterType } from '../types/types';
import EmailSubscription from '../components/EmailSubscription';

export default function Layout(frontMatter: FrontMatterType) {
  const { title, slug, author, writtenBy, category, intro } = frontMatter;
  return ({ children: content }) => {
    return (
      <PageContainer maxWidth="700px">
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
          <Heading as="h1" mb={8}>
            {title}
          </Heading>
          <Image
            src={`../../../images/book-summaries/${slug}.jpg`}
            alt={`${author} - ${title}`}
            w={266}
            h={400}
            mb={4}
          />
          <Badge variantColor="purple">{category}</Badge>
        </Flex>
        <Divider />
        <Box px={[4, 8]} pt={[4, 8]} pb={0}>
          <Text fontSize="xl" fontWeight={500}>
            {intro}
          </Text>
        </Box>
        <Box px={[4, 8]}>{content}</Box>
        <Box p={[4, 8]}>Written By {writtenBy}</Box>
        <Divider />
        <EmailSubscription />
      </PageContainer>
    );
  };
}
