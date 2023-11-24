import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Nav from '@/components/Nav'
const inter = Inter({ subsets: ['latin'] })
import Core from '@/conf/cfg'
export const metadata: Metadata = {
  title: Core.title,
  description: Core.description,
  metadataBase: typeof process.env.NEXT_PUBLIC_WEB_URL === 'string' ? new URL(process.env.NEXT_PUBLIC_WEB_URL) : null,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_WEB_URL,
    siteName: Core.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_WEB_URL}logos/naga.png`,
        width: 600,
        height: 600,
      }
    ]

  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav title={Core.name} version={Core.version} discord={Core.discord} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
