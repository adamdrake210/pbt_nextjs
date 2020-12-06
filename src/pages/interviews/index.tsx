import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import InterviewsPage from '../../containers/InterviewsPage';
import readingTime from 'reading-time';

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
    const readTime = readingTime(content);

    return {
      content,
      data: { ...data, readTime },
      filePath,
    };
  });

  return { props: { interviewPosts } };
}
