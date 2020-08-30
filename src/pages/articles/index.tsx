import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import ArticlesPage from '../../components/ArticlesPage';

function ArticlesIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Articles</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <ArticlesPage />
      </PageContainer>
    </>
  );
}

export default ArticlesIndex;
