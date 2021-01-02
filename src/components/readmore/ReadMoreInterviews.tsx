import React, { useEffect, useState } from 'react';
import { Heading, Flex, Box, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { InterviewsContentFrontMatter } from '../../types/types';
import InterviewPreviewCard from '../cards/InterviewPreviewCard';

interface Props {
  interviewPosts: InterviewsContentFrontMatter[];
}

const ReadMore: React.FC<Props> = ({ interviewPosts }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  const randomThreePosts = () => {
    const shuffled = interviewPosts.sort(() => 0.5 - Math.random());
    setFilteredPosts(shuffled.slice(0, 3));
  };

  useEffect(() => {
    randomThreePosts();
  }, []);

  return (
    <Box px={[4, 0]} py={8} mb={4}>
      <Heading as="h2" size="xl" mb={4} color="cyan.900">
        Some further reading
      </Heading>

      <Flex
        w="100%"
        justify={['flex-start', 'flex-start', 'space-between', 'flex-start']}
        alignItems={['flex-start']}
        direction={['column', 'column', 'row']}
        flexWrap="wrap"
      >
        <Stack spacing={8}>
          {filteredPosts?.map(({ frontMatter }) => {
            return (
              <NextLink
                key={frontMatter.slug}
                passHref
                href={`/interviews/${frontMatter.slug}`}
              >
                <Link
                  _hover={{
                    backgroundColor: '#f6f6f6',
                  }}
                  mb={4}
                >
                  <InterviewPreviewCard
                    slug={frontMatter.slug}
                    imageUniqueIdentifier={frontMatter.imageUniqueIdentifier}
                    title={frontMatter.title}
                    description={frontMatter.description}
                    readTime={frontMatter.readTime}
                  />
                </Link>
              </NextLink>
            );
          })}
        </Stack>
      </Flex>
    </Box>
  );
};

export default ReadMore;
