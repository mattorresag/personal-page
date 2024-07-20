import { Layout } from "@/components/Layout/Layout";
import { About } from "@/features/About/About";
import { BuildTogether } from "@/features/BuildTogether/BuildTogether";
import { Carousel } from "@/features/Carousel/Carousel";
import { HeroSection } from "@/features/HeroSection/HeroSection";
import { RecentJobs } from "@/features/RecentJobs/RecentJobs";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <About />
      <RecentJobs />
      <BuildTogether />
      <Carousel />
    </Layout>
  );
}
