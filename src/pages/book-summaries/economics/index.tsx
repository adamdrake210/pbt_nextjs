import React from 'react';
import Head from 'next/head';
import PageContainer from '../../../containers/PageContainer';
import BookCategory from '../../../components/BookCategory';

function BookSummariesIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Economics</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookCategory category="economics" />
      </PageContainer>
    </>
  );
}

export default BookSummariesIndex;
