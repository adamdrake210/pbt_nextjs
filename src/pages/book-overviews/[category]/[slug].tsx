import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getBookOverviewBySlug } from '../../../firebase/firebaseApi';

type BookOverview = {
  book: {
    title: string;
    author: string;
    content: string;
  };
};

const Post = ({ book }: BookOverview) => {
  const router = useRouter();
  const { category, slug } = router.query;

  useEffect(() => {
    console.log('book', book);
  }, []);

  return (
    <>
      <p>
        Post: {book.title} - {book.author}
      </p>
      <div dangerouslySetInnerHTML={{ __html: book.content }} />
    </>
  );
};

Post.getInitialProps = async ({ query }) => {
  let pageProps: {};

  await getBookOverviewBySlug(query.slug)
    .then(book => {
      pageProps = {
        id: book.id,
        book: book.data(),
      };
    })
    .catch(error => {
      console.log('Post: ', error);
    });

  return pageProps;
};

export default Post;
