import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import ArticlesPage from '../../containers/ArticlesPage';
import readingTime from 'reading-time';

import { articleFilePaths, ARTICLE_PATH } from '../../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function ArticlesIndex({ articlePosts }) {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Articles</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <ArticlesPage articlePosts={articlePosts} />
      </PageContainer>
    </>
  );
}

export function getStaticProps() {
  const articlePosts = articleFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(ARTICLE_PATH, filePath));
    const { content, data } = matter(source);
    const readTime = readingTime(content);

    return {
      content,
      data: { ...data, readTime },
      filePath,
    };
  });
  return { props: { articlePosts } };
}
