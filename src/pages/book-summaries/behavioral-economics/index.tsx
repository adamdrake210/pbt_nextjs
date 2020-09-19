import React from 'react';
import Head from 'next/head';
import PageContainer from '../../../containers/PageContainer';
import BookCategoryList from '../../../components/BookCategoryList';

function BookSummariesIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Behavioral Economics</title>
      </Head>
      <PageContainer maxWidth="1000px">
        <BookCategoryList category="behavioral-economics" />
      </PageContainer>
    </>
  );
}

export default BookSummariesIndex;
