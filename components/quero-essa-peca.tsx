"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5518997453135"

export function QueroEssaPeca({
  produtoNome,
  className,
}: {
  produtoNome: string
  className?: string
}) {
  const [href, setHref] = useState(`https://wa.me/${WHATSAPP_NUMBER}`)

  // Monta o link do WhatsApp com a mensagem e o link da peca (URL da pagina).
  useEffect(() => {
    const link = window.location.href
    const mensagem = `Quero comprar essa peca: ${produtoNome}\n${link}`
    setHref(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`)
  }, [produtoNome])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm tracking-wider uppercase hover:bg-accent transition-colors"
      }
    >
      <MessageCircle className="w-4 h-4" />
      Quero essa peca
    </a>
  )
}
