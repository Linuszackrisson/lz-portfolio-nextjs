import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const metadata: Metadata = {
  title: "Linus Zackrisson | Fullstack Developer",
  description: "Portfolio för Linus - Fullstack Developer med fokus på React, TypeScript och modern webbutveckling. Se projekt och erfarenheter.",
  keywords: "portfolio, fullstack developer, react, typescript, javascript, webbutveckling",
  authors: [{ name: "Linus" }],
  openGraph: {
    title: "Linus Zackrisson | Fullstack Developer",
    description: "Portfolio för Linus - Fullstack Developer med fokus på React, TypeScript och modern webbutveckling.",
    type: "website",
    locale: "sv_SE",
    siteName: "Linus Zackrisson Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00856F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${poppins.className} overflow-x-hidden`}>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
