import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBookOverviews } from '../firebase/firebaseApi';

export default function BookOverviews() {
  const [bookOverviews, setBookOverviews] = useState([]);

  function handleSnapshot(snapshot) {
    const booksOverviewArray = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    setBookOverviews(booksOverviewArray);
  }

  useEffect(() => {
    getBookOverviews(handleSnapshot);
  }, []);

  return (
    <div>
      <h1>Book Overviews</h1>
      <ul>
        {bookOverviews &&
          bookOverviews.map(book => (
            <li>
              <Link
                passHref
                href="/book-overviews/[category]/[slug]"
                as={`/book-overviews/${book.category}/${book.slug}`}
              >
                <a>
                  {book.author} - {book.title}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
