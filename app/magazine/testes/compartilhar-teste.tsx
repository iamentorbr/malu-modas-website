"use client"

import { useState } from "react"

type CompartilharTesteProps = {
  title: string
}

export function CompartilharTeste({ title }: CompartilharTesteProps) {
  const [copied, setCopied] = useState(false)

  async function share() {
    const url = window.location.href
    const shareData = { title: `${title} | MALU Magazine`, text: "Faça este teste da MALU Magazine e descubra uma leitura feita para o seu momento.", url }

    if (navigator.share) {
      await navigator.share(shareData).catch(() => undefined)
      return
    }

    await navigator.clipboard.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  const encodedUrl = typeof window === "undefined" ? "" : encodeURIComponent(window.location.href)
  const encodedText = encodeURIComponent(`Faça o teste “${title}” na MALU Magazine`)

  return (
    <aside className="mt-8 flex flex-wrap items-center gap-3 border-y border-[#211b18]/20 py-4" aria-label="Compartilhe este teste">
      <span className="text-xs font-bold uppercase tracking-[.18em]">Compartilhe este teste</span>
      <button type="button" onClick={share} className="rounded-full bg-[#211b18] px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-white transition-transform hover:-translate-y-0.5">
        {copied ? "Link copiado" : "Copiar / compartilhar"}
      </button>
      <a href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`} target="_blank" rel="noreferrer" className="rounded-full border border-[#211b18] px-4 py-2 text-xs font-bold uppercase tracking-[.14em] transition-colors hover:bg-[#211b18] hover:text-white">WhatsApp</a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" className="rounded-full border border-[#211b18] px-4 py-2 text-xs font-bold uppercase tracking-[.14em] transition-colors hover:bg-[#211b18] hover:text-white">Facebook</a>
    </aside>
  )
}
