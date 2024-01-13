import type { Metadata } from 'next'
import { inter } from './ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Early Game',
  description: 'An online platform designed to allow younger students to showcase their skills to the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
