import React, { useEffect, useState } from 'react';
import { Heading, Flex, Box, List, ListItem, Image } from '@chakra-ui/core';
// @ts-ignore
import { frontMatter as bookOverviewPosts } from '../pages/book-overviews/**/*.mdx';
import Link from 'next/link';
import { FrontMatterType } from '../types/types';

export default function BookOverview() {
  const [categories, setCategories] = useState([]);

  function makeCategoryList(category: string) {
    return (
      <Box key={category} w="100%" maxW={[350, 270]} p={0} m={['16px 0']}>
        <Heading as="h2" textTransform="capitalize">
          {category}
        </Heading>
        {/* {bookOverviewPosts.map((frontMatter: FrontMatterType) => {
          if (category === frontMatter.category && frontMatter.published) {
            return (
              <Image
                src={`../../images/book-overviews/${frontMatter.slug}.jpg`}
                alt={`${frontMatter.author} - ${frontMatter.title}`}
                w={266}
                h={400}
              />
            );
          }
        })} */}
        <List styleType="square">
          {bookOverviewPosts.map((frontMatter: FrontMatterType) => {
            if (category === frontMatter.category && frontMatter.published) {
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
    <Box p={[4, 8]}>
      <Heading as="h1" size="2xl" mb={4}>
        Book Overviews
      </Heading>
      {categories && (
        <Flex
          w="100%"
          justify={['space-between']}
          alignItems={['flex-start']}
          direction={['column', 'column', 'row']}
          flexWrap="wrap"
        >
          {categories.map(category => {
            return makeCategoryList(category);
          })}
        </Flex>
      )}
    </Box>
  );
}
