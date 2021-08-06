import React from 'react';
import PageContainer from '@/containers/PageContainer';
import { Heading, Box, Flex, Text } from '@chakra-ui/react';
import PageSeo from '@/modules/common/PageSeo';
import dynamic from 'next/dynamic';
import { FrontMatterInterviews } from '@/types/types';
import EmailSubscriptionForm from '@/modules/email/EmailSubscriptionForm';
import { AmazonAdvert } from '@/modules/adverts/AmazonAdvert';
import { Image960x660 } from '@/modules/common/images/Image960x660';
import { AmazonCta } from '@/modules/common/AmazonCta';
import { Image266x400 } from '@/modules/common/images/Image266x400';
import readingTime from 'reading-time';

// Remote packages
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { interviewFilePaths, INTERVIEW_PATH } from '@/utils/mdxUtils';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

type Props = {
  frontMatter: FrontMatterInterviews;
  source: string;
};

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Box,
  AmazonCta,
  Image266x400,
};

export default function InterviewLayout({ frontMatter, source }: Props) {
  const { title, slug, readTime, imageUniqueIdentifier } = frontMatter;

  return (
    <PageContainer maxWidth="728px">
      <PageSeo
        {...frontMatter}
        type="interviews"
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
        {/* @ts-ignore */}
        <MDXRemote {...source} components={components} lazy />
      </Box>
      <AmazonAdvert />
      <EmailSubscriptionForm />
    </PageContainer>
  );
}

export const getStaticProps = async ({ params }) => {
  const interviewFilePath = path.join(INTERVIEW_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(interviewFilePath);

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
