import React from 'react';
import { Button, Image, Link } from '@chakra-ui/core';

type Props = {
  link: string;
  bookSummary?: boolean;
};

export const AmazonCta: React.FC<Props> = ({ link, bookSummary }) => {
  return (
    <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
      {/* <Button colorScheme="blue" size="lg" mt={4}>
        Get this book on{' '}
        <Image
          src={`../${bookSummary ? '../' : ''}amazon-white-logo.png`}
          alt="Amazon Logo"
          w={105}
          h={25}
          ml="7px"
          mt="12px"
        />
      </Button> */}
    </Link>
  );
};
