"use client"

export function AnnouncementBar() {
  const messages = [
    "Todas as pecas por R$ 49,90 - Amigas da Malu",
    "Frete gratis para Adamantina e regiao",
    "Novas colecoes toda semana",
    "Parcele em ate 6x sem juros",
    "10% OFF na primeira compra",
  ]

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="mx-8 text-xs tracking-[0.2em] uppercase font-sans">
            {msg}
            <span className="mx-8 opacity-40">{"///"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
