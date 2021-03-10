import {
  Flex,
  Stack,
  Link,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { sortNumberByPublishedDateRemote } from '@/helpers/sortNumberByPublishedDate';
import { SearchIcon } from '@chakra-ui/icons';
import PreviewCardWithTags from '@/modules/common/cards/PreviewCardWithTags';
import { useRouter } from 'next/router';
import { createPostUrl } from '@/helpers/createPostUrl';

type Props = {
  allPosts: any;
};

export default function SearchPage({ allPosts }: Props) {
  const [sortedPosts, setSortedPosts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  let query: string;
  // @ts-ignore
  query = router.query.q;

  const handleSortingOrder = () => {
    const sortedArray = allPosts.sort(sortNumberByPublishedDateRemote);
    setSortedPosts(sortedArray);
  };

  const handleSearch = (inputValue: string) => {
    let currentList = [];
    let newList = [];

    if (inputValue?.length) {
      currentList = allPosts;
      newList = currentList.filter(({ data }) => {
        const titleLowerCase = data.title.toLowerCase();
        const tagsLowerCase = data.tags.toLowerCase();
        const slugLowerCase = data.slug.toLowerCase();
        const filterLowerCase = inputValue.toLowerCase();
        return (
          titleLowerCase.includes(filterLowerCase) ||
          tagsLowerCase.includes(filterLowerCase) ||
          slugLowerCase.includes(filterLowerCase)
        );
      });
    } else {
      newList = allPosts;
    }
    setSortedPosts(newList);
  };

  useEffect(() => {
    handleSortingOrder();
    handleSearch(query);
    setSearchInput(query);
  }, [allPosts, query]);

  return (
    <>
      <InputGroup>
        <InputLeftElement
          children={<SearchIcon name="search" color="gray.300" mt={2} />}
        />
        <Input
          placeholder="Search here..."
          size="lg"
          variant="flushed"
          onChange={e => {
            setSearchInput(e.target.value);
            handleSearch(e.target.value);
          }}
          value={searchInput}
          color="gray.600"
        />
      </InputGroup>

      {!sortedPosts.length && (
        <Box mt={8}>
          <Text fontSize="3xl" color="cyan.800">
            No search results for <i>{searchInput}</i>
          </Text>
        </Box>
      )}

      <Flex
        w="100%"
        justify={['flex-start', 'flex-start', 'space-between', 'flex-start']}
        alignItems={['flex-start']}
        direction={['column', 'column', 'row']}
        flexWrap="wrap"
      >
        <Stack spacing={8}>
          {sortedPosts?.map(({ data }: any) => {
            if (data.published) {
              return (
                <NextLink
                  key={data.slug}
                  passHref
                  as={createPostUrl(data)}
                  href={createPostUrl(data)}
                >
                  <Link
                    _hover={{
                      backgroundColor: '#f6f6f6',
                    }}
                    mb={4}
                  >
                    <PreviewCardWithTags frontMatter={data} />
                  </Link>
                </NextLink>
              );
            }
          })}
        </Stack>
      </Flex>
    </>
  );
}
