import React, { useEffect, useState } from 'react';
import { Heading, Flex, Box, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { BookSummaryContentFrontMatter } from '@/types/types';
import BookPreviewCard from '@/modules/common/cards/BookPreviewCard';
import { sortNumberByPublishedDateRemote } from '@/helpers/sortNumberByPublishedDate';

interface Props {
  bookSummaryPosts: BookSummaryContentFrontMatter[];
  category: string;
}

const BookCategoryList: React.FC<Props> = ({ bookSummaryPosts, category }) => {
  const [sortedBooks, setSortedBooks] = useState([]);

  const handleSortingOrder = () => {
    const sortedArray = bookSummaryPosts.sort(sortNumberByPublishedDateRemote);
    setSortedBooks(sortedArray);
  };

  useEffect(() => {
    handleSortingOrder();
  }, [bookSummaryPosts]);

  return (
    <Box p={[4, 8]}>
      <Heading
        as="h1"
        size="xl"
        mb={4}
        textTransform="capitalize"
        color="cyan.900"
      >
        {category?.replace(/-/g, ' ')}
      </Heading>
      <Flex
        w="100%"
        justify={['flex-start', 'flex-start', 'space-between', 'flex-start']}
        alignItems={['flex-start']}
        direction={['column', 'column', 'row']}
        flexWrap="wrap"
      >
        <Stack spacing={8}>
          {sortedBooks?.map((book: BookSummaryContentFrontMatter) => {
            const { data } = book;
            if (category === data.category && data.published) {
              return (
                <NextLink
                  key={data.slug}
                  passHref
                  as={`/book-summaries/${category}/${data.slug}`}
                  href={{
                    pathname: `/book-summaries/[category]/[slug]`,
                    query: { category, slug: data.slug },
                  }}
                >
                  <Link
                    _hover={{
                      backgroundColor: '#f6f6f6',
                    }}
                    mb={4}
                  >
                    <BookPreviewCard
                      category={data.category}
                      slug={data.slug}
                      imageUniqueIdentifier={data.imageUniqueIdentifier}
                      author={data.author}
                      title={data.title}
                      intro={data.intro}
                      readTime={data.readTime}
                    />
                  </Link>
                </NextLink>
              );
            }
          })}
        </Stack>
      </Flex>
    </Box>
  );
};

export default BookCategoryList;
