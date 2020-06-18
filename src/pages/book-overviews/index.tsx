import React from 'react';
import Head from 'next/head';
import PageContainer from '../../containers/PageContainer';
import BookOverview from '../../components/BookOverview';

function BookOverviewIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | Book Overviews</title>
      </Head>
      <PageContainer>
        <BookOverview />
      </PageContainer>
    </>
  );
}

export default BookOverviewIndex;
