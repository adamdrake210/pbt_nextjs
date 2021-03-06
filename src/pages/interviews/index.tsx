import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import InterviewsPage from '../../containers/InterviewsPage';
import readingTime from 'reading-time';
import { InterviewsContentFrontMatter } from '../../types/types';

import {
  articleFilePaths,
  ARTICLE_PATH,
  bookSummaryFilePaths,
  BOOK_SUMMARY_PATH,
  interviewFilePaths,
  INTERVIEW_PATH,
} from '../../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

type Props = {
  interviewPosts: InterviewsContentFrontMatter[];
};

export default function InterviewsIndex({ interviewPosts }: Props) {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Interviews</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <InterviewsPage interviewPosts={interviewPosts} />
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
      const readTime = readingTime(content);

      return {
        content,
        data: { ...data, readTime },
        filePath,
      };
    });
    return PostsRemote;
  };

  const interviewPosts = getPostsContentAndFrontmatter(
    interviewFilePaths,
    INTERVIEW_PATH,
  );
  const articlePosts = getPostsContentAndFrontmatter(
    articleFilePaths,
    ARTICLE_PATH,
  );
  const bookSummaryPosts = getPostsContentAndFrontmatter(
    bookSummaryFilePaths,
    BOOK_SUMMARY_PATH,
  );

  return {
    props: { interviewPosts, articlePosts, bookSummaryPosts },
  };
}
