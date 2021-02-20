import React, { useRef } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export const SearchModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const searchInput = useRef(null);

  const handleSearch = e => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: { q: searchInput.current.value },
    });
    onClose();
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      router.push({
        pathname: '/search',
        query: { q: searchInput.current.value },
      });
      onClose();
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="cyan">
        <SearchIcon name="search" color="white" mt={0} />
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        initialFocusRef={searchInput}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <InputGroup>
              <InputLeftElement
                children={<SearchIcon name="search" color="gray.300" mt={2} />}
              />
              <Input
                placeholder="Enter your search here..."
                size="lg"
                variant="flushed"
                color="gray.600"
                ref={searchInput}
                onKeyDown={handleKeyDown}
              />
              <Button
                colorScheme="cyan"
                mr={3}
                ml={8}
                onClick={handleSearch}
                variant="outline"
              >
                Search
              </Button>
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
