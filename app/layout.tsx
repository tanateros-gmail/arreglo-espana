import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const blackletter = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-blackletter"
});

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Arreglo Espana | Gothic Atelier",
  description:
    "A dark gothic portfolio for cinematic commissions, moonlit editorials, and atmospheric visual work.",
  openGraph: {
    title: "Arreglo Espana | Gothic Atelier",
    description:
      "Elegant gothic atmosphere inspired by Victorian cathedrals, dusty libraries, and nocturnal poetry.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blackletter.variable} ${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
