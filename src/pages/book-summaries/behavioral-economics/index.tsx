import React from 'react';
import Head from 'next/head';
import PageContainer from '../../../containers/PageContainer';
import BookCategory from '../../../components/BookCategory';

function BookSummariesIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Behavioral Economics</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookCategory category="behavioral-economics" />
      </PageContainer>
    </>
  );
}

export default BookSummariesIndex;
