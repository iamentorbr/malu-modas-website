import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

export const metadata = {
  title: "Blog | MALU MODAS",
  description: "Dicas de moda, tendencias e inspiracoes para mulheres que querem se vestir bem em todas as ocasioes.",
}

const posts = [
  {
    slug: "curadoria-plus-size",
    title: "Curadoria de Moda para Corpos Plus Size: Elegancia em Todas as Curvas",
    excerpt:
      "Descubra como valorizar seu corpo com pecas que combinam conforto, estilo e elegancia. A moda e para todas!",
    image: "/images/blog-plus-size.jpg",
    date: "10 de Abril, 2026",
    author: "Leticia S.",
    category: "Plus Size",
  },
  {
    slug: "roupas-para-festas",
    title: "Guia Completo: Roupas para Festas que Fazem Voce Brilhar",
    excerpt:
      "Das festas de aniversario aos casamentos, saiba como escolher o look perfeito para cada ocasiao especial.",
    image: "/images/blog-festas.jpg",
    date: "8 de Abril, 2026",
    author: "Leticia S.",
    category: "Festas",
  },
  {
    slug: "trabalho-e-lazer",
    title: "Do Escritorio ao Happy Hour: Looks Versateis para o Dia a Dia",
    excerpt:
      "Aprenda a montar looks que transitam do ambiente profissional para momentos de diversao sem perder o estilo.",
    image: "/images/blog-trabalho-lazer.jpg",
    date: "5 de Abril, 2026",
    author: "Leticia S.",
    category: "Lifestyle",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar para a loja</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Blog
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Dicas de Moda e Estilo
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Inspiracoes, tendencias e conselhos para voce se sentir confiante e
            elegante em todas as ocasioes da vida.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-background/90 backdrop-blur-sm px-3 py-1 text-xs tracking-wider uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-block text-sm text-foreground border-b border-foreground pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                      Ler mais
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          MALU MODAS - Adamantina, SP
        </p>
      </footer>
    </main>
  )
}
