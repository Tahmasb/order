import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";

const customPlugin: PluginCreator = function ({ addVariant }) {
  addVariant("child", "& > *");
  addVariant("child-hover", "& > *:hover");
  addVariant("child-odd", "& > *:nth-child(odd)");
  addVariant("child-even", "& > *:nth-child(even)");
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dana: ["var(--font-dana)"],
      },
      colors: {
        primary: "#B0041A",
        "primary-hover": "#7b031e",
        "primary-active": "#ff829e",
        "primary-bg": "#ffc1cf",
        secondary: "#D4AF37",
        "secondary-hover": "#d4a237",
        "secondary-active": "#948727",
        "secondary-bg": "#fff4a1",
        success: "#069D82",
        "success-hover": "#058D75",
        "success-active": "#057E68",
        "success-light": "#E6F5F3",
        "success-light-hover": "#DAF0EC",
        "success-light-active": "#B2E1D8",
        "success-dark": "#057662",
        "success-dark-hover": "#045E4E",
        "success-dark-active": "#03473A",

        warning: "#FFC700",
        "warning-hover": "#E6B300",
        "warning-active": "#CC9F00",
        "warning-light": "#FFF9E6",
        "warning-light-hover": "#FFF7D9",
        "warning-light-active": "#FFEEB0",
        "warning-dark": "#BF9500",
        "warning-dark-hover": "#997700",
        "warning-dark-active": "#735A00",

        error: "#D1001F",
        "error-hover": "#BC001C",
        "error-active": "#A70019",
        "error-light": "#FAE6E9",
        "error-light-hover": "#F8D9DD",
        "error-light-active": "#F1B0BA",
        "error-dark": "#9D0017",
        "error-dark-hover": "#7D0013",
        "error-dark-active": "#5E000E",

        background: {
          1: "#001131",
          2: "#E6EAF1",
          3: "#EBEFF5",
        },
        black: {
          1: "#0f1520",
          2: "#535A69",
          3: "#9EA5B2",
        },
      },
    },
  },
  plugins: [customPlugin],
};

export default config;
