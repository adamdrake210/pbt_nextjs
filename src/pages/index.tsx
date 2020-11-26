import React from 'react';
import Head from 'next/head';
import HomePage from '../containers/HomePage';
import PageContainer from '../containers/PageContainer';
// @ts-ignore
import { frontMatter as interviewPosts } from './interviews/*.mdx';
// @ts-ignore
import { frontMatter as articlePosts } from './articles/*.mdx';
// @ts-ignore
import { frontMatter as bookSummariesPosts } from './book-summaries/**/*.mdx';

function PageIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Home</title>
      </Head>

      <PageContainer maxWidth="1000px">
        <HomePage
          interviewPosts={interviewPosts}
          articlePosts={articlePosts}
          bookSummariesPosts={bookSummariesPosts}
        />
      </PageContainer>
    </>
  );
}

export default PageIndex;
