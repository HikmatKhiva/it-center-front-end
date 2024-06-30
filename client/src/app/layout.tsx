"use client";
// import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
const comfortaa = Comfortaa({ subsets: ["latin"] });
import "@/assets/css/globals.css";
// import { metaData } from "@/constant";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import Footer from "@/layouts/Footer";
// export const metadata: Metadata = metaData;
// Create a client
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${comfortaa.className} overflow-x-hidden relative`}>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            {children}
            {/* <Footer /> */}
          </NextUIProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  );
}
