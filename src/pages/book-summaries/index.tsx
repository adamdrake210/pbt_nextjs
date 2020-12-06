import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import BookSummariesList from '../../components/BookSummariesList';
import readingTime from 'reading-time';

import { bookSummaryFilePaths, BOOK_SUMMARY_PATH } from '../../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { BookSummaryContentFrontMatter } from '../../types/types';

type Props = {
  bookSummaryPosts: BookSummaryContentFrontMatter[];
};

export default function BookSummariesIndex({ bookSummaryPosts }: Props) {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Book Summaries</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookSummariesList bookSummaryPosts={bookSummaryPosts} />
      </PageContainer>
    </>
  );
}

export function getStaticProps() {
  const bookSummaryPosts = bookSummaryFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(BOOK_SUMMARY_PATH, filePath));
    const { content, data } = matter(source);
    const readTime = readingTime(content);

    return {
      content,
      data: { ...data, readTime },
      filePath,
    };
  });
  return { props: { bookSummaryPosts } };
}
