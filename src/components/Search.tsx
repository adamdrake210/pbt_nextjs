import React from 'react';
import {
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
} from '@chakra-ui/core';

type Props = {
  handleChange: (e: Event) => void;
};

export default function Search({ handleChange }: Props) {
  return (
    <Box px={[0, 4]} w="100%">
      <InputGroup>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input
          placeholder="Search for a book..."
          size="lg"
          variant="flushed"
          onChange={e => {
            return handleChange(e);
          }}
          color="gray.600"
        />
      </InputGroup>
    </Box>
  );
}
