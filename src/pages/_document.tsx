import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../helpers/gtag';

export default class extends Document {
  render() {
    return (
      <html lang="en">
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
        </Head>{' '}
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
