import React from 'react';
import Head from 'next/head';
import PageContainer from '@/containers/PageContainer';
import {
  articleFilePaths,
  ARTICLE_PATH,
  bookSummaryFilePaths,
  BOOK_SUMMARY_PATH,
} from '@/utils/mdxUtils';
import {
  ArticlesContentFrontMatter,
  BookSummaryContentFrontMatter,
} from '@/types/types';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import AuthorContainer from '@/containers/AuthorContainer';

type Props = {
  authorPosts: Array<
    ArticlesContentFrontMatter | BookSummaryContentFrontMatter
  >;
  authorName: string;
};

export default function AuthorsPage({ authorPosts, authorName }: Props) {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Author</title>
      </Head>

      <PageContainer maxWidth="1000px">
        <AuthorContainer authorPosts={authorPosts} authorName={authorName} />
      </PageContainer>
    </>
  );
}

type StaticProps = {
  params: {
    name: string;
  };
};

export function getStaticProps({ params }: StaticProps) {
  const { name } = params;
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

  const articlePosts = getPostsContentAndFrontmatter(
    articleFilePaths,
    ARTICLE_PATH,
  );
  const bookSummaryPosts = getPostsContentAndFrontmatter(
    bookSummaryFilePaths,
    BOOK_SUMMARY_PATH,
  );

  const allPosts = [...articlePosts, ...bookSummaryPosts];

  const authorPosts = allPosts.filter(post => {
    const authorName = post.data.writtenBy.toLowerCase().replace(' ', '-');
    return authorName.includes(name.split('-')[0]);
  });

  return {
    props: {
      authorPosts,
      authorName: name,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { name: 'adam-drake' } },
      { params: { name: 'james-king' } },
    ],
    fallback: false,
  };
};
