import Link from "next/link"
import { Sparkles } from "lucide-react"

export function PromoSection() {
  return (
    <section
      id="promo"
      className="bg-primary text-primary-foreground py-16 md:py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-4 w-4 text-[#c9a227]" />
          <span className="text-xs tracking-[0.25em] uppercase text-[#c9a227] font-sans">
            Oferta Exclusiva
          </span>
          <Sparkles className="h-4 w-4 text-[#c9a227]" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-balance leading-tight">
          Todas as pecas por
        </h2>

        <div className="my-6 flex items-start justify-center gap-2">
          <span className="font-serif text-2xl md:text-4xl mt-3 text-[#c9a227]">R$</span>
          <span className="font-serif text-7xl md:text-9xl leading-none text-[#c9a227]">
            49
          </span>
          <span className="font-serif text-3xl md:text-5xl mt-2 text-[#c9a227]">,90</span>
        </div>

        <p className="font-serif italic text-xl md:text-2xl text-primary-foreground/90 mb-4">
          Especialmente para as Amigas da Malu
        </p>

        <p className="max-w-xl mx-auto text-sm md:text-base text-primary-foreground/70 leading-relaxed mb-10">
          Participe do nosso grupo exclusivo no WhatsApp e aproveite essa
          condicao especial em pecas selecionadas. Vagas e estoque limitados.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://chat.whatsapp.com/FO2hYWwaLm1LUE1Yagokus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#c9a227] text-primary px-8 py-4 text-xs tracking-[0.2em] uppercase font-sans hover:bg-[#b8911f] transition-colors w-full sm:w-auto"
          >
            Entrar no grupo Amigas da Malu
          </a>
          <Link
            href="/links"
            className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-xs tracking-[0.2em] uppercase font-sans hover:bg-primary-foreground/10 transition-colors w-full sm:w-auto"
          >
            Ver todos os links
          </Link>
        </div>
      </div>
    </section>
  )
}
