import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

export const metadata = {
  title: "Curadoria de Moda para Corpos Plus Size | Blog MALU MODAS",
  description:
    "Descubra como valorizar seu corpo com pecas que combinam conforto, estilo e elegancia. A moda e para todas!",
}

export default function PlusSizePost() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar para o blog</span>
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-secondary px-3 py-1 text-xs tracking-wider uppercase mb-6">
              Plus Size
            </span>
            <h1 className="font-serif text-3xl lg:text-5xl text-foreground mb-6 text-balance">
              Curadoria de Moda para Corpos Plus Size: Elegancia em Todas as Curvas
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                10 de Abril, 2026
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Leticia S.
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] max-w-4xl mx-auto mb-12 overflow-hidden">
            <Image
              src="/images/blog-plus-size.jpg"
              alt="Moda Plus Size"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A moda plus size deixou de ser apenas uma tendencia para se tornar
              uma celebracao da diversidade de corpos. Na Malu Modas, acreditamos
              que cada mulher merece se sentir linda e confiante, independente do
              numero que veste.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Conheca Seu Corpo, Abrace Suas Curvas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O primeiro passo para uma curadoria de moda eficiente e conhecer e
              amar seu corpo. Cada curva conta uma historia, e a roupa certa pode
              realca-las de forma elegante. Vestidos com corte em A, por exemplo,
              sao perfeitos para criar uma silhueta equilibrada, enquanto cintos
              na altura da cintura ajudam a definir o corpo.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Tecidos que Fazem a Diferenca
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A escolha do tecido e fundamental. Prefira materiais que tenham
              caimento fluido e que nao marquem. Viscose, crepe e malhas de
              qualidade sao excelentes opcoes. Evite tecidos muito rigidos ou
              muito finos que podem criar volumes indesejados.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Cores e Estampas: Sem Medo de Ousar
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Quem disse que plus size deve usar apenas preto? Cores vibrantes,
              estampas florais e geometricas estao liberadas! O segredo esta no
              equilibrio: se a peca de cima for estampada, opte por uma de baixo
              lisa, e vice-versa. Listras verticais e estampas medias tendem a
              ser mais favorecedoras.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Pecas-Chave para Ter no Guarda-Roupa
            </h2>
            <ul className="text-muted-foreground space-y-2">
              <li>Vestido envelope - versatil e favorece todos os tipos de corpo</li>
              <li>Blazer estruturado - profissionalismo com elegancia</li>
              <li>Calca pantalona - alonga a silhueta</li>
              <li>Saia midi - classica e sofisticada</li>
              <li>Blusa com decote V - alonga o colo</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Conclusao
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Na Malu Modas, nossa curadoria plus size e feita com carinho e
              atencao aos detalhes. Cada peca e selecionada pensando no conforto,
              na qualidade e, principalmente, em fazer voce se sentir incrivel.
              Porque moda nao tem tamanho, tem atitude!
            </p>

            {/* Author */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Escrito por{" "}
                <span className="text-foreground font-medium">Leticia S.</span>
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          MALU MODAS - Adamantina, SP
        </p>
      </footer>
    </main>
  )
}
