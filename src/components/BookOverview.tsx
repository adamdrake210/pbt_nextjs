import React, { useEffect, useState } from 'react';
import { Heading, Flex, Box, List, ListItem, Image } from '@chakra-ui/core';
// @ts-ignore
import { frontMatter as bookOverviewPosts } from '../pages/book-overviews/**/*.mdx';
import Link from 'next/link';
import { FrontMatterType } from '../types/types';
import Search from './Search';

export default function BookOverview() {
  const [categories, setCategories] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(bookOverviewPosts);
    const filterData = bookOverviewPosts.map((frontMatter: FrontMatterType) => {
      return frontMatter.category;
    });
    const removedDuplicates = filterData.filter((item: string, pos: number) => {
      return filterData.indexOf(item) == pos;
    });
    setCategories(removedDuplicates);
  }, [bookOverviewPosts]);

  function handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== '') {
      currentList = bookOverviewPosts;
      newList = currentList.filter(item => {
        const titleLowerCase = item.title.toLowerCase();
        const authorLowerCase = item.author.toLowerCase();
        const filterLowerCase = e.target.value.toLowerCase();
        return (
          titleLowerCase.includes(filterLowerCase) ||
          authorLowerCase.includes(filterLowerCase)
        );
      });
    } else {
      newList = bookOverviewPosts;
    }
    setFilteredBooks(newList);
  }

  function makeCategoryList(category: string) {
    return filteredBooks.map((frontMatter: FrontMatterType) => {
      if (category === frontMatter.category && frontMatter.published) {
        return (
          <Box key={category} w="100%" maxW={[350, 270]} p={0} m={['16px 0']}>
            <>
              <Heading as="h2" textTransform="capitalize">
                {category};
              </Heading>
              <List styleType="square">
                <Link
                  key={frontMatter.slug}
                  passHref
                  href={`/book-overviews/${frontMatter.category}/${frontMatter.slug}`}
                >
                  <a>
                    <ListItem>{`${frontMatter.title} - ${frontMatter.author}`}</ListItem>
                  </a>
                </Link>
              </List>
            </>
          </Box>
        );
      }
    });
  }

  return (
    <Box p={[4, 8]}>
      <Heading as="h1" size="xl" mb={4}>
        Book Overviews
      </Heading>
      <Box mb={8}>
        <Search handleChange={handleChange} />
      </Box>

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
