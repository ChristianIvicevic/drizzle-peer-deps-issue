import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { ThemeProvider } from '@/app/components.client'
import { cn } from '@/utils'

const fontSans = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
