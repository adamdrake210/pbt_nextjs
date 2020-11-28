import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import InterviewsPage from '../../components/InterviewsPage';
//@ts-ignore
// import { frontMatter as interviewPosts } from './*.mdx';

import { interviewFilePaths, INTERVIEW_PATH } from '../../utils/mdxUtils';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function InterviewsIndex({ interviewPosts }) {
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
  const interviewPosts = interviewFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(INTERVIEW_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { interviewPosts } };
}
