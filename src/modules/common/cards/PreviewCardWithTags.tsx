import React from 'react';
import {
  Heading,
  Flex,
  Box,
  Text,
  Tag,
  TagLabel,
  TagRightIcon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

type Props = {
  frontMatter: {
    title: string;
    description: string;
    readTime?: {
      text: string;
    };
    slug: string;
    layout: string;
    tags: string;
  };
};

const PreviewCardWithTags = ({ frontMatter }: Props) => {
  const { title, description, readTime, slug, layout, tags } = frontMatter;

  const typeOfPost = () => {
    if (layout === 'article') {
      return 'Article';
    }
    if (layout === 'interview') {
      return 'Interview';
    }
    return 'Book Summary';
  };

  return (
    <Box key={slug} w="100%" shadow="sm" p={4} borderBottom="5px solid #00A3C4">
      <Flex
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box>
          <Tag
            colorScheme="purple"
            size="lg"
            my={3}
            fontWeight={700}
            textTransform="uppercase"
          >
            {typeOfPost()}
          </Tag>
          <Heading fontSize="xl" mb={-2} color="cyan.900">
            {title}
          </Heading>
          <Text mt={2}>{description}</Text>
          <Box w="100%" textAlign={['center', 'left']}>
            <Tag colorScheme="cyan" size="md" mt={2}>
              <TagLabel>Read Post</TagLabel>
              <TagRightIcon as={ArrowForwardIcon} />
            </Tag>
            {readTime && (
              <Text fontStyle="italic" color="grey" mt={1}>
                {`${readTime.text}`}
              </Text>
            )}
            <Heading fontSize="md" mt={3} color="cyan.900">
              Tags
            </Heading>
            {tags?.split(',').map((tag: string) => (
              <Tag
                key={tag}
                colorScheme="red"
                size="sm"
                my={1}
                mr={2}
                textTransform="uppercase"
              >
                {tag}
              </Tag>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default PreviewCardWithTags;
