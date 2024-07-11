import { Flex } from "@/components/Flex/Flex";
import { Header } from "@/components/Header/Header";

export const HeroSection = (): JSX.Element => {
  return (
    <Flex className="gap-[104px] flex-col w-full h-full">
      <Header />
      <Flex className="gap-20 flex-col">
        <Flex className="gap-6 flex-col">
          <Flex className="gap-2 flex-col">
            <h5 className="p14 text-neutral-10">&lt;Olá! boas vindas &gt;</h5>
            <h5 className="caps14 text-neutral-40">FULLSTACK DEVELOPER</h5>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
