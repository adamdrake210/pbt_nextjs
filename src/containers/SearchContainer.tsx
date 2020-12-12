import React, { useEffect, useState } from 'react';
import { Flex, Heading, Spinner } from '@chakra-ui/react';
import SearchPage from '../components/search/SearchPage';

type Props = {
  allPosts: any;
};

export default function SearchContainer({ allPosts }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [setIsLoading]);
  return (
    <Flex mt={[2, 2, 2, 12]} w="100%" direction="column" alignItems="center">
      <Heading
        as="h2"
        fontSize={['4xl', '5xl']}
        mb={4}
        w="100%"
        textAlign={['center', 'center', 'left']}
        color="cyan.900"
        px={[4]}
      >
        Search Results
      </Heading>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {!isLoading && <SearchPage allPosts={allPosts} />}
    </Flex>
  );
}
