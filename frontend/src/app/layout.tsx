import type { Metadata } from "next";
import { Open_Sans, Titan_One, Varela_Round } from "next/font/google";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DetectMobile from "@/components/DetectMobile";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MobileProvider } from "@/context/mobileContext";
import { ScreenProvider } from "@/context/screenContext";
// @ts-ignore: side-effect import of globals.css is handled by Next.js
import "./globals.css";

const titanOne = Titan_One({
  weight: '400',
  variable: '--font-titanOne',
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const varelaRound = Varela_Round({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tommy Wins - UI/UX Designer",
  description: "Tommy Nguyen's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-darkestBlue`}>
      <body className={`${titanOne.variable} ${inter.className} bg-darkestBlue`}>
        <MobileProvider>
        <ScreenProvider>
          <DetectMobile />
          <NavBar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ScreenProvider>
        </MobileProvider>
      </body>
    </html>
  );
}
