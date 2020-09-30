import { Tag } from '@chakra-ui/core';
import React from 'react';

type Props = {
  category: string;
};

export default function CategoryTag({ category }: Props) {
  return (
    <Tag
      variantColor="purple"
      size="md"
      rounded="full"
      mb={2}
      textTransform="uppercase"
    >
      {category.replace(/-/g, ' ')}
    </Tag>
  );
}
