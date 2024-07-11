import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        mPlusCodeLatin: ["M PLUS Code Latin", "monospace"],
      },
      colors: {
        neutral: {
          10: "#E8E8EA",
          40: "#8D8B9D",
          60: "#B6B4C0",
        },
        primary: {
          pure: "#4341E1",
          10: "#A594FD",
          20: "rgb(165, 148, 253,0.2)",
        },
      },
      borderRadius: {
        md: "0.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
