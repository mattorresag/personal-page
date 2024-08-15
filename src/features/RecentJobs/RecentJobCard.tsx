import { Flex } from "@/components/Flex/Flex";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  description: string;
  jobType: string;
  url: string;
}
export const RecentJobCard = ({
  title,
  image,
  description,
  jobType,
  url,
}: Props): JSX.Element => {
  return (
    <Flex className="flex-col gap-10 max-w-[568px] w-full">
      <Link href={url} target="_blank">
        <Flex className="relative w-full  aspect-[568/664] rounded-[16px] border-[2px] border-[#9897FF]">
          <div className="overflow-hidden inline-block rounded-[16px]">
            <Image
              src={image}
              alt={title}
              width={568}
              height={664}
              objectFit="cover"
              className="hover:scale-[1.05] rounded-[16px]  transition ease-in"
              quality={100}
            />
          </div>
        </Flex>
      </Link>

      <Flex className="flex-col gap-8">
        <p className="text-[1.5rem] lg:text-[2rem] text-neutral-10 leading-[150%] font-[500]">
          {title}
          <span className="font-[300] text-neutral-60">{description}</span>
        </p>
        <Flex className="gap-4 items-center">
          <svg
            width="2"
            height="49"
            viewBox="0 0 2 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="0.435059"
              x2="1"
              y2="48.4351"
              stroke="white"
              strokeOpacity="0.1"
            />
            <line
              x1="1"
              y1="0.435059"
              x2="1"
              y2="48.4351"
              stroke="url(#paint0_linear_1_462)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_462"
                x1="1.5468e-05"
                y1="0.435059"
                x2="-2.6872e-05"
                y2="48.4351"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9897FF" stopOpacity="0" />
                <stop offset="0.5" stopColor="#9897FF" />
                <stop offset="1" stopColor="#9796FE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <p className="text-neutral-40 caps14 lg:caps16">{jobType}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};
