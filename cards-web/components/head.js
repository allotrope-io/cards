import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';
const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';
const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || 'Cram Cards'}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    {/* FirebaseUI sign-in  */}
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.4.0/firebase-ui-auth.css" />
    {/* PWA Metadata */}
    <meta name='application-name' content='Cram Cards' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    <meta name='apple-mobile-web-app-title' content='Cram Cards' />
    <meta name='description' content='Learning through spaced repetition has never been easier.' />
    <meta name='format-detection' content='telephone=no' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
    <meta name='msapplication-TileColor' content='#2B5797' />
    <meta name='msapplication-tap-highlight' content='no' />
    <meta name='theme-color' content='#6272E8' />
    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

    <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
    <link rel='manifest' href='/static/manifest.json' />
    <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
    <link rel='shortcut icon' href='/static/icons/favicon.ico' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

    <meta name='twitter:card' content='summary' />
    <meta name='twitter:url' content='https://cram.cards' />
    <meta name='twitter:title' content='Cram Cards' />
    <meta name='twitter:description' content='Learning through spaced repetition has never been easier.' />
    <meta name='twitter:image' content='https://cram.cards/public/icons/android-chrome-192x192.png' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='Cram Cards' />
    <meta property='og:description' content='Learning through spaced repetition has never been easier.' />
    <meta property='og:site_name' content='Cram Cards' />
    <meta property='og:url' content='https://cram.cards' />
    <meta property='og:image' content='https://cram.cards/static/icons/apple-touch-icon.png' />
  </NextHead>
);
Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};
export default Head;