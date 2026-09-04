import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hexa-tecnologia-itapeva.kind-oasis-1606.chatgpt.site'),
  title: 'Hexa Tecnologia | Tecnologia sem complicação',
  description: 'Informática, assistência técnica, IA, automação, segurança e redes em Itapeva, SP.',
  openGraph: {
    title: 'Hexa Tecnologia',
    description: 'Tecnologia sem complicação.',
    images: ['/og.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexa Tecnologia',
    description: 'Tecnologia sem complicação.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
