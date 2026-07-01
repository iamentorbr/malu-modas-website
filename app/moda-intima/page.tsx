import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Phone, Sparkles, Truck } from "lucide-react"

export const metadata = {
  title: "Moda Intima | MALU MODAS",
  description:
    "Lingerie, pijamas e basicos com conforto e elegancia. Pecas selecionadas para valorizar todos os corpos na MALU MODAS, Adamantina - SP.",
}

const categorias = [
  {
    nome: "Sutias",
    descricao: "Modelos com renda, sem aro e bojo para sustentacao e conforto.",
    image: "/images/intima-conjuntos.png",
  },
  {
    nome: "Calcinhas",
    descricao: "Do fio dental a cintura alta, em tecidos macios e confortaveis.",
    image: "/images/intima-pijamas.png",
  },
  {
    nome: "Pecas Modeladoras",
    descricao: "Cintas e modeladores que valorizam a silhueta com naturalidade.",
    image: "/images/intima-basicos.png",
  },
]

const diferenciais = [
  {
    icon: Heart,
    titulo: "Para Todos os Corpos",
    texto: "Numeracoes do PP ao plus size, porque toda mulher merece se sentir bem.",
  },
  {
    icon: Sparkles,
    titulo: "Curadoria Especial",
    texto: "Selecionamos pecas com tecidos de qualidade e acabamento impecavel.",
  },
  {
    icon: Truck,
    titulo: "Entrega em Adamantina",
    texto: "Receba em casa com rapidez ou retire na nossa loja na Av. Rio Branco.",
  },
]

export default function ModaIntimaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Top bar */}
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
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center px-6 py-16 lg:py-28 order-2 lg:order-1">
            <div className="max-w-md">
              <p className="text-sm tracking-[0.2em] text-accent uppercase mb-4">
                Colecao Intima
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
                Conforto e elegancia mais perto de voce
              </h1>
              <p className="text-muted-foreground text-pretty leading-relaxed mb-8">
                Lingerie, pijamas e basicos selecionados com carinho para
                valorizar a sua beleza natural. Pecas que abracam o seu corpo
                com delicadeza e sofisticacao.
              </p>
              <a
                href="https://wa.me/5518997453135"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm tracking-wider uppercase hover:bg-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                Comprar pelo WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px] order-1 lg:order-2">
            <Image
              src="/images/intima-hero.png"
              alt="Modelo usando lingerie elegante da colecao intima da MALU MODAS"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
              Categorias
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground text-balance">
              Encontre a peca perfeita
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categorias.map((cat) => (
              <article key={cat.nome} className="group">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={cat.image}
                    alt={cat.nome}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {cat.nome}
                </h3>
                <p className="text-sm text-muted-foreground">{cat.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {diferenciais.map((item) => (
              <div key={item.titulo} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-background mb-5">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {item.titulo}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 text-balance">
            Atendimento personalizado para voce
          </h2>
          <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
            Tem duvidas sobre tamanho ou quer ajuda para escolher? Fale com a
            gente pelo WhatsApp ou visite nossa loja em Adamantina.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5518997453135"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm tracking-wider uppercase hover:bg-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              (18) 99745-3135
            </a>
            <a
              href="https://instagram.com/eusoumalu.modas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              @eusoumalu.modas
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          MALU MODAS - Av. Rio Branco, 570, Adamantina - SP
        </p>
      </footer>
    </main>
  )
}
