import React from "react";
import { Flex } from "../Flex/Flex";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t-[1px] border-white/10 flex max-lg:flex-col py-16 max-lg:px-[5%] w-full items-center justify-center">
      <Flex className="max-lg:flex-col w-full max-w-[1200px] lg:justify-between lg:items-center gap-10">
        <p className="h4 text-neutral-60">© 2024 Matheus Torres</p>
        <h5 className="text-[2.25rem] lg:text-[2.5rem] text-neutral-10 font-[300]">
          MATHEUS TORRES
        </h5>
        <Flex className="lg:items-center gap-4 max-lg:flex-col">
          <p className="h4 text-neutral-60">Acompanhe nas redes</p>
          <Link
            href="https://www.linkedin.com/in/matheusftaguiar/"
            target="_blank"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.14146"
                y="1.14146"
                width="45.7171"
                height="45.7171"
                rx="22.8585"
                stroke="white"
                stroke-opacity="0.1"
                stroke-width="2.28292"
              />
              <path
                d="M18 22.5002V30.0002"
                stroke="#A594FD"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 18V18.015"
                stroke="#A594FD"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 30.0002V22.5002"
                stroke="#A594FD"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 30.0002V25.5002C30 24.7046 29.6839 23.9415 29.1213 23.3789C28.5587 22.8163 27.7956 22.5002 27 22.5002C26.2044 22.5002 25.4413 22.8163 24.8787 23.3789C24.3161 23.9415 24 24.7046 24 25.5002"
                stroke="#A594FD"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
};
