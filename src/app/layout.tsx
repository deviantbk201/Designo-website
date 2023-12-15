import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import AppHeader from "./components/AppHeader";
import Providers from "@/app/providers/Providers";
import AppFooter from "./components/AppFooter";
const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designo ",
  description: "We create websites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="lg:text-[100%] md:text-[75%] text-[62.5%]  ">
      <body className={jost.className}>
        <Providers>
          <div className="container grid grid-rows-[6rem_auto] mx-auto px-4 max-w-6xl pb-48">
            <AppHeader />
            {children}
          </div>
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
