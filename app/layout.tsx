/*
 * @Author: qianhua.xiong
 */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "xiogqianhua's technology-website",
  description: "xiogqianhua's technology-website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<SpeedInsights/></body>
    </html>
  )
}
