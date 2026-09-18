import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeDestinations() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <Link
          href="/sacola-amiga"
          className="group grid overflow-hidden rounded-sm border border-border bg-background transition-colors hover:bg-card md:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative min-h-64 overflow-hidden bg-secondary md:min-h-80">
            <Image
              src="/sacola-amiga/bag-malu-card.png"
              alt="Sacola Amiga Bag Malu com peças selecionadas"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between gap-10 p-8 lg:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Experimente em casa</p>
              <h2 className="mt-4 max-w-md font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Sacola Amiga | Bag Malu
              </h2>
              <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                Receba uma seleção especial em casa, experimente com calma e fique só com o que amar.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
              Acessar
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
