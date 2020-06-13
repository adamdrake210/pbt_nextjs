import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getBookOverviewBySlug } from '../../../firebase/firebaseApi';

const Post = ({ book }) => {
  const router = useRouter();
  const { category, slug } = router.query;

  // useEffect(() => {
  //   if (id) {
  //     getBookOverviewBySlug(id)
  //       .then(doc => {
  //         console.log(doc.data());
  //         setBookOverview(doc.data());
  //         // @ts-ignore
  //         // const city = doc.data();
  //       })
  //       .catch(err => {
  //         console.log('Error getting document:', err);
  //       });
  //     console.log('slug:', slug);
  //   }
  // }, [slug]);

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
  let pageProps;

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
