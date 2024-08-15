import { Flex } from "@/components/Flex/Flex";
import Image from "next/image";
import { SkillCard } from "./SkillCard";

export const About = (): JSX.Element => {
  return (
    <Flex className="w-full max-lg:flex-col-reverse relative lg:py-40 gap-20 justify-center w-screen">
      <Flex className="absolute right-0 z-[0] opacity-10">
        <Image
          src="/about-bg.png"
          width={705}
          height={649}
          alt="About background"
          quality={100}
        />
      </Flex>
      <Flex className="z-[1] max-w-[1200px] w-full max-lg:flex-col max-[1280px]:px-[5%] gap-20">
        <Flex className="h-fit">
          <img
            src="/circular.png"
            width={96}
            height={107}
            alt="Circular svg"
            className="animate-spin-slow"
          />
        </Flex>
        <Flex className="flex-col gap-20">
          <Flex className="flex-col gap-6 max-w-[591px]">
            <Flex className="max-lg:flex-col lg:justify-between lg:items-end gap-5 lg:gap-[60px]">
              <Flex className="items-center gap-4">
                <svg
                  width="1"
                  height="63"
                  viewBox="0 0 1 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18556e-08"
                    x2="0.499997"
                    y2="63"
                    stroke="white"
                    strokeOpacity="0.1"
                  />
                  <line
                    x1="0.5"
                    y1="2.18556e-08"
                    x2="0.499997"
                    y2="63"
                    stroke="url(#paint0_linear_41_102)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_41_102"
                      x1="-0.499988"
                      y1="6.82969e-09"
                      x2="-0.50006"
                      y2="63"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9897FF" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#9897FF" />
                      <stop offset="1" stopColor="#9796FE" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <Flex className="flex-col gap-2 ">
                  <p className="h2 text-neutral-10 ">Matheus Torres</p>
                  <p className="caps16 text-neutral-40 text-nowrap font-mPlusCodeLatin tracking-[6px] font-[700]">
                    FULLSTACK DEVELOPER
                  </p>
                </Flex>
              </Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="249"
                height="25"
                viewBox="0 0 249 25"
                className="mb-2"
                fill="none"
              >
                <path
                  d="M0.149373 21.765C0.149373 23.2377 1.34328 24.4316 2.81604 24.4316C4.2888 24.4316 5.48271 23.2377 5.48271 21.765C5.48271 20.2922 4.2888 19.0983 2.81604 19.0983C1.34328 19.0983 0.149373 20.2922 0.149373 21.765ZM62.4401 21.765V22.265C62.5857 22.265 62.724 22.2015 62.819 22.0912L62.4401 21.765ZM80.5866 0.693237V0.193237C80.4411 0.193237 80.3027 0.256666 80.2077 0.366962L80.5866 0.693237ZM247.649 1.19324C247.925 1.19324 248.149 0.96938 248.149 0.693237C248.149 0.417095 247.925 0.193237 247.649 0.193237V1.19324ZM2.81604 22.265H62.4401V21.265H2.81604V22.265ZM62.819 22.0912L80.9655 1.01951L80.2077 0.366962L62.0613 21.4387L62.819 22.0912ZM80.5866 1.19324H247.649V0.193237H80.5866V1.19324Z"
                  fill="url(#paint0_linear_1_387)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_387"
                    x1="2.81604"
                    y1="11.2291"
                    x2="192.346"
                    y2="11.2291"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9897FF" />
                    <stop offset="1" stopColor="#9897FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </Flex>
            <p className="p12 lg:p16 text-neutral-60 leading-[150%] font-[300]">
              I am a FullStack Developer with skills in ReactJS, TypeScript,
              NextJS, NestJS, and Django, as well as experience in application
              testing with Cypress.io and Pytest. With over three years of
              experience in developing high-quality web applications, I bring a
              passion for creating elegant and effective solutions to complex
              problems.
              <br />
              <br />
              <span className="inline-block">
                With a strong focus on user experience, I am always seeking to
                learn and grow in my technical skills and collaborate with teams
                to create innovative and impactful solutions.
              </span>
            </p>
          </Flex>
          <Flex className="flex-col gap-4">
            <p className="caps16 text-neutral-60 uppercase font-mPlusCodeLatin tracking-[6px] font-[700]">
              &lt;Skills &gt;
            </p>
            <Flex className="items-center gap-6 flex-wrap max-lg:justify-between">
              <SkillCard text="NextJs" />
              <SkillCard text="React" />
              <SkillCard text="TypeScript" />
              <SkillCard text="NestJS" />
              <SkillCard text="Django" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
