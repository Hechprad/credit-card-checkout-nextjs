import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import '@/styles/globals.css';

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Credit Card Checkout NextJS',
  description: 'Credit Card Checkout NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lato.variable} antialiased`}>
        <div className='absolute inset-0 flex'>
          <div className='min-w-[325px] h-full bg-green-1'></div>
          <div className='w-full h-full bg-white-1'></div>
        </div>

        <main className='relative z-1'>{children}</main>
      </body>
    </html>
  );
}
