import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { inter, ibmPlexMono, robotoMono } from '@/app/fonts/fonts';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import ButtonChangeDesigne from '@/components/ui/ButtonChangeDesigne';
import InitializeDesign from '@/components/ui/InitializeDesign';
import AnimationPageChangeDesign from '@/components/AnimationPageChangeDesign/AnimationPageChangeDesign';

// import ClientWrapper from './ClientWrapper';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

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
      {/* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
      <body>
        <AnimationPageChangeDesign />
        <Header />
        {/* <ClientWrapper>{children}</ClientWrapper> */}
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
