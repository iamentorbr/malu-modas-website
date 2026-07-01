import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"

export const metadata = {
  title: "Guia Completo: Roupas para Festas | Blog MALU MODAS",
  description:
    "Das festas de aniversario aos casamentos, saiba como escolher o look perfeito para cada ocasiao especial.",
}

export default function FestasPost() {
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
              Festas
            </span>
            <h1 className="font-serif text-3xl lg:text-5xl text-foreground mb-6 text-balance">
              Guia Completo: Roupas para Festas que Fazem Voce Brilhar
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                8 de Abril, 2026
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
              src="/images/blog-festas.jpg"
              alt="Roupas para Festas"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Receber um convite para uma festa e sempre emocionante, mas logo
              vem a pergunta: o que vestir? Cada ocasiao pede um tipo de
              producao, e saber escolher o look certo faz toda a diferenca para
              voce aproveitar o momento com confianca e estilo.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Festas de Aniversario
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Para aniversarios casuais, aposte em vestidos midi florais ou
              conjuntos de saia e blusa. Se a festa for a noite, um vestido de
              cetim em tons neutros ou um macacao elegante sao opcoes certeiras.
              Complete com sandalia de salto medio e bolsa clutch.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Casamentos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Casamentos pedem mais sofisticacao. Para cerimonia durante o dia,
              vestidos fluidos em tons pastel, rosa antigo ou verde salvia sao
              perfeitos. A noite, vale apostar em cores mais intensas como
              marsala, azul marinho ou dourado. Evite branco, que e reservado
              para a noiva, e preto total, que pode parecer muito formal.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Formaturas e Eventos Corporativos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nestas ocasioes, o equilibrio entre elegancia e sobriedade e
              fundamental. Vestidos longos em cores solidas, com detalhes
              discretos como drapeados ou fendas estrategicas, sao ideais.
              Tecidos como crepe, chiffon e seda transmitem sofisticacao sem
              exagero.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Festas Tematicas e Baladas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Aqui a regra e ousar! Brilhos, paetes, metalicos e cores vibrantes
              estao liberados. Mini vestidos, bodys com calca de cintura alta e
              conjuntos cropped sao opcoes que garantem um visual impactante.
              Nao esqueca dos acessorios statement para completar o look.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Dicas Universais para Qualquer Festa
            </h2>
            <ul className="text-muted-foreground space-y-2">
              <li>Sempre considere o dresscode do convite</li>
              <li>Priorize o conforto - voce vai dançar e socializar</li>
              <li>Faca um teste do look completo antes do dia</li>
              <li>Tenha uma opcao de segundo sapato para festas longas</li>
              <li>Menos e mais: escolha entre destacar o vestido ou os acessorios</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">
              Conclusao
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Na Malu Modas, temos opcoes para todas as festas da sua vida. Nossa
              equipe esta pronta para ajudar voce a encontrar o look que vai
              fazer voce se sentir a mulher mais bonita do evento. Afinal, cada
              festa e uma oportunidade de celebrar a vida com estilo!
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
