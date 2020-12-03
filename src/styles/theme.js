import React from 'react';
import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const customIcons = {
  hamburger: {
    path: (
      <path
        fill="currentColor"
        strokeWidth="0"
        d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"
      />
    ),
  },
};

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '63em',
  xl: '80em',
});

const theme = extendTheme({
  ...chakraTheme,
  breakpoints,
  fonts: {
    heading: '"Eczar", sans-serif',
    body: '"Raleway", sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  icons: {
    ...chakraTheme.icons,
    ...customIcons,
  },
});

export default theme;
