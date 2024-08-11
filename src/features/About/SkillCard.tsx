import { Flex } from "@/components/Flex/Flex";

interface Props {
  text: string;
}
export const SkillCard = ({ text }: Props): JSX.Element => {
  return (
    <Flex className="relative select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="56"
        viewBox="0 0 140 56"
        fill="none"
      >
        <path
          d="M119.769 55.37H4.36938V54.37H119.359L138.919 34.8V0H139.919V35.22L119.769 55.37Z"
          fill="#A594FD"
          fill-opacity="0.2"
        />
        <path
          d="M1.64941 32.62H0.649414V22.21L5.71942 17.14H115.009V18.14H6.12939L1.64941 22.63V32.62Z"
          fill="#A594FD"
          fill-opacity="0.2"
        />
      </svg>
      <p className="absolute bottom-[10px] lg:bottom-[6px] left-[17px] lg:text-primary-10 text-primary-10 h4 lg:h3">
        {text}
      </p>
    </Flex>
  );
};
