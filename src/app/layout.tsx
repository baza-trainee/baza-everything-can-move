import type { Metadata } from 'next';
import { inter, ibmPlexMono, robotoMono } from '@/app/fonts/fonts';
import './globals.css';
import InitializeDesign from '@/components/ui/InitializeDesign';
import { AnimationCompare } from '@/components/AnimationPageChangeDesign/AnimationCompare';
import HeaderNew from '@/components/layout/Header/HeaderNew';
import Footer from '@/components/layout/Footer/Footer';
import ButtonChangeDesigne from '@/components/ui/ButtonChangeDesigne';

export const metadata: Metadata = {
  title: 'Все, що рухається',
  description: 'Everything that moves',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${inter.variable} ${ibmPlexMono.variable} ${robotoMono.variable} antialiased`}
    >
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />

      <body>
        <AnimationCompare />
        <HeaderNew />
        <main>
          <InitializeDesign />
          {children}
        </main>
        <Footer />
        <ButtonChangeDesigne />
      </body>
    </html>
  );
}
