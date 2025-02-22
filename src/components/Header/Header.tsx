"use client";
import Link from "next/link";
import { Flex } from "../Flex/Flex";
import { toast } from "sonner";

export const Header = (): JSX.Element => {
  const copyEmail = async () => {
    if (navigator) {
      await navigator.clipboard.writeText("matheusftaguiar@gmail.com");
      toast.success("Email copied to clipboard");
    }
  };
  return (
    <Flex className="items-center justify-between pt-8 w-full">
      <nav className="flex bg-white/5 px-5 rounded-md gap-8 items-center h4 text-neutral-10 h-12 hidden lg:flex">
        <Link href="/">
          <p>Matheus Torres</p>
        </Link>
        <Link href="/#projects">
          <p>Projects</p>
        </Link>
        <Link href="/#contact">
          <p>Contact</p>
        </Link>
        <Link target="_blank" href="https://github.com/mattorresag">
          GitHub
        </Link>
      </nav>
      <button
        onClick={() => {
          copyEmail();
        }}
        className="flex justify-between py-2 px-5 backdrop-blur-[4px] bg-white/5 items-center gap-2 rounded-[22px] h-11 lg:h-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clipPath="url(#clip0_1_69)">
            <path
              d="M5.25 7.25025C5.25 6.71975 5.46074 6.21098 5.83586 5.83586C6.21098 5.46074 6.71975 5.25 7.25025 5.25H13.7498C14.0124 5.25 14.2725 5.30174 14.5152 5.40226C14.7579 5.50278 14.9784 5.65012 15.1641 5.83586C15.3499 6.0216 15.4972 6.24211 15.5977 6.48479C15.6983 6.72747 15.75 6.98757 15.75 7.25025V13.7498C15.75 14.0124 15.6983 14.2725 15.5977 14.5152C15.4972 14.7579 15.3499 14.9784 15.1641 15.1641C14.9784 15.3499 14.7579 15.4972 14.5152 15.5977C14.2725 15.6983 14.0124 15.75 13.7498 15.75H7.25025C6.98757 15.75 6.72747 15.6983 6.48479 15.5977C6.24211 15.4972 6.0216 15.3499 5.83586 15.1641C5.65012 14.9784 5.50278 14.7579 5.40226 14.5152C5.30174 14.2725 5.25 14.0124 5.25 13.7498V7.25025Z"
              stroke="#8D8B9D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.009 12.5527C2.77901 12.4216 2.5877 12.2321 2.45443 12.0034C2.32116 11.7746 2.25064 11.5147 2.25 11.25V3.75C2.25 2.925 2.925 2.25 3.75 2.25H11.25C11.8125 2.25 12.1185 2.53875 12.375 3"
              stroke="#8D8B9D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_69">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="h4">Click to copy my email</p>
      </button>
    </Flex>
  );
};
