import React from 'react';
import Head from 'next/head';
import HomePage from '../containers/HomePage';
import PageContainer from '../containers/PageContainer';
// @ts-ignore
import { frontMatter as articlePosts } from './articles/*.mdx';
// @ts-ignore
import { frontMatter as bookSummariesPosts } from './book-summaries/**/*.mdx';

// mdx-remote files
import { interviewFilePaths, INTERVIEW_PATH } from '../utils/mdxUtils';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export default function PageIndex({ interviewPostsRemote }) {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Home</title>
      </Head>

      <PageContainer maxWidth="1000px">
        {/* <ul>
          {interviewPostsRemote.map(post => (
            <li key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul> */}
        <HomePage
          interviewPosts={interviewPostsRemote}
          articlePosts={articlePosts}
          bookSummariesPosts={bookSummariesPosts}
        />
      </PageContainer>
    </>
  );
}

export function getStaticProps() {
  const interviewPostsRemote = interviewFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(INTERVIEW_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { interviewPostsRemote } };
}

// CTA Button
// Reading Time
// Try adding articles too
// Clean up files
// Update Types
