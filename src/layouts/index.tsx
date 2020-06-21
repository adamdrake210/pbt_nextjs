import React from 'react';
import PageContainer from '../containers/PageContainer';
import { Heading, Image, Box, Flex, Divider } from '@chakra-ui/core';

export default function Layout(frontMatter) {
  const { title, slug, author, writtenBy } = frontMatter;
  return ({ children: content }) => {
    return (
      <PageContainer maxWidth="700px">
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
            src={`../../../images/book-overviews/${slug}.jpg`}
            alt={`${author} - ${title}`}
            w={266}
            h={400}
          />
        </Flex>
        <Divider />
        <Box p={[4, 8]}>{content}</Box>
        <Box p={[4, 8]}>Written By {writtenBy}</Box>
      </PageContainer>
    );
  };
}
