"use client"

export function AnnouncementBar() {
  const messages = [
    "Colecoes renovadas com as melhores marcas",
    "Parcele no cartao sem juros",
    "5% OFF na primeira compra",
    "CLUBE DA MALU para as Melhores Amigas da Malu",
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
