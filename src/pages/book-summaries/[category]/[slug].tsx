import React from 'react';
import PageContainer from '@/containers/PageContainer';
import { Heading, Box, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import PageSeo from '@/modules/common/PageSeo';
import { FrontMatterBookSummaries } from '@/types/types';
import EmailSubscriptionForm from '@/modules/email/EmailSubscriptionForm';
import { AmazonAdvert } from '@/modules/adverts/AmazonAdvert';
import { AmazonCta } from '@/modules/common/AmazonCta';
import { Image266x400 } from '@/modules/common/images/Image266x400';
import readingTime from 'reading-time';

// Remote packages
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { bookSummaryFilePaths, BOOK_SUMMARY_PATH } from '@/utils/mdxUtils';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
// import ReadMore from '@/modules/readmore/ReadMoreBookSummaries';
import CategoryTag from '@/modules/common/CategoryTag';
import WrittenBy from '@/modules/common/WrittenBy';

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
          <WrittenBy writtenBy={writtenBy} readTime={readTime} />
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
      <Box px={[4, 8]}>
        <MDXRemote {...source} components={components} />
      </Box>
      <AmazonAdvert />
      <EmailSubscriptionForm />
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

  const mdxSource = await serialize(content, {
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
