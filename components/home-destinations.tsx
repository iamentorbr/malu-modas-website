import Link from "next/link"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    href: "/campanhas",
    label: "Campanhas",
    description: "Novidades, coleções e ofertas especiais da temporada.",
  },
  {
    href: "/clubedamalu",
    label: "Club da Malu",
    description: "Vantagens exclusivas para nossas clientes mais queridas.",
  },
  {
    href: "/shop",
    label: "Shop",
    description: "Compre as peças da MALU direto pela nossa loja online.",
  },
]

export function HomeDestinations() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {destinations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between gap-8 bg-background p-8 transition-colors hover:bg-card lg:p-10"
            >
              <div>
                <h2 className="font-serif text-2xl tracking-tight text-foreground">{item.label}</h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
                Acessar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
