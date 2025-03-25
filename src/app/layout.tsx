import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CampaignProvider } from '../context/CampaignContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Campaign Connect',
  description: 'A modern call center application for campaign management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <CampaignProvider>{children}</CampaignProvider>
      </body>
    </html>
  );
}
