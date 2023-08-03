import './globals.css'
import type { Metadata } from 'next'
import { PT_Sans } from 'next/font/google'
import React from "react";

const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'My color blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
