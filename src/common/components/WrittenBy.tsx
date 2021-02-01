import { Text, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

type Props = {
  writtenBy: string;
  readTime?: {
    text: string;
  };
};

export default function WrittenBy({ writtenBy, readTime }: Props) {
  const authorSlug = writtenBy.toLowerCase().replace(' ', '-');
  return (
    <>
      {writtenBy && (
        <Text>
          Written By{' '}
          <NextLink
            key={writtenBy}
            passHref
            as={`/authors/${authorSlug}`}
            href={{
              pathname: `/authors/[authorSlug]`,
            }}
          >
            <Link color="cyan.700" fontWeight="700">
              {writtenBy}
            </Link>
          </NextLink>
        </Text>
      )}
      {readTime && (
        <Text fontStyle="italic" color="grey" ml={1}>
          {readTime.text}
        </Text>
      )}
    </>
  );
}
