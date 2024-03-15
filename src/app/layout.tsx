import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Tá na época?",
  description: "Site para saber se tá na época de frutas, legumes e verduras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="bg-amber-50 min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
