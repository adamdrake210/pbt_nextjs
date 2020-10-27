import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../helpers/gtag';

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {' '}
          {/* Global Site Tag (gtag.js) - Google Analytics */}{' '}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />{' '}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;600&display=swap"
            rel="stylesheet"
          />
          {/* <script
            data-ad-client="ca-pub-4832083031662579"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script> */}
        </Head>{' '}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
