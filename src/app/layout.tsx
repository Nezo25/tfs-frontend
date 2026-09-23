import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tree Frog Systems | Engenharia de Software",
  description: "Software House especializada em tecnologia de ponta. Do planejamento ao MVP com agilidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-100 antialiased selection:bg-green-500/30 selection:text-green-500`}>
        <Header />
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
