import React, { useRef } from 'react';
import {
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  useToast,
} from '@chakra-ui/core';

export default function EmailSubscription() {
  const inputRef = useRef(null);
  const toast = useToast();

  const subscribe = async event => {
    event.preventDefault();
    console.log(inputRef.current.value);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    inputRef.current.value = '';
    toast({
      title: 'Success!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      border="2px solid"
      borderColor="cyan.300"
      bg="cyan.600"
      borderRadius={12}
      padding={6}
      my={12}
      w="100%"
    >
      <Heading color="white">Subscribe to our newsletter</Heading>
      <Text color="white">Sign up to receive our sporadic newsletter.</Text>
      <InputGroup size="md" mt={4}>
        <Input
          aria-label="Email Newsletter Subscription"
          placeholder="example@email.com"
          ref={inputRef}
          type="email"
        />
        <InputRightElement width="6.75rem">
          <Button fontWeight="bold" h="1.75rem" size="sm" onClick={subscribe}>
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
