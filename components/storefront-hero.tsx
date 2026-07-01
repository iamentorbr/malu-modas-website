import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowUpRight } from "lucide-react"

export function StorefrontHero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-6">De Amiga pra Amiga</p>
          <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            A sua loja de moda feminina em Adamantina
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground text-pretty">
            Peças escolhidas com carinho, atendimento próximo e o cuidado de quem entende de estilo.
            Venha conhecer a MALU MODAS pessoalmente.
          </p>
        </div>

        {/* Storefront photo */}
        <figure className="mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-sm border border-border shadow-2xl shadow-foreground/10">
            <Image
              src="/malu/fachada.png"
              alt="Fachada da loja MALU MODAS com toldo preto e letreiro em azul, na Av. Rio Branco em Adamantina"
              width={1400}
              height={1000}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-5 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              Av. Rio Branco, 570 — Adamantina, SP
            </span>
          </figcaption>
        </figure>

        {/* Quick actions */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/5518997453135"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Falar no WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/clubedamalu"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Conhecer o Club da Malu
          </Link>
        </div>
      </div>
    </section>
  )
}
