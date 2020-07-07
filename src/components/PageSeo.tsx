import React, { useEffect } from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

type Props = {
  title: string;
  description: string;
  publishedDate: string;
  slug: string;
  url: string;
  author: string;
};

export default function PageSeo({
  title,
  description,
  publishedDate,
  slug,
  url,
  author,
}: Props) {
  const featuredImage = {
    url: `./images/book-overviews/${slug}.jpg`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – PaperBack Travels`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedDate,
          },
          url,
          title,
          description: description,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={publishedDate}
        datePublished={publishedDate}
        description={description}
        publisherLogo="/static/favicon.ico"
        images={[featuredImage.url]}
        publisherName={author}
        title={title}
        url={url}
      />
    </>
  );
}
