import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dediro",
  description: "AI Powered News Curator",
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
        <body>{children}</body>
    </html>
  );
}
