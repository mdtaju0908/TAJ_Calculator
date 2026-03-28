import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import BackgroundBubbles from "@/components/BackgroundBubbles";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAJ Calculator",
  description: "Advanced Multi-Calculator Platform",
  metadataBase: new URL("https://taj-calculator.mdtaju.tech"),
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950`}>
        <Sidebar />
        <main className="relative flex-1 min-h-screen overflow-y-auto pl-16 lg:pl-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <BackgroundBubbles />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_600px_at_50%_0%,rgba(88,28,135,0.12),transparent)]" />
          <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-6 min-h-screen flex items-center justify-center">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
      </body>
    </html>
  );
}
