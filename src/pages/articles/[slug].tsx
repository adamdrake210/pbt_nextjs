import React from 'react';
import PageContainer from '../../containers/PageContainer';
import { Heading, Box, Flex, Text } from '@chakra-ui/react';
import PageSeo from '../../components/partials/PageSeo';
import dynamic from 'next/dynamic';
import { FrontMatterArticles } from '../../types/types';
import EmailSubscription from '../../components/email/EmailSubscription';
import { AmazonAdvert } from '../../components/adverts/AmazonAdvert';
import { Image960x660 } from '../../components/image_components/Image960x660';
import { AmazonCta } from '../../components/partials/AmazonCta';
import { Image266x400 } from '../../components/image_components/Image266x400';
import readingTime from 'reading-time';

// Remote packages
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { articleFilePaths, ARTICLE_PATH } from '../../utils/mdxUtils';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

type Props = {
  frontMatter: FrontMatterArticles;
  source: string;
};

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Box: Box,
  AmazonCta: AmazonCta,
  Image266x400: Image266x400,
  Image960x660: Image960x660,
};

export default function InterviewLayout({ frontMatter, source }: Props) {
  const { title, slug, readTime, imageUniqueIdentifier } = frontMatter;
  const content = hydrate(source, { components });

  return (
    <PageContainer maxWidth="728px">
      <PageSeo
        {...frontMatter}
        type="articles"
        url={`https://paperbacktravels.com/articles/${slug}`}
      />
      <Image960x660
        src={`${slug}_${imageUniqueIdentifier}`}
        imageCategory="articles"
        altText={slug}
      />
      <Flex
        p={[4, 8]}
        pt={[0, 0]}
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
        <Flex p={0} w="100%" justifyContent="center">
          {readTime && (
            <>
              <Text fontStyle="italic" color="grey" ml={1}>
                {readTime.text}
              </Text>
            </>
          )}
        </Flex>
      </Flex>
      <AmazonAdvert />
      <Box px={[4, 8]} mb={6}>
        {content}
      </Box>
      <AmazonAdvert />
      <EmailSubscription />
    </PageContainer>
  );
}

export const getStaticProps = async ({ params }) => {
  const articleFilePaths = path.join(ARTICLE_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(articleFilePaths);

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
  const paths = articleFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
