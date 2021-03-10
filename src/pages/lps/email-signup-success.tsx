import React from 'react';
import Head from 'next/head';
import PageContainer from '@/containers/PageContainer';
import { EmailSignUpSuccess } from '@/modules/email/EmailSignUpSuccess';
import readingTime from 'reading-time';

import { interviewFilePaths, INTERVIEW_PATH } from '@/utils/mdxUtils';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { InterviewsContentFrontMatter } from '@/types/types';

type Props = {
  interviewPosts: InterviewsContentFrontMatter[];
};

export default function EmailSignUpSuccessPage({ interviewPosts }: Props) {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Success</title>
      </Head>

      <PageContainer maxWidth="1000px">
        <EmailSignUpSuccess interviewPosts={interviewPosts} />
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
        frontMatter: { ...data, readTime },
        filePath,
      };
    });
    return PostsRemote;
  };

  const interviewPosts = getPostsContentAndFrontmatter(
    interviewFilePaths,
    INTERVIEW_PATH,
  );

  return {
    props: { interviewPosts },
  };
}
