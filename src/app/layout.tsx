import type { Metadata, Viewport } from 'next';
import React from 'react';
import Head from 'next/head';
import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dediro',
  description: 'AI Powered News Curator',
  themeColor: '#343967',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#343967',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} ${poppins.className}`}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero/hero-bg.webp" as="image" />
        <link rel="preload" href="/images/hero/side-hero-images.webp" as="image" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}