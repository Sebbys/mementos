import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dice LMS',
  description: 'Dice Learning Management System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <Provider>
    <html lang='en' suppressHydrationWarning={true}>
      <body className={inter.className}>
        <div className='fixed h-screen w-full ' />
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Header />
          <Suspense fallback={`<div>Loding anjeeer</div>`}>
            <main className='relative z-10'>{children}</main>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
    // </Provider>
  );
}
