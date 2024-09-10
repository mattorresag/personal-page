import React from "react";

export const GetInTouchButton = () => {
  return (
    <a
      href="mailto:matheusftaguiar@gmail.com?subject=Budget a project"
      className="w-fit  bg-opacity-50"
    >
      <button
        className="border-[1px] border-primary-pure bg-primary-pure/30 hover:border-none hover:bg-primary-pure/10 transition ease-in duration-200 h-14 w-[210px] lg:w-[210px]"
        style={{
          clipPath:
            "polygon(5.3% 0, 100% 0, 100% 80%, 94.7% 100%, 0 100%, 0 20%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <p className="text-white font-[700] subheading12 font-figtree tracking-[3px]">
          contact me
        </p>
      </button>
    </a>
  );
};
