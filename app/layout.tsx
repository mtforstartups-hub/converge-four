import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// 1. Local Fonts
const nhgDisplay = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplayRoman.woff2",
      weight: "400",
      style: "normal",
    }, // 55 Roman
    {
      path: "./fonts/NeueHaasDisplayBold.woff2",
      weight: "700",
      style: "normal",
    }, // 75 Bold
  ],
  variable: "--font-nhg",
  display: "swap",
});

const tiemposText = localFont({
  src: [
    {
      path: "./fonts/TiemposTextRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TiemposTextSemibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tiempos",
  display: "swap",
});

// 2. Google Fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Converge — Intelligence Infrastructure for Institutional Lending",
  description:
    "Turn messy deal files into structured, traceable, credit-ready decisions before your LOS ever opens. Converge is the enterprise AI system built for rigorous lenders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nhgDisplay.variable} ${tiemposText.variable} ${dmSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
