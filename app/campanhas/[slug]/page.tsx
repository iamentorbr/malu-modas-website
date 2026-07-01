import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { campanhas, getCampanha } from "@/lib/campanhas"
import { QueroEssaPeca } from "@/components/quero-essa-peca"

export function generateStaticParams() {
  return campanhas.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const campanha = getCampanha(slug)
  if (!campanha) return { title: "Campanha | MALU MODAS" }
  return {
    title: `${campanha.nome} | MALU MODAS`,
    description: campanha.descricao,
  }
}

export default async function CampanhaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const campanha = getCampanha(slug)
  if (!campanha) notFound()

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/campanhas"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Todas as campanhas</span>
          </Link>
        </div>
      </header>

      {/* Cabecalho da campanha */}
      <section className="py-14 lg:py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-accent uppercase mb-4">
            {campanha.destaque}
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl text-foreground text-balance leading-tight mb-6">
            {campanha.chamada}
          </h1>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            {campanha.descricao}
          </p>
        </div>
      </section>

      {/* Produtos em formato e-commerce */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {campanha.produtos.map((produto) => (
              <article
                key={produto.nome}
                className="flex flex-col border border-border bg-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
                    src={produto.image}
                    alt={produto.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-2xl text-foreground mb-2">
                    {produto.nome}
                  </h2>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">
                    {produto.descricao}
                  </p>
                  <p className="text-lg text-foreground mb-6 mt-auto">
                    {produto.preco}
                  </p>
                  <QueroEssaPeca
                    produtoNome={produto.nome}
                    className="inline-flex w-full items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-sm tracking-wider uppercase hover:bg-accent transition-colors"
                  />
                </div>
              </article>
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
