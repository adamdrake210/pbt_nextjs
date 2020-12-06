import React from 'react';
import {
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<Props> = ({ handleChange }) => {
  return (
    <Box px={[0, 4]} w="100%">
      <InputGroup>
        <InputLeftElement
          children={<SearchIcon name="search" color="gray.300" mt={2} />}
        />
        <Input
          placeholder="Search for a book..."
          size="lg"
          variant="flushed"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            return handleChange(e);
          }}
          color="gray.600"
        />
      </InputGroup>
    </Box>
  );
};
