import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/context/providers";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import ContactModal from "./_components/modals/ContactModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CGSTVSN",
  description:
    "Cameron is a front-end developer and designer based in the US. He has a background in graphic design as well as a wide variety of skills in other creative fields.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`bg-white text-zinc-800 ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ContactModal />
        </Providers>
      </body>
    </html>
  );
}
