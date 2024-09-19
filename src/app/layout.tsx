import type { Metadata } from "next";
import "./globals.css";
import fontDana from "@utils/font";
import Header from "@modules/Header";

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
      <body className={`${fontDana.variable} font-dana`}>
        <Header />
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
