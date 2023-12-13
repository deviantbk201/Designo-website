import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#E7816B",
        lightPeach: "#FFAd9b",
        darkPeach: "#d07460",
        lightestPeach: "#FDF3F0",
        black: "#1D1C1E",
        white: "#FFFFFF",
        darkGrey: "#333136",
        lightGrey: "#F1F3F5",
      },
      spacing: {
        "1": "8px",
        "2": "12px",
        "3": "16px",
        "4": "24px",
        "5": "32px",
        "6": "48px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkmode: "class",
  plugins: [nextui()],
};
export default config;
