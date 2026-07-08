import type { Metadata } from "next";
import { Open_Sans, Titan_One, Varela_Round, Bitcount_Prop_Single, Racing_Sans_One, DM_Sans } from "next/font/google";
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
import { ThemeProvider } from "@/context/themeContext";
import ThemeToggle from "@/components/ThemeToggle";

const titanOne = Titan_One({
  weight: '400',
  variable: '--font-titanOne',
  subsets: ["latin"],
});

const racingSans = Racing_Sans_One({
  weight: '400',
  variable: '--font-racingSansOne',
  subsets: ["latin"],
})

const bitCountPropSingle = Bitcount_Prop_Single({
  weight: '400',
  variable: '--font-bitcountPropSingle',
  subsets: ["latin"],
  adjustFontFallback: false, // Disables the override warnings
});

const dmSans = DM_Sans({
  weight: '400',
  variable: '--font-dmSans',
  subsets: ["latin"],
})

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
      <body className={`${titanOne.variable} ${inter.className} ${bitCountPropSingle.variable} 
                        ${racingSans.variable} ${dmSans.variable} bg-darkestBlue`}>
        <ThemeProvider>
        <MobileProvider>
        <ScreenProvider>
          <DetectMobile />
          <NavBar />
          <ThemeToggle />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ScreenProvider>
        </MobileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
