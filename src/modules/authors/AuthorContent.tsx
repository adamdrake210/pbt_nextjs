import React, { useEffect, useState } from 'react';
import { Flex, Heading, Link } from '@chakra-ui/react';
import { sortNumberByPublishedDateRemote } from '@/helpers/sortNumberByPublishedDate';
import NextLink from 'next/link';
import PreviewCardWithTags from '@/modules/common/cards/PreviewCardWithTags';
import {
  ArticlesContentFrontMatter,
  BookSummaryContentFrontMatter,
} from '@/types/types';
import { createPostUrl } from '@/helpers/createPostUrl';

type Props = {
  authorPosts: Array<
    ArticlesContentFrontMatter | BookSummaryContentFrontMatter
  >;
  authorName: string;
};

export default function AuthorContent({ authorPosts, authorName }: Props) {
  const [sortedPosts, setSortedPosts] = useState<
    Array<ArticlesContentFrontMatter | BookSummaryContentFrontMatter>
  >([]);

  const handleSortingOrder = () => {
    const sortedArray = authorPosts.sort(sortNumberByPublishedDateRemote);
    setSortedPosts(sortedArray);
  };

  useEffect(() => {
    handleSortingOrder();
  }, [authorPosts]);

  return (
    <Flex maxW="600px" direction="column" alignItems="center">
      <Heading
        as="h2"
        fontSize={['3xl', '5xl']}
        mb={4}
        w="100%"
        textAlign="center"
        color="cyan.900"
        px={[4]}
        textTransform="capitalize"
      >
        Posts written by {authorName.replace('-', ' ')}
      </Heading>

      {sortedPosts?.map(({ data }: any) => {
        if (data.published) {
          return (
            <NextLink
              key={data.slug}
              passHref
              as={createPostUrl(data)}
              href={createPostUrl(data)}
            >
              <Link
                _hover={{
                  backgroundColor: '#f6f6f6',
                }}
                mb={4}
              >
                <PreviewCardWithTags frontMatter={data} />
              </Link>
            </NextLink>
          );
        }
      })}
    </Flex>
  );
}
