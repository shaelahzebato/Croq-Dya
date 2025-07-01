import type { Metadata } from "next";
import { Quicksand, Dancing_Script } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // light, normal, bold
  variable: '--font-quicksand',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // normal, medium, bold
  variable: '--font-dancing-script',
})


export const metadata: Metadata = {
  title: "Croq'Dya - Pâtisserie Artisanale",
  description: "Découvrez nos créations artisanales faites avec amour...",
  keywords: ["pâtisserie", "gâteaux", "cupcakes", "macarons", "artisanal", "Abidjan", "Côte d'Ivoire"],
  openGraph: {
    title: "Croq'Dya - Pâtisserie Artisanale",
    description: "Des douceurs qui rendent heureux",
    url: "croq-dya.vercel.app", // "https://croqdya.com",
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
    <html lang="fr">
      <body className={`${quicksand.variable} ${dancingScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}