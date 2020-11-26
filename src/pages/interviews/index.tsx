import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import InterviewsPage from '../../components/InterviewsPage';
//@ts-ignore
import { frontMatter as interviewPosts } from './*.mdx';

function InterviewsIndex() {
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

export default InterviewsIndex;
