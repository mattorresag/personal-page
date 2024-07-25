"use client";
import { Flex } from "@/components/Flex/Flex";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <Flex className="py-20 justify-center items-center w-full">
      <Flex
        className="w-full embla overflow-hidden cursor-pointer"
        ref={emblaRef}
      >
        <Flex className="w-full justify-center">
          <Flex className="gap-8 justify-center">
            <p className="display-80 text-[#cdc6f6]/20 select-none">
              matheusftaguiar@gmail.com
            </p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
