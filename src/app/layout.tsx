import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://matheusftagdev.vercel.app`),
  title: "Matheus Torres - FullStack Dev",
  description:
    "I am Matheus Torres, a FullStack Developer with skills in React, Next.js, Node.js, and more. I am a professional who transforms design into web pages.",
  openGraph: {
    title: "Matheus Torres - FullStack Dev",
    description:
      "I am Matheus Torres, a FullStack Developer with skills in React, Next.js, Node.js, and more. I am a professional who transforms design into web pages.",
    type: "website",
    url: "https://matheusftagdev.vercel.app/",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
