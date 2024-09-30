import React from "react";
interface Props {
  children: React.ReactNode;
  subtitle?: string;
  url?: string;
}
export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <main className="flex-col w-full max-w-[100vw]  min-h-full relative overflow-x-hidden overflow-y-auto h-full w-full min-h-[100dvh] items-center  overflow-y-scroll bg-black flex">
        {children}
      </main>
    </>
  );
};
