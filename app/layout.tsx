import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'] })
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chui Safari Camp',
  description: 'Experience luxury and adventure at Chui Safari Camp in Buliisa, Uganda. Exclusive accommodations, thrilling activities, and authentic safari experiences await you.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ '--font-playfair': playfair.style.fontFamily, '--font-lato': lato.style.fontFamily } as React.CSSProperties}>
      <body className={`font-lato antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
