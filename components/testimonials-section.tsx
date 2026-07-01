"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "A Malu Modas tem pecas incriveis! Sempre encontro algo especial para cada ocasiao. O atendimento e impecavel.",
    author: "Fernanda M.",
    city: "Adamantina, SP",
  },
  {
    text: "Adoro a curadoria da loja. As pecas sao de qualidade e os precos sao justos. Recomendo para todas as amigas!",
    author: "Camila S.",
    city: "Lucelia, SP",
  },
  {
    text: "Melhor loja de moda feminina da regiao! Sempre saio de la me sentindo linda e confiante. Equipe maravilhosa!",
    author: "Patricia R.",
    city: "Adamantina, SP",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="py-20 lg:py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
          Depoimentos
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-balance">
          O Que Nossas Clientes Dizem
        </h2>

        <div className="relative">
          <blockquote className="min-h-[160px] flex flex-col items-center justify-center">
            <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed italic max-w-2xl">
              {`"${testimonials[current].text}"`}
            </p>
            <footer className="mt-6">
              <p className="font-sans text-sm font-medium text-foreground">
                {testimonials[current].author}
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-1">
                {testimonials[current].city}
              </p>
            </footer>
          </blockquote>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={prev}
              className="h-10 w-10 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    idx === current ? "bg-accent" : "bg-border"
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="h-10 w-10 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Proximo depoimento"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
