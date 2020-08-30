import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import BookSummariesList from '../../components/BookSummariesList';

function BookSummariesIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Book Summaries</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookSummariesList />
      </PageContainer>
    </>
  );
}

export default BookSummariesIndex;
