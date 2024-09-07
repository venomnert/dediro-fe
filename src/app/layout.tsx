import type { Metadata } from 'next';
import React from 'react';
import Head from 'next/head';
import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600'],
});

export const metadata: Metadata = {
  title: 'Dediro',
  description: 'AI Powered News Curator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className={`${montserrat.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
