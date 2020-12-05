import React, { useEffect, useState } from 'react';
import { Heading, Flex, Box, Link, Stack } from '@chakra-ui/react';
// @ts-ignore
import { frontMatter as bookSummariesPosts } from '../../pages/book-summaries/**/*.mdx';
import NextLink from 'next/link';
import { FrontMatterBookSummariesType } from '../../types/types';
import BookPreviewCard from '../cards/BookPreviewCard';

interface Props {
  category: string;
  tags: string;
}

const ReadMore: React.FC<Props> = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  const randomThreeSummaries = () => {
    const shuffled = bookSummariesPosts.sort(() => 0.5 - Math.random());
    setFilteredBooks(shuffled.slice(0, 3));
  };

  useEffect(() => {
    randomThreeSummaries();
  }, []);

  return (
    <Box px={[4, 0]} py={8} mb={4}>
      <Heading as="h2" size="xl" mb={4} color="cyan.900">
        Some further reading
      </Heading>

      <Flex
        w="100%"
        justify={['flex-start', 'flex-start', 'space-between', 'flex-start']}
        alignItems={['flex-start']}
        direction={['column', 'column', 'row']}
        flexWrap="wrap"
      >
        <Stack spacing={8}>
          {filteredBooks &&
            filteredBooks.map((frontMatter: FrontMatterBookSummariesType) => {
              return (
                <NextLink
                  key={frontMatter.slug}
                  passHref
                  href={`/book-summaries/${frontMatter.category}/${frontMatter.slug}`}
                >
                  <Link
                    _hover={{
                      backgroundColor: '#f6f6f6',
                    }}
                    mb={4}
                  >
                    <BookPreviewCard
                      category={frontMatter.category}
                      slug={frontMatter.slug}
                      imageUniqueIdentifier={frontMatter.imageUniqueIdentifier}
                      author={frontMatter.author}
                      title={frontMatter.title}
                      intro={frontMatter.intro}
                      // readingTime={frontMatter.readingTime}
                    />
                  </Link>
                </NextLink>
              );
            })}
        </Stack>
      </Flex>
    </Box>
  );
};

export default ReadMore;
