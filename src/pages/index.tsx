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
    postsPaths: string[],
    folderPath: string,
  ) => {
    const PostsRemote = postsPaths.map(filePath => {
      const source = fs.readFileSync(path.join(folderPath, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    });
    return PostsRemote;
  };

  const interviewPostsRemote = getPostsContentAndFrontmatter(
    interviewFilePaths,
    INTERVIEW_PATH,
  );
  const articlePostsRemote = getPostsContentAndFrontmatter(
    articleFilePaths,
    ARTICLE_PATH,
  );
  const bookSummaryPostsRemote = getPostsContentAndFrontmatter(
    bookSummaryFilePaths,
    BOOK_SUMMARY_PATH,
  );

  return {
    props: { interviewPostsRemote, articlePostsRemote, bookSummaryPostsRemote },
  };
}
