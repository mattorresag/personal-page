import { Flex } from "@/components/Flex/Flex";
import Image from "next/image";
import { SkillCard } from "./SkillCard";

export const About = (): JSX.Element => {
  return (
    <Flex className="w-full max-lg:flex-col relative py-40 gap-20 max-[1280px]:px-[5%]">
      <Flex className="h-fit">
        <Image
          src="/circular.png"
          width={96}
          height={107}
          alt="Circular svg"
          quality={100}
          className="animate-spin-slow"
        />
      </Flex>
      <Flex className="flex-col gap-20">
        <Flex className="flex-col gap-6 max-w-[591px]">
          <Flex className="justify-between items-end gap-[60px]">
            <Flex className="flex-col gap-2">
              <p className="h2 text-neutral-10 ">Matheus Torres</p>
              <p className="caps16 text-neutral-40 font-mPlusCodeLatin tracking-[6px] font-[700]">
                FULLSTACK DEVELOPER
              </p>
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
                  <stop stop-color="#9897FF" />
                  <stop offset="1" stop-color="#9897FF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </Flex>
          <p className="p16 text-neutral-60 leading-[150%] font-[300]">
            Sou um Desenvolvedor FullStack com habilidades em ReactJS,
            TypeScript, NextJS e Django, bem como experiência em testes de
            aplicação com Cypress.io e Pytest. Com mais um dois anos de
            experiência no desenvolvimento de aplicações web de alta qualidade,
            eu trago uma paixão pela criação de soluções elegantes e eficazes
            para problemas complexos.
            <br />
            <br />
            <span className="inline-block">
              Com um forte foco na experiência do usuário, estou sempre buscando
              aprender e crescer em minhas habilidades técnicas e colaborar com
              equipes para criar soluções inovadoras e impactantes.
            </span>
          </p>
        </Flex>
        <Flex className="flex-col gap-4">
          <p className="caps16 text-neutral-60 uppercase font-mPlusCodeLatin tracking-[6px] font-[700]">
            &lt;Habilidades em &gt;
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
  );
};
