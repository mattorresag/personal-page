import { Layout } from "@/components/Layout/Layout";
import { About } from "@/features/About/About";
import { HeroSection } from "@/features/HeroSection/HeroSection";
import { RecentJobs } from "@/features/RecentJobs/RecentJobs";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <About />
      <RecentJobs />
    </Layout>
  );
}
