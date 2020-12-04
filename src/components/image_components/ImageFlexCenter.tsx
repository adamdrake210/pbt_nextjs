import React from 'react';
import { Image, Flex } from '@chakra-ui/react';

interface Props {
  src: string;
  altText: string;
  imageSize: string;
  imageCategory: string;
  width: number;
  height?: number;
  marginTop?: number;
}

export const ImageFlexCenter: React.FC<Props> = ({
  src,
  altText,
  imageSize,
  imageCategory,
  width,
  height,
  marginTop,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center" mt={marginTop || 3}>
      <Image
        src={`https://res.cloudinary.com/dg2r37ygd/image/upload/${imageSize}/v1605448126/images/${imageCategory}/${src}.jpg`}
        alt={altText}
        w={width}
        h={height}
        mb={4}
      />
    </Flex>
  );
};
