import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import type { FC, ReactNode } from 'react';
import { markdownComponents } from '../utils/markdownUtils';
import { openGraph, twitter } from '../utils/seoUtils';
import { Footer } from './Footer';
import type { HeaderProps } from './Header';
import { Header } from './Header';

interface LayoutProps extends HeaderProps {
  pageTitle?: string;
  children: ReactNode;
  noFooter?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, pageTitle, leftMenuToggle, noFooter = false }) => {
  const siteName = 'Shlink — The URL shortener';
  const title = `${siteName}${pageTitle ? ` — ${pageTitle}` : ''}`;
  const description = 'The self-hosted and PHP-based URL shortener application with CLI and REST interfaces';

  return (
    <>
      <NextSeo
        description={description}
        title={title}
        twitter={twitter}
        openGraph={openGraph(title, description, siteName)}
      />

      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#4696e5" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/gif" href="/favicon.gif" />
        <link rel="apple-touch-icon" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="apple-touch-icon" sizes="24x24" href="/icons/icon-24x24.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="40x40" href="/icons/icon-40x40.png" />
        <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="64x64" href="/icons/icon-64x64.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="150x150" href="/icons/icon-150x150.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="160x160" href="/icons/icon-160x160.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="196x196" href="/icons/icon-196x196.png" />
        <link rel="apple-touch-icon" sizes="228x228" href="/icons/icon-228x228.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="310x310" href="/icons/icon-310x310.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="1024x1024" href="/icons/icon-1024x1024.png" />
        <link rel="icon" type="image/png" sizes="1024x1024" href="/icons/icon-1024x1024.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/icons/icon-384x384.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/icons/icon-310x310.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/icons/icon-256x256.png" />
        <link rel="icon" type="image/png" sizes="228x228" href="/icons/icon-228x228.png" />
        <link rel="icon" type="image/png" sizes="196x196" href="/icons/icon-196x196.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/icons/icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="167x167" href="/icons/icon-167x167.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="/icons/icon-160x160.png" />
        <link rel="icon" type="image/png" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="150x150" href="/icons/icon-150x150.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/icons/icon-128x128.png" />
        <link rel="icon" type="image/png" sizes="120x120" href="/icons/icon-120x120.png" />
        <link rel="icon" type="image/png" sizes="114x114" href="/icons/icon-114x114.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="76x76" href="/icons/icon-76x76.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/icons/icon-64x64.png" />
        <link rel="icon" type="image/png" sizes="60x60" href="/icons/icon-60x60.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="40x40" href="/icons/icon-40x40.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="24x24" href="/icons/icon-24x24.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/icons/icon-70x70.png" />
        <meta name="msapplication-square144x144logo" content="/icons/icon-144x144.png" />
        <meta name="msapplication-square150x150logo" content="/icons/icon-150x150.png" />
        <meta name="msapplication-square310x310logo" content="/icons/icon-310x310.png" />
      </Head>

      <Header leftMenuToggle={leftMenuToggle} />
      <MDXProvider components={markdownComponents}>{children}</MDXProvider>
      {!noFooter && <Footer />}
    </>
  );
};
