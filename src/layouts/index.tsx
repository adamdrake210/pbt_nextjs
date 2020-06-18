import React from 'react';
import PageContainer from '../containers/PageContainer';

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    return (
      <PageContainer>
        <h1>{frontMatter.title}</h1>
        {content}
      </PageContainer>
    );
  };
}
