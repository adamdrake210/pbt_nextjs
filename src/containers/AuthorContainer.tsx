import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import EmailSubscription from '@/components/email/EmailSubscription';

import {
  ArticlesContentFrontMatter,
  BookSummaryContentFrontMatter,
} from '@/types/types';
import AuthorContent from '@/modules/authors/AuthorContent';

type Props = {
  authorPosts: Array<
    ArticlesContentFrontMatter | BookSummaryContentFrontMatter
  >;
  authorName: string;
};

export default function AuthorContainer({ authorPosts, authorName }: Props) {
  return (
    <Flex mt={[2, 2, 2, 12]} w="100%" direction="column" alignItems="center">
      <AuthorContent authorPosts={authorPosts} authorName={authorName} />

      <EmailSubscription />
    </Flex>
  );
}
