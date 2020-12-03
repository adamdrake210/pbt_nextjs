// import App from 'next/app'
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  ChakraProvider,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from '@chakra-ui/react';
import theme from '../styles/theme';
import MDXComponents from '../components/MDXComponents.tsx';

// const GlobalStyle = ({ children }) => {
//   const { colorMode } = useColorMode();

//   return (
//     <>
//       <CSSReset />
//       <Global
//         styles={css`
//           ::selection {
//             background-color: #47a3f3;
//             color: #fefefe;
//           }

//           html {
//             min-width: 360px;
//             scroll-behavior: smooth;
//           }

//           #__next {
//             display: flex;
//             flex-direction: column;
//             min-height: 100vh;
//             background: white;
//           }
//           .iframe-advert-mobile {
//             margin: 0 auto;
//           }
//         `}
//       />
//       {children}
//     </>
//   );
// };

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
