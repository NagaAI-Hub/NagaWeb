import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Nav from '@/components/Nav'
const inter = Inter({ subsets: ['latin'] })
import Core from '@/conf/cfg'
export const metadata: Metadata = {
  title: 'NagaAI - Your Gateway to Cutting-Edge AI Technologies',
  description: `Explore the frontier of artificial intelligence with NagaAI. Offering stable and reliable API access to the latest in AI technology, NagaAi empowers developers and businesses to harness the power of cutting-edge and bleeding-edge AI solutions. Elevate your projects with next-gen AI capabilities.`,
  metadataBase: typeof process.env.NEXT_PUBLIC_WEB_URL === 'string' ? new URL(process.env.NEXT_PUBLIC_WEB_URL) : null,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_WEB_URL,
    
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
        <Nav title={Core.name} version={Core.version} discord={Core.discord}/>
        
        {children}
      </ThemeProvider>
    </body>
  </html>
  )
}
