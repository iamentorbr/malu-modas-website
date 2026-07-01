import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

export const metadata = {
  title: "Do Escritorio ao Happy Hour: Looks Versateis | Blog MALU MODAS",
  description:
    "Aprenda a montar looks que transitam do ambiente profissional para momentos de diversao sem perder o estilo.",
}

export default function TrabalhoLazerPost() {
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
              Lifestyle
            </span>
            <h1 className="font-serif text-3xl lg:text-5xl text-foreground mb-6 text-balance">
              Do Escritorio ao Happy Hour: Looks Versateis para o Dia a Dia
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                5 de Abril, 2026
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
              src="/images/blog-trabalho-lazer.jpg"
              alt="Looks para Trabalho e Lazer"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A vida moderna exige praticidade. Entre reunioes, almoco com
              clientes, e aquele happy hour inesperado com as amigas, ter um
              guarda-roupa com pecas versateis e essencial. A boa noticia? E
              possivel estar bem vestida em todas essas ocasioes sem precisar
              voltar em casa para trocar de roupa!
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              O Poder do Blazer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O blazer e a peca coringa por excelencia. No trabalho, ele
              transmite profissionalismo sobre uma blusa basica. Apos o
              expediente, tire o blazer, solte o cabelo e troque os sapatos
              sociais por uma sandalia - pronto, voce esta preparada para
              qualquer programa! Invista em um blazer bem cortado em cor neutra
              como bege, preto ou marinho.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Vestidos que Funcionam das 9h as 21h
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vestidos midi em cores solidas ou com estampas discretas sao
              perfeitos para essa transicao. Durante o dia, use com scarpin e
              blazer. A noite, troque por sandalia de tiras e adicione um colar
              statement. Tecidos como crepe e viscose sao confortaveis e mantem
              a elegancia ao longo do dia.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              A Combinacao Calca + Blusa
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Uma calca de alfaiataria bem cortada combinada com uma blusa de
              seda e um classico imbativel. Para o trabalho, mantenha a blusa
              por dentro da calca e adicione um cinto discreto. Para sair,
              deixe a blusa solta, arregace as mangas e troque a rasteirinha
              por uma sandalia de salto. Acessorios maiores e batom vermelho
              completam a transformacao.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Final de Semana com Estilo
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos fins de semana, a palavra de ordem e conforto sem abrir mao do
              estilo. Calcas wide leg com camisetas basicas de qualidade,
              vestidos fluidos com tenis brancos, ou conjuntos de linho sao
              opcoes perfeitas para brunch, passeios no shopping ou tarde no
              parque. O segredo esta na qualidade das pecas e nos detalhes bem
              escolhidos.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Kit de Sobrevivencia na Bolsa
            </h2>
            <ul className="text-muted-foreground space-y-2">
              <li>Um batom em tom mais intenso para a noite</li>
              <li>Brincos maiores para substituir os discretos do dia</li>
              <li>Lenco ou echarpe que pode virar acessorio de cabelo</li>
              <li>Perfume em versao travel size</li>
              <li>Sandalia dobravel para emergencias</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Conclusao
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Construir um guarda-roupa versatil e um investimento inteligente.
              Na Malu Modas, selecionamos pecas pensando na mulher real, que
              trabalha, se diverte e vive intensamente. Venha conhecer nossa
              colecao e descubra como e facil estar sempre pronta para qualquer
              ocasiao!
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
