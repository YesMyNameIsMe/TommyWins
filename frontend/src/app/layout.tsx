import type { Metadata } from "next";
import { Titan_One } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DetectMobile from "@/components/DetectMobile";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MobileProvider } from "@/context/mobileContext";
import { ScreenProvider } from "@/context/screenContext";
import "./globals.css";

const titanOne = Titan_One({
  weight: '400',
  variable: '--font-titanOne',
  subsets: ["latin"],
});

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
    <html lang="en" className="bg-darkestBlue">
      <body className={`${titanOne.variable} bg-darkestBlue`}>
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
