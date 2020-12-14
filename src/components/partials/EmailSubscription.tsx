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
} from '@chakra-ui/react';
import { isValidEmail } from '../../helpers/validators';
import { ga_event } from '../../helpers/gtag';

export default function EmailSubscription() {
  const emailInputRef = useRef(null);
  const firstNameInputRef = useRef(null);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (event: any) => {
    event.preventDefault();
    let emailInput = emailInputRef.current.value;
    let firstNameInput = firstNameInputRef.current.value;
    if (isValidEmail(emailInput)) {
      setIsLoading(true);

      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: emailInput,
          firstName: firstNameInput,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();

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
        ga_event({
          action: 'email_subscription',
          category: 'form',
          label: window.location.href,
          value: `Error: ${realError.detail}`,
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
      ga_event({
        action: 'email_subscription',
        category: 'form',
        label: window.location.href,
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
      <Flex flexDirection="column" alignItems="center" padding={1} my={2}>
        {isLoading && (
          <>
            <Spinner
              size="lg"
              thickness="3px"
              speed="0.65s"
              emptyColor="gray.200"
              color="cyan.600"
              mt={10}
            />
            <Text mt={4}>Adding you to our mailing list...</Text>
          </>
        )}
        {!isLoading && (
          <Box
            border="3px solid"
            borderColor="cyan.300"
            bg="gray.100"
            borderRadius={3}
            padding={6}
            my={12}
            w="100%"
            maxW={400}
            boxShadow="0 10px 24px 0 rgba(54, 61, 77, 0.15)"
          >
            <Heading size="lg" color="black">
              Join the List
            </Heading>
            <Text>
              Join our mailing list to receive occasional emails containing
              interviews with professionals from all areas. Find out the books
              they read to become successful.
            </Text>
            <InputGroup
              size="md"
              mt={4}
              display="flex"
              flexDirection={['column']}
            >
              <Input
                aria-label="Email Newsletter Subscription First Name"
                placeholder="First Name"
                focusBorderColor="teal.300"
                ref={firstNameInputRef}
                type="text"
                backgroundColor="#fff"
                my={2}
              />
              <Input
                aria-label="Email Newsletter Subscription Email"
                placeholder="example@email.com"
                focusBorderColor="teal.300"
                ref={emailInputRef}
                type="email"
                backgroundColor="#fff"
                my={2}
              />
              <Button
                fontWeight="bold"
                size="md"
                onClick={subscribe}
                colorScheme="teal"
                color="white"
                my={2}
              >
                Join the club
              </Button>
            </InputGroup>
          </Box>
        )}
      </Flex>
    </>
  );
}
