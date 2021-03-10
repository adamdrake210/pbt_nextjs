// import App from 'next/app'
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import MDXComponents from '@/modules/common/MDXComponents.tsx';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MDXProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async ({ appContext }) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
