import React from 'react';
import { Button, Image, Link } from '@chakra-ui/core';

type Props = {
  link: string;
};

export const AmazonCta: React.FC<Props> = ({ link }) => {
  return (
    <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
      <Button variantColor="cyan" size="lg" mt={4} _hover={{ bg: 'cyan.400' }}>
        Get this book on{' '}
        <Image
          src="../amazon-white-logo.png"
          alt="Amazon Logo"
          w={105}
          h={25}
          ml="7px"
          mt="12px"
        />
      </Button>
    </Link>
  );
};
