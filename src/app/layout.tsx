import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GlobalPageIndexDrawer } from "@/components/navigation/GlobalPageIndexDrawer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SARA // CORE-V5.2 - Secure Neural Transceiver",
  description:
    "Autonomous Neural Interface & Matrix Initialization Protocol for SARA Core AI Agent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-[#06090e] font-body-md text-on-surface antialiased selection:bg-primary-container/30 selection:text-primary">
        {children}
        {/* Global page index drawer — visible on every page */}
        <GlobalPageIndexDrawer />
      </body>
    </html>
  );
}
