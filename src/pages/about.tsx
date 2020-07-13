import React from 'react';
import Head from 'next/head';
import PageContainer from '../containers/PageContainer';
import { About } from '../components/About';

function AboutIndex() {
  return (
    <>
      <Head>
        <title>PaperBackTravels | About</title>
      </Head>
      <PageContainer maxWidth="700px">
        <About />
      </PageContainer>
    </>
  );
}

export default AboutIndex;
