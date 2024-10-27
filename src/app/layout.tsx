import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AmitIcon from './assets/snipm.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SnipAI - The AI Message Agent',
  description: 'Experience the future of messaging with SnipAI',
  icons: {
    icon: AmitIcon.src, // Use the AmitIcon as the favicon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href={AmitIcon.src} sizes="any" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}