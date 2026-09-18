"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const highlights = [
  {
    eyebrow: "MALU MAGAZINE · HORÓSCOPO",
    title: "Seu signo pede uma moda praia",
    text: "12 signos, 12 formas de viver o verão com intenção, autocuidado e curadoria MALU.",
    href: "/magazine/materias/moda-praia-seu-signo",
    image: "/magazine/horoscopo-signo-praia.png",
  },
  {
    eyebrow: "MALU MAGAZINE · AMOR",
    title: "Amor também é escolher",
    text: "Uma leitura sobre critério, curadoria e as escolhas que aproximam você de si mesma.",
    href: "/magazine/materias/escolher-com-amor",
    image: "/magazine/materia-escolher.png",
  },
  {
    eyebrow: "MALU MAGAZINE · NOVOS CAPÍTULOS",
    title: "30 anos de história e mudança",
    text: "Adamantina, memória e o futuro da MALU em uma história que continua sendo escrita.",
    href: "/magazine/materias/adamantina-novos-capitulos",
    image: "/magazine/materia-adamantina.png",
  },
]

export function MagazineHighlights() {
  const [active, setActive] = useState(0)
  const current = highlights[active]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % highlights.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section aria-label="Novidades da MALU Magazine" className="border-b-2 border-[#211b18] bg-[#f0d9c4]">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[1.1fr_.9fr]">
        <div className="flex min-h-[360px] flex-col justify-center px-6 py-12 sm:px-10 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#d72f39]">{current.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[.92] tracking-[-.03em] text-[#211b18] sm:text-6xl">{current.title}</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#211b18]/70">{current.text}</p>
          <Link href={current.href} className="mt-8 inline-flex w-fit border-2 border-[#211b18] px-5 py-3 text-xs font-bold uppercase tracking-[.18em] transition-colors hover:bg-[#211b18] hover:text-[#f7efe5]">Ler matéria</Link>
          <div className="mt-10 flex gap-2" aria-label="Selecionar novidade">
            {highlights.map((item, index) => <button key={item.title} type="button" aria-label={`Mostrar ${item.title}`} aria-current={active === index} onClick={() => setActive(index)} className={`h-2 transition-all ${active === index ? "w-10 bg-[#d72f39]" : "w-2 bg-[#211b18]/35"}`} />)}
          </div>
        </div>
        <div className="relative min-h-[320px] overflow-hidden border-t-2 border-[#211b18] lg:border-l-2 lg:border-t-0">
          <Image key={current.image} src={current.image} alt="" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority={active === 0} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211b18]/45 to-transparent" />
          <span className="absolute bottom-6 left-6 bg-[#f7efe5] px-3 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#211b18]">Novidade {String(active + 1).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  )
}
