import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DailyMood 每日選物 | 每一天，都值得被溫柔對待",
  description: "依照每日心情與生活情境精選商品的療癒系電商品牌。找到剛好適合今天的東西，讓每個心情都被好好照顧。",
  keywords: "每日選物, 心情商品, 療癒系, 生活選物, 個人化推薦",
  openGraph: {
    title: "DailyMood 每日選物",
    description: "每一天，都值得被溫柔對待",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
