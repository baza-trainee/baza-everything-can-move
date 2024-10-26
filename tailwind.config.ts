import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      smallMobile: "320px",
      // => @media (min-width: 320px) { ... }
      mobile: "375px",
      // => @media (min-width: 375px) { ... }
      tablet: "744px",
      // => @media (min-width: 744px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
export default config;
