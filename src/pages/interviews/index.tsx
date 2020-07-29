import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import InterviewsPage from '../../components/InterviewsPage';

function InterviewsIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Interviews</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <InterviewsPage />
      </PageContainer>
    </>
  );
}

export default InterviewsIndex;
