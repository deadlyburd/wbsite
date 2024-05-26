
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from "next";
import { DM_Sans} from "next/font/google";
import "./globals.css";

const font = DM_Sans(
  { subsets: ["latin"],
    weight: '600'
}
  );

export const metadata: Metadata = {
  title: "xaable",
  description: "Premium Dental Websites and Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      
      suppressHydrationWarning={true}
      className={font.className}>
        <Analytics />
        {children}
        
        </body>
    </html>
  );
}
