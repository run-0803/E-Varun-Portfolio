import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // THIS IS THE CRITICAL LIFELINE
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esarapu Varun | AI & Systems Engineer",
  description: "Portfolio of Esarapu Varun, AI Developer and Systems Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}