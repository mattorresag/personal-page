import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Torres | FullStack Developer",
  description:
    "I am Matheus Torres, a FullStack Developer with skills in React, Next.js, Node.js, and more. I am a professional who transforms design into web pages with exceptional speed, quality, and performance.",
  openGraph: {
    title: "Matheus Torres | FullStack Developer",
    description:
      "FullStack Developer specializing in React, Next.js, Node.js, and more.",
    type: "website",
    url: "https://matheusftagdev.vercel.app/",
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
        <link rel="canonical" href="https://matheusftagdev.vercel.app/" />
      </Head>
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
