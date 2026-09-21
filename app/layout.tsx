import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond, Manrope } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'MALU MODAS | Moda Feminina em Adamantina - SP',
  description:
    'MALU MODAS - Sua loja de moda feminina em Adamantina, SP. Vestidos, conjuntos, acessorios e muito mais com estilo e elegancia tropical.',
  generator: 'v0.app',
  metadataBase: new URL('https://www.eusoumalu.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'MALU MODAS',
    images: [{ url: '/og/fachada.jpg', width: 1200, height: 630, alt: 'MALU MODAS em Adamantina', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/fachada.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#c8764a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${manrope.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
