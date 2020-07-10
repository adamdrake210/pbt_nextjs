import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import BookSummaries from '../../components/BookSummaries';

function BookSummariesIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Book Summaries</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookSummaries />
      </PageContainer>
    </>
  );
}

export default BookSummariesIndex;
