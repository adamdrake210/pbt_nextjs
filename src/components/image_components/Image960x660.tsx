import React from 'react';
import { Image, Flex } from '@chakra-ui/core';
import { ImageFlexCenter } from './ImageFlexCenter';

interface Props {
  src: string;
  altText: string;
  imageCategory: string;
}

export const Image960x660: React.FC<Props> = ({
  src,
  altText,
  imageCategory,
}) => {
  return (
    <Flex justifyContent="center" alignItems="center" mt={10}>
      <ImageFlexCenter
        src={src}
        altText={altText}
        imageCategory={imageCategory}
        imageSize="c_scale,h_660,w_960"
        width={728}
      />
    </Flex>
  );
};
