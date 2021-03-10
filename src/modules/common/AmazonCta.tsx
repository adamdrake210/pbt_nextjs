import React from 'react';
import { Button, Image, Link } from '@chakra-ui/react';
import { ga_event } from '@/helpers/gtag';

type Props = {
  link: string;
  bookSummary?: boolean;
};

export const AmazonCta: React.FC<Props> = ({ link, bookSummary }) => {
  const handleAmazonEvent = () => {
    ga_event({
      action: 'amazon_clicks',
      category: 'affiliate',
      label: `${window.location.href} - ${link}`,
    });
  };
  return (
    <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
      <Button
        colorScheme="cyan"
        color="#fff"
        size="lg"
        my={8}
        onClick={handleAmazonEvent}
      >
        Get this book on{' '}
        <Image
          src={`../${bookSummary ? '../' : ''}amazon-white-logo.png`}
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
