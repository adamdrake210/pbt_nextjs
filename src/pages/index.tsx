import React from 'react';
import Head from 'next/head';
import HomePage from '../components/HomePage';
import PageContainer from '../containers/PageContainer';

function PageIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Home</title>
      </Head>
      <PageContainer maxWidth="1200px">
        <HomePage />
      </PageContainer>
    </>
  );
}

export default PageIndex;
