import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spideyFont: "var(--font-spidey)",
        amazing: "var(--font-amazing)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        sm: "0 1px 3px var(--tw-shadow-color)",
        DEFAULT: "-2px 2px var(--tw-shadow-color)",
        lg: "0 8px 8px var(--tw-shadow-color)",
        withOutlineSm:
          "1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000,1px -1px 0 #000, -1px 1px var(--tw-shadow-color)",
        withOutline:
          "1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000,1px -1px 0 #000, -2px 2px var(--tw-shadow-color)",
        withOutlineLg:
          "1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000,1px -1px 0 #000, -3px 3px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;
