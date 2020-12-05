import React from 'react';
import Head from 'next/head';
import HomePage from '../containers/HomePage';
import PageContainer from '../containers/PageContainer';
import {
  interviewFilePaths,
  INTERVIEW_PATH,
  articleFilePaths,
  ARTICLE_PATH,
  bookSummaryFilePaths,
  BOOK_SUMMARY_PATH,
} from '../utils/mdxUtils';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export default function PageIndex({
  interviewPostsRemote,
  articlePostsRemote,
  bookSummaryPostsRemote,
}) {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Home</title>
      </Head>

      <PageContainer maxWidth="1000px">
        <HomePage
          interviewPosts={interviewPostsRemote}
          articlePosts={articlePostsRemote}
          bookSummariesPosts={bookSummaryPostsRemote}
        />
      </PageContainer>
    </>
  );
}

export function getStaticProps() {
  const getPostsContentAndFrontmatter = (
    postsPath: string,
    filePath: string,
  ) => {
    const source = fs.readFileSync(path.join(postsPath, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
    };
  };

  const interviewPostsRemote = interviewFilePaths.map(filePath => {
    const { content, data } = getPostsContentAndFrontmatter(
      INTERVIEW_PATH,
      filePath,
    );

    return {
      content,
      data,
      filePath,
    };
  });

  const articlePostsRemote = articleFilePaths.map(filePath => {
    const { content, data } = getPostsContentAndFrontmatter(
      ARTICLE_PATH,
      filePath,
    );

    return {
      content,
      data,
      filePath,
    };
  });

  const bookSummaryPostsRemote = bookSummaryFilePaths.flat(1).map(filePath => {
    const { content, data } = getPostsContentAndFrontmatter(
      BOOK_SUMMARY_PATH,
      filePath,
    );

    return {
      content,
      data,
      filePath,
    };
  });

  return {
    props: { interviewPostsRemote, articlePostsRemote, bookSummaryPostsRemote },
  };
}
