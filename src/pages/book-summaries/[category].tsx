import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import BookCategoryList from '../../components/BookCategoryList';

import { bookSummaryFilePaths, BOOK_SUMMARY_PATH } from '../../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { useRouter } from 'next/router';

export default function BookSummariesCategoryContainer({ bookSummaryPosts }) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <Head>
        <title>PaperBackTravels | {category}</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookCategoryList
          category={category}
          bookSummaryPosts={bookSummaryPosts}
        />
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'behavioral-economics' } },
      { params: { category: 'business' } },
      { params: { category: 'data-visualisation' } },
      { params: { category: 'economics' } },
      { params: { category: 'health-and-wellness' } },
      { params: { category: 'history' } },
      { params: { category: 'leadership' } },
      { params: { category: 'personal-finance' } },
      { params: { category: 'personal-growth' } },
      { params: { category: 'productivity' } },
      { params: { category: 'psychology' } },
      { params: { category: 'social-sciences' } },
      { params: { category: 'spiritual' } },
      { params: { category: 'startups' } },
    ],
    fallback: true,
  };
}
