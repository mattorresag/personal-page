import { Flex } from "@/components/Flex/Flex";
import { Footer } from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics/GoogleAnalytics";
import { Layout } from "@/components/Layout/Layout";
import { AnimatedAbout } from "@/features/About/AnimatedAbout";
import { BuildTogether } from "@/features/BuildTogether/BuildTogether";
import { Carousel } from "@/features/Carousel/Carousel";
import { HeroSection } from "@/features/HeroSection/HeroSection";
import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import { Toaster } from "sonner";

const Video = dynamic(
  () => import("@/components/Video/Video").then((mod) => mod.Video),
  { ssr: false }
);

const RecentJobs = dynamic(() =>
  import("@/features/RecentJobs/RecentJobs").then((mod) => mod.RecentJobs)
);

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <Toaster closeButton />
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://matheusftagdev.vercel.app/",
            name: "Matheus Torres - FullStack Dev",
            description:
              "I am Matheus Torres, a FullStack Developer with skills in React, Next.js, Node.js, and more. I am a professional who transforms design into web pages",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://matheusftagdev.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            author: {
              "@type": "Person",
              name: "Matheus Torres",
              url: "https://matheusftagdev.vercel.app/",
            },
          }),
        }}
      />

      <Layout>
        <section
          id="matheus"
          className="flex flex-col w-full items-center relative  h-screen"
        >
          <Flex className="w-full z-[1] max-w-[1200px]">
            <HeroSection />
          </Flex>
          <div className="w-full absolute top-0 min-h-full h-full">
            <Video />
          </div>
          <div className="w-full absolute bottom-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        </section>
        <section className=" flex z-[1] flex-col w-full items-center max-w-[1200px] ">
          <AnimatedAbout />
        </section>
        <RecentJobs />
        <BuildTogether />
        {/* <Carousel /> */}
        <Footer />
      </Layout>
    </>
  );
}
