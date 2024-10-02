import { Flex } from "@/components/Flex/Flex";
import { Header } from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";
import { NextPage } from "next";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <Layout>
      <Flex className="w-full z-[1] max-w-[1200px]">
        <Header />
      </Flex>
      <Flex className="w-full h-full items-center justify-center">
        <h1 className="text-neutral-10 text-center h1">Page not found</h1>
      </Flex>
    </Layout>
  );
};

export default NotFound;
