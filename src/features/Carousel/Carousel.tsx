"use client";
import { Flex } from "@/components/Flex/Flex";
import React from "react";

export const Carousel = () => {
  return (
    <Flex className="py-20 justify-center items-center w-full">
      <Flex className="w-full overflow-hidden cursor-pointer">
        <Flex className="w-full justify-center">
          <Flex className="gap-8 justify-center">
            <p className="max-lg:text-[1.8rem] display-80 text-[#cdc6f6]/20 select-none">
              matheusftaguiar@gmail.com
            </p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
