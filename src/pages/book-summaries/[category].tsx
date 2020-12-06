import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import BookCategoryList from '../../components/BookCategoryList';
import readingTime from 'reading-time';

import { bookSummaryFilePaths, BOOK_SUMMARY_PATH } from '../../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { useRouter } from 'next/router';

export default function BookSummariesCategoryContainer({
  bookSummaryPosts,
  category,
}) {
  const router = useRouter();
  // const { category } = router.query;
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

export function getStaticProps({ params }) {
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
  return { props: { bookSummaryPosts, category: params.category } };
}

export async function getStaticPaths() {
  const paths = bookSummaryFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => {
      const splitSlug = slug.split('/');
      return { params: { category: splitSlug[0] } };
    });

  return {
    paths,
    fallback: true,
  };
}
