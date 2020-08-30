import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

interface Props {
  title: string;
  description: string;
  publishedDate: string;
  slug: string;
  url: string;
  author: string;
}

const PageSeo: React.FC<Props> = ({
  title,
  description,
  publishedDate,
  slug,
  url,
  author,
}) => {
  const featuredImage = {
    url: `./images/book-summaries/${slug}.jpg`,
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
};

export default PageSeo;
