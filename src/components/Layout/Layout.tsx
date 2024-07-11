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
      <main className="w-full min-h-full relative overflow-x-hidden overflow-y-auto">
        <Flex className="w-full justify-center items-center">
          <Flex
            className="h-full w-full max-w-[1200px] min-h-[100dvh]"
            direction="col"
          >
            {children}
          </Flex>
        </Flex>
      </main>
    </>
  );
};
