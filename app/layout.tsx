import './globals.css'
import type { Metadata } from 'next'
import { mainFont } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Hero Search',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' scroll-smooth'>
      <body className={mainFont.className}>{children}</body>
    </html>
  )
}
