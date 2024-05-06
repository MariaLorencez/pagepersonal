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
        tertiary: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#eaeaea",
          300: "#d2d2d2",
          400: "#bababa",
          500: "#a2a2a2",
          600: "#8a8a8a",
          700: "#727272",
          800: "#5a5a5a",
          900: "#424242",
          DEFAULT: "#a2a2a2",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          layout: {
            
          },
          colors: {
            background: "#FFFFFF",
            foreground: "#232323",
            focus: "#be9a55",
            primary: {
              50: "#f7f0e3",
              100: "#f6f2ea",
              200: "#e5d9c3",
              300: "#948b79",
              400: "#a4895c",
              500: "#b1914e",
              600: "#987f36",
              700: "#816d2f",
              800: "#615845",
              900: "#504730",
              DEFAULT: "#b1914e",
            },
            secondary: {
              50: "#f2f4f7",
              100: "#e6e9ef",
              200: "#bfc5d8",
              300: "#99a2c0",
              400: "#727ea9",
              500: "#4b5a92",
              600: "#394875",
              700: "#2d3858",
              800: "#212740",
              900: "#1b2033",
              DEFAULT: "#212740",
            },
            danger: {
              50: "#fce4e4",
              100: "#f9c1c1",
              200: "#f69d9d",
              300: "#f37878",
              400: "#f05454",
              500: "#ed3030",
              600: "#c82828",
              700: "#a32020",
              800: "#7d1919",
              900: "#661313",
              DEFAULT: "#ed3030",
            },
            warning: {
              50: "#fff9e0",
              100: "#fff1c2",
              200: "#ffe999",
              300: "#ffe070",
              400: "#ffd747",
              500: "#ffcf1f",
              600: "#e6b61b",
              700: "#cc9d17",
              800: "#b38413",
              900: "#996c10",
              DEFAULT: "#ffcf1f",
            },
            success: {
              50: "#e8f5e8",
              100: "#c8e6c9",
              200: "#a8d7aa",
              300: "#88c88b",
              400: "#68b96c",
              500: "#48aa4d",
              600: "#3e9442",
              700: "#347e37",
              800: "#2a682c",
              900: "#205224",
              DEFAULT: "#48aa4d",
            },
          },
        },
      },
    }),
  ],
};
export default config;
