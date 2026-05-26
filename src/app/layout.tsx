import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Qazi Farhan Ahmad | AI Web Developer & MERN Stack Expert',
  description: 'Qazi Farhan Ahmad is an AI Web Developer and MERN Stack Expert specializing in high-performance websites, AI-powered web applications, and scalable digital products. Based in Peshawar, Pakistan — open to internships, freelance, and full-time roles.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.className} bg-white`}>{children}</body>
    </html>
  )
}
