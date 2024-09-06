import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Torres | FullStack Developer",
  description:
    "FullStack Developer with skills in React, Next.js, Node.js, and more. I am a professional who transforms design into web pages with exceptional speed, quality, and performance, bringing your project to life. Contact me for a free consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
