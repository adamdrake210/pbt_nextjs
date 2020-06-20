import React, { useEffect, useState } from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  List,
  ListItem,
} from '@chakra-ui/core';
import { frontMatter as bookOverviewPosts } from '../pages/book-overviews/**/*.mdx';
import Link from 'next/link';

type FrontMatterType = {
  title: string;
  author: string;
  summary: string;
  slug: string;
  category: string;
  publishedDate: string;
  published: boolean;
};

export default function BookOverview() {
  const [categories, setCategories] = useState([]);

  function makeCategoryList(category: string) {
    return (
      <Box key={category}>
        <Heading as="h2">{category}</Heading>
        <List styleType="disc">
          {bookOverviewPosts.map((frontMatter: FrontMatterType) => {
            if (category === frontMatter.category) {
              return (
                <Link
                  key={frontMatter.slug}
                  passHref
                  href={`/book-overviews/${frontMatter.category}/${frontMatter.slug}`}
                >
                  <a>
                    <ListItem>{`${frontMatter.title} - ${frontMatter.author}`}</ListItem>
                  </a>
                </Link>
              );
            }
          })}
        </List>
      </Box>
    );
  }

  useEffect(() => {
    const filterData = bookOverviewPosts.map((frontMatter: FrontMatterType) => {
      return frontMatter.category;
    });
    setCategories(filterData);
  }, [bookOverviewPosts]);

  return (
    <div>
      <Heading as="h1" size="2xl">
        Book Overviews
      </Heading>
      {categories && (
        <Box>
          {categories.map(category => {
            return makeCategoryList(category);
          })}
        </Box>
      )}
    </div>
  );
}
