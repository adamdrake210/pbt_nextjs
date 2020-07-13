import React from 'react';
import Head from 'next/head';
import PageContainer from '../../../containers/PageContainer';
import BookCategory from '../../../components/BookCategory';

function BookSummariesIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Spiritual</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookCategory category="spiritual" />
      </PageContainer>
    </>
  );
}

export default BookSummariesIndex;
