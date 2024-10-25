import type { Metadata } from "next";
import "./globals.css";
import fontDana from "@utils/font";
import Header from "@modules/Header";
// import Script from "next/script";
import Footer from "@modules/Footer";
import ReduxProvider from "@providers/ReduxProvider";
import ElementOnAllPages from "@elements/ElementOnAllPage";
import NextAuthProvider from "@providers/NextAuthProvider";

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
      {/* <Script
        strategy="afterInteractive"
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `  !function(){var i="${process.env.NEXT_PUBLIC_GOFTINO}",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`,
        }}
      /> */}
      <body
        className={`${fontDana.variable} min-h-screen font-dana flex flex-col  max-w-[1500px] mx-auto`}
      >
        <ReduxProvider>
          <NextAuthProvider>
            <Header />
            <div className="p-2">{children}</div>
            <Footer />
            <ElementOnAllPages />
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
