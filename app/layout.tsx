import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'MALU MODAS | Moda Feminina em Adamantina - SP',
  description:
    'MALU MODAS - Sua loja de moda feminina em Adamantina, SP. Vestidos, conjuntos, acessorios e muito mais com estilo e elegancia tropical.',
  generator: 'v0.app',
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
