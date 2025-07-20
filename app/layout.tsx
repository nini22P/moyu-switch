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
  title: "《樱花、萌放。-as the Night's, Reincarnation-》Nintendo Switch 简体中文汉化补丁",
  description: "《樱花、萌放。-as the Night's, Reincarnation-》Nintendo Switch 简体中文汉化补丁",
  keywords: "樱花、萌放。, 汉化, 补丁, Nintendo Switch, 简体中文, 摸鱼, 漆原雪人, FAVORITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
