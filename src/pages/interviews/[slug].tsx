import React from 'react';
import PageContainer from '../../containers/PageContainer';
import {
  Heading,
  Box,
  Button,
  Flex,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import PageSeo from '../../components/partials/PageSeo';
import dynamic from 'next/dynamic';
import { FrontMatterInterviewsType } from '../../types/types';
import EmailSubscription from '../../components/partials/EmailSubscription';
import { AmazonAdvert } from '../../components/adverts/AmazonAdvert';
import { Image960x660 } from '../../components/image_components/Image960x660';

import { AmazonCta } from '../../components/partials/AmazonCta';
import { Image266x400 } from '../../components/image_components/Image266x400';

// Remote packages
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { interviewFilePaths, INTERVIEW_PATH } from '../../utils/mdxUtils';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

interface Props {
  frontMatter: FrontMatterInterviewsType;
  source: any;
}

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  // a: CustomLink,
  Link: Link,
  Box: Box,
  Button: Button,
  Image: Image,
  Flex: Flex,
  AmazonCta: AmazonCta,
  Image266x400: Image266x400,
};

export default function InterviewLayout({ frontMatter, source }: Props) {
  const { title, slug, readingTime, imageUniqueIdentifier } = frontMatter;
  const content = hydrate(source, { components });

  return (
    <PageContainer maxWidth="728px">
      <PageSeo
        {...frontMatter}
        url={`https://paperbacktravels.com/interviews/${slug}`}
      />
      <Image960x660
        src={`${slug}_${imageUniqueIdentifier}`}
        imageCategory="interviews"
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
          {readingTime && (
            <>
              <Text fontStyle="italic" color="grey" ml={1}>
                {readingTime.text}
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
  const interviewFilePath = path.join(INTERVIEW_PATH, `${params.slug}.mdx`);
  console.log('interviewFilePath: ', interviewFilePath);
  const source = fs.readFileSync(interviewFilePath);

  const { content, data } = matter(source);

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
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = interviewFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
