import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CGSTVSN",
  description: "Front-end developer and designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`bg-zinc-100 ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
