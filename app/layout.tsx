import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "QTrades — Platform Trading Indonesia",
    template: "%s | QTrades",
  },
  description:
    "Platform membership trading profesional. Dapatkan sinyal Forex, Komoditas, dan Indices berkualitas, materi edukasi, dan tools analisis portofolio.",
  keywords: ["trading", "forex", "sinyal trading", "edukasi trading", "membership trading"],
  authors: [{ name: "QTrades" }],
  openGraph: {
    title: "QTrades — Platform Trading Indonesia",
    description:
      "Platform membership trading profesional. Sinyal Forex, Komoditas, Indices.",
    siteName: "QTrades",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast: "bg-surface border-border text-foreground",
              description: "text-muted-foreground",
            },
          }}
        />
      </body>
    </html>
  );
}
