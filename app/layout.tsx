import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Esarapu Varun | Portfolio",
  description: "Professional portfolio showcasing AI, Machine Learning, and Backend Development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        {/* flex-grow ensures the main content pushes the footer to the bottom */}
        <main className="flex-grow pt-16"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}