import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ivyon Muthoni Wangare | Professional Therapist in Nairobi',
  description: 'Licensed therapist in Nairobi, Kenya providing empathetic counseling for anxiety, trauma, and personal growth. Book a session with Ivion Muthoni Wangare today.',
  keywords: ['Therapist in Nairobi', 'Counseling Kenya', 'Mental Health Nairobi', 'Ivion Muthoni Wangare', 'Psychologist Kenya', 'Online Therapy Kenya'],
  openGraph: {
    title: 'Ivyon Muthoni Wangare | Professional Therapy',
    description: 'A safe space for healing and growth in Nairobi.',
    url: 'https://www.ivyonwangare.com', // Replace with actual domain
    siteName: 'Ivion Therapy',
    images: [
      {
        url: '/og-image.jpg', // Create a 1200x630 image for social media sharing
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
