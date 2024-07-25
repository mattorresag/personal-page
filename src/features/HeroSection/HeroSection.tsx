import { GetInTouchButton } from "@/components/Button/GetInTouchButton";
import { Flex } from "@/components/Flex/Flex";
import { Header } from "@/components/Header/Header";

export const HeroSection = (): JSX.Element => {
  return (
    <Flex className="gap-[104px] flex-col w-full h-full pb-20 lg:pb-[88px] max-[1280px]:px-[5%]">
      <Header />
      <Flex className="gap-20 flex-col max-[450px]:max-w-full max-w-[500px] lg:max-w-[785px]">
        <Flex className="gap-6 flex-col">
          <Flex className="gap-2 flex-col">
            <h5 className="p14 text-neutral-10">&lt;Olá! boas vindas &gt;</h5>
            <h2 className="caps14 text-neutral-40">FULLSTACK DEVELOPER</h2>
          </Flex>
          <Flex className="w-full flex-col display-80 lg:display-120">
            <h1>Matheus</h1>
            <Flex className="w-full items-center justify-end relative">
              <div className="absolute left-0 hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="290"
                  height="25"
                  viewBox="0 0 290 25"
                  fill="none"
                >
                  <path
                    d="M289.667 22C289.667 23.4728 288.473 24.6667 287 24.6667C285.527 24.6667 284.333 23.4728 284.333 22C284.333 20.5272 285.527 19.3333 287 19.3333C288.473 19.3333 289.667 20.5272 289.667 22ZM217.351 22V22.5C217.257 22.5 217.166 22.474 217.087 22.4249L217.351 22ZM183.5 1V0.5C183.593 0.5 183.684 0.526017 183.764 0.57512L183.5 1ZM1 1.5C0.723846 1.5 0.5 1.27614 0.5 1C0.5 0.723858 0.723846 0.5 1 0.5V1.5ZM287 22.5H217.351V21.5H287V22.5ZM217.087 22.4249L183.236 1.42488L183.764 0.57512L217.614 21.5751L217.087 22.4249ZM183.5 1.5H1V0.5H183.5V1.5Z"
                    fill="url(#paint0_linear_1_86)"
                    style={{
                      animation: "lightning 4s linear infinite",
                      stroke: "url(#paint0_linear_1_86)",
                      strokeWidth: "1",
                      strokeDasharray: "290",
                      strokeDashoffset: "290",
                    }}
                  />

                  <defs>
                    <linearGradient
                      id="paint0_linear_1_86"
                      x1="287"
                      y1="11.5"
                      x2="65.6023"
                      y2="11.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9897FF" />
                      <stop offset="1" stop-color="#9897FF" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute left-0 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="13"
                  viewBox="0 0 90 13"
                  fill="none"
                >
                  <path
                    d="M89.6667 10C89.6667 11.4728 88.4728 12.6667 87 12.6667C85.5272 12.6667 84.3333 11.4728 84.3333 10C84.3333 8.52724 85.5272 7.33333 87 7.33333C88.4728 7.33333 89.6667 8.52724 89.6667 10ZM66.0248 10V10.5C65.9462 10.5 65.8687 10.4815 65.7986 10.4459L66.0248 10ZM48.285 1V0.5C48.3636 0.5 48.4411 0.518536 48.5112 0.554102L48.285 1ZM0 1.5C-0.276146 1.5 -0.5 1.27614 -0.5 1C-0.5 0.723858 -0.276146 0.5 0 0.5V1.5ZM87 10.5H66.0248V9.5H87V10.5ZM65.7986 10.4459L48.0588 1.4459L48.5112 0.554102L66.251 9.5541L65.7986 10.4459ZM48.285 1.5H0V0.5H48.285V1.5Z"
                    fill="url(#paint0_linear_41_84)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_41_84"
                      x1="87"
                      y1="-1.8125"
                      x2="20.3252"
                      y2="-1.8125"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9897FF" />
                      <stop offset="1" stop-color="#9897FF" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-end">Torres.</span>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="flex-col gap-8">
          <h3 className="p16 leading-[150%] lg:p18 text-neutral-10">
            Sou um profissional que transforma o design em páginas web com
            velocidade, qualidade e desempenho excepcionais, dando vida ao seu
            projeto.
          </h3>
          <GetInTouchButton />
        </Flex>
      </Flex>
    </Flex>
  );
};
