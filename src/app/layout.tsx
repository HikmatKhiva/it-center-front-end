import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
const comfortaa = Comfortaa({ subsets: ["latin"] });
import "@/assets/css/globals.css";
import MainHeader from "@/layouts/MainHeader";
import { metaData } from "@/constant";
import Footer from "@/layouts/Footer";
export const metadata: Metadata = metaData;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${comfortaa.className} overflow-x-hidden relative`}>
        <NextUIProvider>
          <MainHeader />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
