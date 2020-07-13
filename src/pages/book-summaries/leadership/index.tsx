import React from 'react';
import Head from 'next/head';
import PageContainer from '../../../containers/PageContainer';
import BookCategory from '../../../components/BookCategory';

function BookSummariesIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Leadership</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookCategory category="leadership" />
      </PageContainer>
    </>
  );
}

export default BookSummariesIndex;