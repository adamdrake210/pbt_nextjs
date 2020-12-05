import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import BookSummariesList from '../../components/BookSummariesList';

import { bookSummaryFilePaths, BOOK_SUMMARY_PATH } from '../../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function BookSummariesIndex({ bookSummaryPosts }) {
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
  const bookSummaryPosts = bookSummaryFilePaths.flat(1).map(filePath => {
    const source = fs.readFileSync(path.join(BOOK_SUMMARY_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  return { props: { bookSummaryPosts } };
}
