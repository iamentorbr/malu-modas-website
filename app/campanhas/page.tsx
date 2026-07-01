import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { campanhas } from "@/lib/campanhas"

export const metadata = {
  title: "Campanhas | MALU MODAS",
  description:
    "Conheca as campanhas da MALU MODAS: Moda Intima by Malu, Jeans 79 e Moda Modesta. Pecas selecionadas com carinho, de amiga pra amiga.",
}

export default function CampanhasPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar para a home</span>
          </Link>
        </div>
      </header>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm tracking-[0.2em] text-accent uppercase mb-4">
              Campanhas
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground text-balance leading-tight mb-6">
              Colecoes selecionadas de amiga pra amiga
            </h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Cada campanha e uma curadoria especial da Malu para voce encontrar
              a peca perfeita. Escolha a sua e garanta pelo WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campanhas.map((campanha) => (
              <Link
                key={campanha.slug}
                href={`/campanhas/${campanha.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-secondary">
                  <Image
                    src={campanha.produtos[0]?.image ?? "/malu/fachada.png"}
                    alt={campanha.nome}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs tracking-[0.2em] text-accent uppercase mb-2">
                  {campanha.destaque}
                </p>
                <h2 className="font-serif text-2xl text-foreground mb-2">
                  {campanha.nome}
                </h2>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">
                  {campanha.chamada}
                </p>
                <span className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-foreground group-hover:text-accent transition-colors">
                  Ver campanha
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          MALU MODAS - Av. Rio Branco, 570, Adamantina - SP
        </p>
      </footer>
    </main>
  )
}
