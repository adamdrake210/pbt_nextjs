import React from 'react';
import { Image, Flex } from '@chakra-ui/core';

interface Props {
  src: string;
  altText: string;
  width: number;
  height?: number;
}

export const ImageFlexCenter: React.FC<Props> = ({
  src,
  altText,
  width,
  height,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center" mt={10}>
      <Image
        src={`/images/${src}.jpg`}
        alt={altText}
        w={width}
        h={height}
        mb={4}
      />
    </Flex>
  );
};
