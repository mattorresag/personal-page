import React from "react";
import { Flex } from "../Flex/Flex";
interface Props {
  children: React.ReactNode;
  subtitle?: string;
  align?: "center" | "start" | "end";
  url?: string;
}
export const Layout = ({ children, align = "center" }: Props): JSX.Element => {
  return (
    <>
      <main className="w-full max-w-[100vw]  min-h-full relative overflow-x-hidden overflow-y-auto">
        <Flex className="w-full justify-center items-center bg-black">
          <Flex
            className="h-full w-full min-h-[100dvh] items-center"
            direction="col"
          >
            {children}
          </Flex>
        </Flex>
      </main>
    </>
  );
};
