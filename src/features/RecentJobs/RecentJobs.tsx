"use client";
import { Flex } from "@/components/Flex/Flex";
import React from "react";
import { RecentJobCard } from "./RecentJobCard";
import Image from "next/image";

import { motion } from "framer-motion";

export const RecentJobs = () => {
  return (
    <Flex
      className="flex-col relative min-[1600px]:pt-10 max-lg:mt-8 py-20 z-2 gap-12 lg:gap-20 max-[1280px]:px-[5%] w-full items-center"
      id="projects"
    >
      <Flex className="w-full h-full absolute top-0 z-[0] background-image">
        <Image
          src="/background.png"
          layout="fill"
          objectFit="cover"
          alt="background image"
        />
      </Flex>
      <Flex className="z-[1] max-w-[1200px] max-lg:flex-col lg:gap-[96px] lg:justify-between gap-4 max-lg:items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="248"
          height="26"
          viewBox="0 0 248 26"
          fill="none"
        >
          <path
            d="M247.167 22.4351C247.167 23.9078 245.973 25.1017 244.5 25.1017C243.027 25.1017 241.833 23.9078 241.833 22.4351C241.833 20.9623 243.027 19.7684 244.5 19.7684C245.973 19.7684 247.167 20.9623 247.167 22.4351ZM185.079 22.4351V22.9351C184.933 22.9351 184.795 22.8716 184.7 22.7613L185.079 22.4351ZM166.994 1.43506V0.935059C167.14 0.935059 167.278 0.998488 167.373 1.10878L166.994 1.43506ZM0.3 1.93506C0.223846 1.93506 0 1.7112 0 1.43506C0 1.15892 0.223846 0.935059 0.5 0.935059V1.93506ZM244.5 22.9351H185.079V21.9351H244.5V22.9351ZM184.7 22.7613L166.615 1.76133L167.373 1.10878L185.458 22.1088L184.7 22.7613ZM166.994 1.93506H0.5V0.935059H166.994V1.93506Z"
            fill="url(#paint0_linear_1_398)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_398"
              x1="244.5"
              y1="11.9351"
              x2="55.6152"
              y2="11.9351"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9897FF" />
              <stop offset="1" stopColor="#9897FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <Flex className="flex-col gap-2 items-center max-w-[534px]">
          <h2 className="max-lg:h2 lg:h1 lg:font-[300] text-neutral-10 text-center">
            Recent Jobs
          </h2>
          <p className="text-neutral-60 p12 text-center">
            These are my latest freelance projects. I hope you like it!
          </p>
        </Flex>
        <div className="max-lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="248"
            height="26"
            viewBox="0 0 248 26"
            fill="none"
          >
            <path
              d="M0.833333 22.4351C0.833333 23.9078 2.02724 25.1017 3.5 25.1017C4.97276 25.1017 6.16667 23.9078 6.16667 22.4351C6.16667 20.9623 4.97276 19.7684 3.5 19.7684C2.02724 19.7684 0.833333 20.9623 0.833333 22.4351ZM62.9212 22.4351V22.9351C63.0667 22.9351 63.2051 22.8716 63.3 22.7613L62.9212 22.4351ZM81.0059 1.43506V0.935059C80.8603 0.935059 80.722 0.998488 80.627 1.10878L81.0059 1.43506ZM247.5 1.93506C247.776 1.93506 248 1.7112 248 1.43506C248 1.15892 247.776 0.935059 247.5 0.935059V1.93506ZM3.5 22.9351H62.9212V21.9351H3.5V22.9351ZM63.3 22.7613L81.3848 1.76133L80.627 1.10878L62.5423 22.1088L63.3 22.7613ZM81.0059 1.93506H247.5V0.935059H81.0059V1.93506Z"
              fill="url(#paint0_linear_1_399)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_399"
                x1="3.5"
                y1="11.9351"
                x2="192.385"
                y2="11.9351"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9897FF" />
                <stop offset="1" stopColor="#9897FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Flex>
      <Flex className="z-[1] max-lg:flex-col lg:justify-between lg:gap-20 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Flex className="flex-col lg:gap-20 gap-8">
            <RecentJobCard
              description="Built with Next.js 14 + TailwindCSS."
              title="Avocado Mídia - "
              jobType="INSTITUTIONAL HOME PAGE"
              image="/avocado.png"
              url="https://avocado-site-1.vercel.app/"
            />

            <RecentJobCard
              description="Multitenant app built with Next.js 13 using server-side rendering for SEO + TailwindCSS."
              title="Fretatech - "
              jobType="SERVICE PLATFORM"
              image="/fretatech.png"
              url="https://fretatech-front.vercel.app/"
            />
          </Flex>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Flex className="flex-col lg:gap-40 lg:mt-20 gap-8">
            <RecentJobCard
              description="Built with Next.js 14 + TailwindCSS."
              title="Bernardo Entusiasta - "
              jobType="INSTITUTIONAL LANDING PAGE"
              image="/bernardo.png"
              url="https://bernardo-entusiasta.vercel.app/"
            />
            <RecentJobCard
              description="Built with Next.js 12 + i18n + TailwindCSS."
              title="HRSKINS - "
              jobType="INSTITUTIONAL WEBSITE"
              image="/hrskins.png"
              url="https://hrskins.gg"
            />
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
};
