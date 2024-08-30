import { Flex } from "@/components/Flex/Flex";
import { Footer } from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics/GoogleAnalytics";
import { Layout } from "@/components/Layout/Layout";
import { Video } from "@/components/Video/Video";
import { AnimatedAbout } from "@/features/About/AnimatedAbout";
import { BuildTogether } from "@/features/BuildTogether/BuildTogether";
import { Carousel } from "@/features/Carousel/Carousel";
import { HeroSection } from "@/features/HeroSection/HeroSection";
import { RecentJobs } from "@/features/RecentJobs/RecentJobs";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <Toaster closeButton />
      <Layout>
        <Flex id="#matheus" className="flex-col w-full items-center relative">
          <Flex className="flex-col w-full relative items-center  ">
            {/* <div className="w-full absolute top-0 min-h-full h-full">
              <Video />
            </div>
            <div className="w-full absolute bottom-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none"></div> */}
            <Flex className="w-full z-[1] max-w-[1200px]">
              <HeroSection />
            </Flex>
          </Flex>
          <Flex className="z-[1] flex-col w-full items-center max-w-[1200px] ">
            <AnimatedAbout />
          </Flex>
        </Flex>
        <RecentJobs />
        <BuildTogether />
        <Carousel />
        <Footer />
      </Layout>
    </>
  );
}
