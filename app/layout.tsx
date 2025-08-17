import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JustBuild - Connecting Silicon Valley to Silicon Slopes",
  description: "JustBuild connects Utah founders, engineers, and builders through hackathons, community events, and AI-native initiatives.",
  keywords: "hackathon, Utah tech, Silicon Slopes, AI, community, builders",
  openGraph: {
    title: "JustBuild",
    description: "Connecting Silicon Valley to Silicon Slopes",
    url: "https://justbuild.ing",
    siteName: "JustBuild",
    images: [
      {
        url: "/assets/JustBuild.png",
        width: 1200,
        height: 630,
        alt: "JustBuild Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustBuild",
    description: "Connecting Silicon Valley to Silicon Slopes",
    images: ["/assets/JustBuild.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
