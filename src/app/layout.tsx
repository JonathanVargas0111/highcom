import type { Metadata } from "next";
import { Lato, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-lato',
});

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Highcom Cala SAS",
  description: "HIGHCOM ® inicia operaciones en la ciudad de Bogotá en el mes de Septiembre del 2009 con el objeto de brindar soluciones de comunicaciones para clientes del sector gubernamental y para algunas multinacionales que operan en el sector industrial Colombiano",
  keywords: "telecomunicaciones, fibra óptica, multiplexores, infraestructura, tableros eléctricos, cableado estructurado, redes de cobre, switches industriales, amplificadores ópticos, Colombia, Bogotá",
  authors: [{ name: "Highcom Cala SAS" }],
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    url: "https://highcomcalasas.netlify.app",
    type: "website",
    title: "Highcom Cala SAS",
    description: "HIGHCOM ® inicia operaciones en la ciudad de Bogotá en el mes de Septiembre del 2009 con el objeto de brindar soluciones de comunicaciones para clientes del sector gubernamental y para algunas multinacionales que operan en el sector industrial Colombiano",
    images: [
      {
        url: "http://www.highcom.co/images/HIGHCOM.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Highcom Cala SAS",
  },
  twitter: {
    card: "summary_large_image",
    site: "highcomcalasas.netlify.app",
    title: "Highcom Cala SAS",
    description: "HIGHCOM ® inicia operaciones en la ciudad de Bogotá en el mes de Septiembre del 2009 con el objeto de brindar soluciones de comunicaciones para clientes del sector gubernamental y para algunas multinacionales que operan en el sector industrial Colombiano",
    images: ["http://www.highcom.co/images/HIGHCOM.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lato.variable} ${openSans.variable}`}>
      <head>
        <link rel="shortcut icon" href="/img/LOGO_HIGHCOM.png" />
        <link rel="preconnect" href="https://kit.fontawesome.com" />
        <link rel="preconnect" href="https://ka-f.fontawesome.com" />
      </head>
      <body className="font-[var(--font-lato)]">
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="https://kit.fontawesome.com/ce768f010e.js" crossOrigin="anonymous" defer></script>
      </body>
    </html>
  );
}
