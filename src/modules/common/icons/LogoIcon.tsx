import { Icon } from '@chakra-ui/react';
import React from 'react';

export default function LogoIcon({ boxSize }) {
  return (
    <Icon viewBox="0 0 128 128" boxSize={boxSize}>
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="128" height="128" fill="#0BC5EA" />
        <rect
          x="76"
          y="17.6992"
          width="25"
          height="88"
          rx="3"
          transform="rotate(-12.9305 76 17.6992)"
          fill="#3FA34D"
        />
        <rect x="13" y="15" width="25" height="88" rx="3" fill="#EAE6E5" />
        <rect x="47" y="15" width="25" height="88" rx="3" fill="#8F8073" />
        <rect x="13" y="106" width="106" height="7" rx="2" fill="#545454" />
      </svg>
    </Icon>
  );
}
