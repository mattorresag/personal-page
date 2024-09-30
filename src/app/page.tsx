import { Flex } from "@/components/Flex/Flex";
import { Footer } from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics/GoogleAnalytics";
import { Layout } from "@/components/Layout/Layout";
import { AnimatedAbout } from "@/features/About/AnimatedAbout";
import { BuildTogether } from "@/features/BuildTogether/BuildTogether";
import { Carousel } from "@/features/Carousel/Carousel";
import { HeroSection } from "@/features/HeroSection/HeroSection";
import dynamic from "next/dynamic";
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
        <Carousel />
        <Footer />
      </Layout>
    </>
  );
}
