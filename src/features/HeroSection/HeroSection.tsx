"use client";
import { GetInTouchButton } from "@/components/Button/GetInTouchButton";
import { Flex } from "@/components/Flex/Flex";
import { Header } from "@/components/Header/Header";
import { motion } from "framer-motion";

export const HeroSection = (): JSX.Element => {
  const name = "Matheus";
  const surname = "Torres";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const svgAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Flex className="min-[1600px]:gap-[104px] gap-8 flex-col w-full h-full pb-20 lg:pb-[88px] max-[1280px]:px-[5%]">
      <Header />
      <Flex className="gap-12 min-[1600px]:gap-20 flex-col max-[450px]:max-w-full max-w-[500px] lg:max-w-[785px]">
        <Flex className="gap-1 min-[1600px]:gap-6 flex-col">
          <Flex className="gap-2 flex-col">
            <h5 className="p14 text-neutral-10">&lt;Welcome! /&gt;</h5>
            <h2 className="caps14 text-neutral-40">FULLSTACK DEVELOPER</h2>
          </Flex>
          <Flex className="w-full flex-col display-80 lg:display-120">
            <motion.div variants={container} initial="hidden" animate="visible">
              {name.split("").map((letter, index) => (
                <motion.span key={index} variants={child}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <Flex className="justify-end">
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {surname.split("").map((letter, index) => (
                  <motion.span key={index} variants={child}>
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="relative flex-col gap-8">
          <h3 className="p16 leading-[150%] lg:p18 text-neutral-10">
            I am a professional who transforms design into web pages with
            exceptional speed, quality, and performance, bringing your project
            to life.
          </h3>
          <GetInTouchButton />
        </Flex>
      </Flex>
    </Flex>
  );
};
