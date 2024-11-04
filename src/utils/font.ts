import localFont from "next/font/local";

const fontDana = localFont({
  src: [
    {
      path: "../../public/fonts/DanaFaNum-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/DanaFaNum-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/DanaFaNum-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/DanaFaNum-DemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/DanaFaNum-Bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-dana",
});

export default fontDana;
