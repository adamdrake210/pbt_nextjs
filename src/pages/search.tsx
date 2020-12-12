import React from 'react';
import Head from 'next/head';
import PageContainer from '../containers/PageContainer';
import readingTime from 'reading-time';
import {
  ArticlesContentFrontMatter,
  BookSummaryContentFrontMatter,
  InterviewsContentFrontMatter,
} from '../types/types';

import {
  articleFilePaths,
  ARTICLE_PATH,
  bookSummaryFilePaths,
  BOOK_SUMMARY_PATH,
  interviewFilePaths,
  INTERVIEW_PATH,
} from '../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import SearchContainer from '../containers/SearchContainer';

type Props = {
  bookSummaryPosts: BookSummaryContentFrontMatter[];
  articlePosts: ArticlesContentFrontMatter[];
  interviewPosts: InterviewsContentFrontMatter[];
};

export default function SearchPage({
  interviewPosts,
  articlePosts,
  bookSummaryPosts,
}: Props) {
  const allPosts = [...interviewPosts, ...articlePosts, ...bookSummaryPosts];
  return (
    <>
      <Head>
        <title>PaperBackTravels | Search</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <SearchContainer allPosts={allPosts} />
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
