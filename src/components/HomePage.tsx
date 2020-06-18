import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';
import { frontMatter as bookOverviewPosts } from '../pages/book-overviews/**/*.mdx';

export default function Homepage() {
  console.log(bookOverviewPosts);
  return (
    <div>
      <Heading as="h1" size="2xl">
        HomePage
      </Heading>
      <div>
        {bookOverviewPosts.map(frontMatter => (
          <p key={frontMatter.title}>{frontMatter.title}</p>
        ))}
      </div>
    </div>
  );
}
