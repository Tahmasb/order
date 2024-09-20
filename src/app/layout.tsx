import type { Metadata } from "next";
import "./globals.css";
import fontDana from "@utils/font";
import Header from "@modules/Header";
import Script from "next/script";
import Footer from "@modules/Footer";

export const metadata: Metadata = {
  title: "سفارش تابلو",
  description: "سفارش تابلو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Script
        strategy="afterInteractive"
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `  !function(){var i="${process.env.NEXT_PUBLIC_GOFTINO}",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`,
        }}
      />
      <body className={`${fontDana.variable} font-dana`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
