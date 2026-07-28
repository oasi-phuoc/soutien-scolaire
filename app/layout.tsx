import type { Metadata, Viewport } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import { OfflineProvider } from "@/components/OfflineProvider";
import { ForceLightMode, FORCE_LIGHT_MODE_SCRIPT } from "@/components/ForceLightMode";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LearnUp",
    template: "%s · LearnUp",
  },
  description: "LearnUp — Apprendre · Comprendre · Progresser",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light only" />
        <script dangerouslySetInnerHTML={{ __html: FORCE_LIGHT_MODE_SCRIPT }} />
      </head>
      <body
        className={`${nunito.variable} ${geistMono.variable} antialiased`}
      >
        <ForceLightMode />
        <OfflineProvider />
        {children}
      </body>
    </html>
  );
}
