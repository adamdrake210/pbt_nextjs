import React from 'react';
import { Heading, Text, Box, Divider } from '@chakra-ui/core';
import EmailSubscription from './EmailSubscription';

export const About: React.FC = () => {
  return (
    <Box p={[4, 8]}>
      <Heading as="h1" size="2xl" mb={4}>
        About Us
      </Heading>
      <Text mb={4}>
        Paperback Travels is a celebration of non-fiction books and their power
        to educate, inspire and challenge their readers.
      </Text>
      <Text mb={4}>
        We hope you will come back regularly to read summaries of many great
        books as well as in-depth articles and interviews with interesting
        people who love reading (almost) as much as we do.
      </Text>
      <Text mb={4}>
        If you have any feedback about the books and people featured on the
        site, or if you just want to say hi, we would love to hear from you.
        Please get in touch via info@paperbacktravels.com. You can also make our
        day by signing up for our sporadic newsletter using the form below.

      </Text>
      <Text>Happy reading!</Text>
      <Divider />
      <EmailSubscription />
    </Box>
  );
};
