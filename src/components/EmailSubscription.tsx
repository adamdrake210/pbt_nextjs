import React, { useRef, useState } from 'react';
import {
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  useToast,
  Spinner,
  Flex,
} from '@chakra-ui/core';
import { isValidEmail } from '../helpers/validators';

export default function EmailSubscription() {
  const inputRef = useRef(null);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (event: any) => {
    event.preventDefault();
    let emailInput = inputRef.current.value;
    if (isValidEmail(emailInput)) {
      setIsLoading(true);

      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: emailInput,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      console.log('Error: ', error);

      if (error) {
        const realError = JSON.parse(error);
        setIsLoading(false);
        toast({
          title: 'An error occurred.',
          description: realError.detail,
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
        return;
      }

      emailInput = '';
      setIsLoading(false);
      toast({
        title: 'Success!',
        description: 'You are now subscribed.',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'An error occurred.',
        description:
          'There is a problem with your email address. Please review it.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }
  };

  return (
    <>
      {isLoading && (
        <Flex flexDirection="column" alignItems="center" padding={6} my={12}>
          <Spinner
            size="lg"
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="cyan.600"
          />
          <Text mt={4}>Adding you to our mailing list...</Text>
        </Flex>
      )}
      {!isLoading && (
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
              <Button
                fontWeight="bold"
                h="1.75rem"
                size="sm"
                onClick={subscribe}
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      )}
    </>
  );
}
