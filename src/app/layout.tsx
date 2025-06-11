import type { Metadata } from "next";
import { Dancing_Script, Quicksand } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Croq'Dya - Pâtisserie Artisanale",
  description: "Découvrez nos créations artisanales faites avec amour. Gâteaux, cupcakes, macarons... Chaque bouchée est une explosion de saveurs !",
  keywords: ["pâtisserie", "gâteaux", "cupcakes", "macarons", "artisanal", "Abidjan", "Côte d'Ivoire"],
  openGraph: {
    title: "Croq'Dya - Pâtisserie Artisanale",
    description: "Des douceurs qui rendent heureux",
    url: "https://croqdya.com",
    siteName: "Croq'Dya",
    locale: "fr_CI",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dancingScript.variable} ${quicksand.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FF69B4" />
      </head>
      <body className={`${dancingScript.variable} ${quicksand.variable} font-quicksand bg-gradient-to-br from-cream via-blanc-casse to-vanille text-chocolat antialiased min-h-screen`}>
        <div className="croqdya-layout">
          {children}
        </div>
      </body>
    </html>
  );
}