import { GetInTouchButton } from "@/components/Button/GetInTouchButton";
import { Flex } from "@/components/Flex/Flex";
import React from "react";

export const BuildTogether = () => {
  return (
    <Flex className="flex-col  gap-12 lg:gap-20" id="contact">
      <Flex className="max-lg:flex-col lg:hidden justify-center gap-5 max-lg:items-center mt-20">
        <Flex className="flex-col gap-2 items-center max-w-[534px] gap-8">
          <h2 className="h3 lg:h1 text-neutral-10 text-center">
            Vamos iniciar um <br /> projeto juntos?
          </h2>
          <GetInTouchButton />
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
                <stop stop-color="#9897FF" />
                <stop offset="1" stop-color="#9897FF" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Flex>
      <Flex className="max-lg:flex-col max-lg:hidden justify-center gap-5 max-lg:items-center mt-10">
        <Flex
          className="flex-col relative gap-2 items-center w-screen h-[308px] gap-8 mt-10"
          style={{
            backgroundImage: "url(/start_project.png)",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-[60px]">
            <GetInTouchButton />
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
