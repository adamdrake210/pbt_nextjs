import React from 'react';
import { Box, Divider } from '@chakra-ui/react';

export const AmazonAdvert: React.FC = () => {
  return (
    <>
      <Divider />
      <Box py={[4]} display={['none', 'none', 'block']}>
        <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=audiblefreetrial&banner=04YSFJHVY8QYH4YVBXG2&f=ifr&linkID=a96c4db3d412a7fc20c06233ff1193ab&t=paperbacktrav-20&tracking_id=paperbacktrav-20"
          width="728"
          height="90"
          scrolling="no"
          // @ts-ignore
          border="0"
          marginWidth={0}
          frameBorder="0"
        ></iframe>
      </Box>
      <Box py={[4]} display={['block', 'block', 'none']} width="100%">
        <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=audiblefreetrial&banner=0YMF8P30ZEBG4A1N9J82&f=ifr&linkID=b7b34d00218177f7e7814dbb5cd2a630&t=paperbacktrav-20&tracking_id=paperbacktrav-20"
          width="300"
          height="250"
          scrolling="no"
          // @ts-ignore
          border="0"
          className="iframe-advert-mobile"
          frameBorder="0"
        ></iframe>
      </Box>
      <Divider />
    </>
  );
};
