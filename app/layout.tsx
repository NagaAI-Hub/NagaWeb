import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
const inter = Inter({ subsets: ['latin'] })
import { Core } from '@/conf/cfg'
import StoreProvider from './StoreProvider'

export const metadata: Metadata = {
  title: 'NagaAI - The Leader in Cutting-Edge AI Solutions',
  description: 'Unlock advanced artificial intelligence capabilities with NagaAI. Leverage powerful APIs for GPT-4 language models, image generation, text-to-speech, transcription, translation, moderation & more. Elevate your applications with bleeding-edge AI from the industry leader.',
  keywords: 'AI APIs, GPT-4, Claude 3, ChatGPT, image generation, text-to-speech, speech-to-text, translation, moderation, advanced AI, cutting-edge AI, artificial intelligence solutions, AI for developers, AI for businesses, NagaAI',
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
interface Image {
  url: string;
  width: number;
  height: number;
}

interface OpenGraph {
  type: string;
  locale: string;
  url: string | undefined;
  siteName: string;
  images: Image[];
}

interface Metadata {
  title: string;
  description: string;
  keywords: string;
  metadataBase: URL | null;
  openGraph: OpenGraph;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <StoreProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}

          >
            {children}
          </ThemeProvider>
        </body>
      </StoreProvider>
    </html>
  )
}
