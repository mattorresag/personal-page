import { Flex } from "@/components/Flex/Flex";
import { Footer } from "@/components/Footer/Footer";
import { Layout } from "@/components/Layout/Layout";
import { About } from "@/features/About/About";
import { BuildTogether } from "@/features/BuildTogether/BuildTogether";
import { Carousel } from "@/features/Carousel/Carousel";
import { HeroSection } from "@/features/HeroSection/HeroSection";
import { RecentJobs } from "@/features/RecentJobs/RecentJobs";

export default function Home() {
  return (
    <Layout>
      <Flex className="flex-col w-full items-center max-w-[1200px] ">
        <HeroSection />
        <About />
      </Flex>
      <RecentJobs />
      <BuildTogether />
      <Carousel />
      <Footer />
    </Layout>
  );
}
