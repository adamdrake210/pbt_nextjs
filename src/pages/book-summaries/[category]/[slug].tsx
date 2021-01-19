import React from 'react';
import PageContainer from '../../../containers/PageContainer';
import { Heading, Box, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import PageSeo from '../../../components/partials/PageSeo';
import dynamic from 'next/dynamic';
import { FrontMatterBookSummaries } from '../../../types/types';
import EmailSubscription from '../../../components/partials/EmailSubscription';
import { AmazonAdvert } from '../../../components/adverts/AmazonAdvert';
import { AmazonCta } from '../../../components/partials/AmazonCta';
import { Image266x400 } from '../../../components/image_components/Image266x400';
import readingTime from 'reading-time';

// Remote packages
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {
  bookSummaryFilePaths,
  BOOK_SUMMARY_PATH,
} from '../../../utils/mdxUtils';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import ReadMore from '../../../components/ReadMore';
import CategoryTag from '../../../components/partials/CategoryTag';

interface Props {
  frontMatter: FrontMatterBookSummaries;
  source: any;
}

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Box: Box,
  AmazonCta: AmazonCta,
  Image266x400: Image266x400,
};

export default function BookSummaryLayout({ frontMatter, source }: Props) {
  const {
    title,
    slug,
    imageUniqueIdentifier,
    author,
    writtenBy,
    category,
    intro,
    readTime,
  } = frontMatter;
  const content = hydrate(source, { components });

  return (
    <PageContainer maxWidth="728px">
      <PageSeo
        {...frontMatter}
        type="book-summaries"
        url={`https://paperbacktravels.com/book-summaries/${category.toLowerCase()}/${slug.toLowerCase()}`}
      />
      <Flex
        p={[4, 8]}
        w="100%"
        justify={['center']}
        alignItems={['center']}
        direction={['column']}
        flexWrap="wrap"
      >
        <Box textAlign="center" w="100%">
          <Heading as="h1" color="cyan.900">
            {title}
          </Heading>
        </Box>
        <Flex p={0} mb={8} w="100%" justifyContent="center">
          <>
            <Text>Written By {writtenBy} - </Text>
            <Text fontStyle="italic" color="grey" ml={1}>
              {readTime.text}
            </Text>
          </>
        </Flex>
        <Image266x400
          src={`${slug}_${imageUniqueIdentifier}`}
          altText={`${author} - ${title}`}
          imageCategory="book-summaries"
        />
        <NextLink
          passHref
          href={`/book-summaries/${frontMatter.category.toLowerCase()}`}
        >
          <Link>
            <Flex
              justifyContent={['center', 'space-between']}
              alignItems="center"
            >
              <CategoryTag category={category} />
            </Flex>
          </Link>
        </NextLink>
      </Flex>
      <AmazonAdvert />
      <Box px={[4, 8]} pt={[4, 8]} pb={0}>
        <Text fontSize="xl" fontWeight={500}>
          {intro}
        </Text>
      </Box>
      <Box px={[4, 8]}>{content}</Box>
      <AmazonAdvert />
      <EmailSubscription />
      {/* <ReadMore tags={tags} category={category} /> */}
    </PageContainer>
  );
}

export const getStaticProps = async ({ params }) => {
  const bookSummaryFilePaths = path.join(
    BOOK_SUMMARY_PATH,
    `${params.category}/${params.slug}.mdx`,
  );
  const source = fs.readFileSync(bookSummaryFilePaths);
  const { content, data } = matter(source);
  const readTime = readingTime(content);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...data, readTime },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = bookSummaryFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => {
      const splitSlug = slug.split('/');
      return { params: { slug: splitSlug[1], category: splitSlug[0] } };
    });

  return {
    paths,
    fallback: false,
  };
};
