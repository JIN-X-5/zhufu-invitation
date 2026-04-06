import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_TC } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-serif-tc",
  subsets: ["latin"], // Noto Serif TC subsetting is handled differently by Next.js, but this aligns with the google font loader
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "苧芙喜帖工作坊 | ZHŪ FÙ Wedding Design",
  description: "現代簡約、有溫度的喜帖、書約與婚禮小物設計。致力於紙張美學與婚禮儀式的感官體現。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${cormorant.variable} ${notoSerifTC.variable} antialiased`}
    >
      <body className="bg-[#FDFBF7] text-[#333333] font-sans font-light leading-relaxed">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
