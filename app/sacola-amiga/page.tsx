import Link from "next/link"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShoppingBag, Heart, Star, CheckCircle, MessageCircle, Package, Clock } from "lucide-react"

export const metadata = {
  title: "Sacola Amiga | MALU MODAS",
  description:
    "Receba em casa uma sacola com peças selecionadas especialmente pra você. Experimente com calma e fique só com o que amar. Cadastre-se com uma das nossas vendedoras.",
}

const comoFunciona = [
  {
    numero: "01",
    titulo: "Fale com uma vendedora",
    descricao:
      "Entre em contato pelo WhatsApp ou pessoalmente na loja. Nossa vendedora vai entender o seu estilo, tamanho e as peças que você ama usar.",
  },
  {
    numero: "02",
    titulo: "Cadastro personalizado",
    descricao:
      "A vendedora faz seu cadastro completo: suas cores preferidas, tipo de roupa, os melhores dias para receber e tudo que você quiser nos contar.",
  },
  {
    numero: "03",
    titulo: "Receba sua sacola",
    descricao:
      "Montamos uma sacola com peças selecionadas a mão pensando em você. Entregamos no dia combinado, com carinho de amiga para amiga.",
  },
  {
    numero: "04",
    titulo: "Escolha o que amar",
    descricao:
      "Experimente em casa com calma. Fica com o que amou, devolve o resto. Sem pressa, sem pressão.",
  },
]

const beneficios = [
  {
    Icone: Heart,
    titulo: "Curadoria de amiga",
    descricao:
      "Cada peça escolhida com cuidado, pensando no seu gosto e no que vai fazer você se sentir linda.",
  },
  {
    Icone: Clock,
    titulo: "No seu tempo",
    descricao:
      "Experimente em casa, sem pressa. Combine com o que já tem no armário e decida com tranquilidade.",
  },
  {
    Icone: Package,
    titulo: "Entrega no dia certo",
    descricao:
      "Você escolhe os dias que funcionam melhor pra você. A gente se adapta à sua rotina.",
  },
  {
    Icone: Star,
    titulo: "100% personalizado",
    descricao:
      "Não é uma sacola qualquer. É a sua sacola, com as cores, os estilos e os tamanhos que você gosta.",
  },
]

const WHATSAPP_LINK =
  "https://wa.me/5518997453135?text=Ol%C3%A1%2C+quero+me+cadastrar+na+Sacola+Amiga+da+Malu+Modas!"

export default function SacolaAmigaPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />

      {/* Hero */}
      <section className="bg-secondary/50 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.35em] text-accent mb-5">
                Um serviço exclusivo
              </span>
              <h1 className="font-serif text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1] text-balance mb-6">
                Sacola Amiga
              </h1>
              <p className="font-sans text-base leading-relaxed text-muted-foreground text-pretty mb-3">
                Imagina receber em casa uma sacola cheia de peças selecionadas especialmente pra você — do seu jeito, do seu tamanho, das suas cores.
              </p>
              <p className="font-sans text-base leading-relaxed text-muted-foreground text-pretty mb-10">
                Esse é o nosso jeito de cuidar de você. De amiga pra amiga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-80"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com uma vendedora
                </Link>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
                >
                  Como funciona
                </a>
              </div>
            </div>

            {/* Decorativo */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-52 h-52 rounded-full bg-accent/15 flex items-center justify-center">
                    <ShoppingBag className="h-24 w-24 text-accent/50" strokeWidth={1} />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-background border border-border rounded-sm px-4 py-2.5 shadow-sm">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">Seu tamanho</p>
                  <p className="font-serif text-sm text-foreground mt-0.5">Personalizado</p>
                </div>
                <div className="absolute -bottom-2 -left-6 bg-background border border-border rounded-sm px-4 py-2.5 shadow-sm">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">Entrega</p>
                  <p className="font-serif text-sm text-foreground mt-0.5">No dia certo</p>
                </div>
                <div className="absolute top-1/2 -right-16 -translate-y-1/2 bg-accent rounded-sm px-4 py-2.5 shadow-sm">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-accent-foreground/80">Estilo</p>
                  <p className="font-serif text-sm text-accent-foreground mt-0.5">Do seu jeito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">Por que você vai amar</span>
          <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-foreground text-balance">
            Uma sacola pensada em você
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map(({ Icone, titulo, descricao }) => (
            <div key={titulo} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Icone className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">{titulo}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                  {descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-accent">Simples assim</span>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-foreground text-balance">
              Como funciona a Sacola Amiga
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {comoFunciona.map((passo, i) => (
              <div key={passo.numero} className="relative">
                {i < comoFunciona.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%-0.5rem)] w-full h-px bg-border" />
                )}
                <div className="flex flex-col gap-4">
                  <span className="font-serif text-4xl text-accent/30 leading-none">{passo.numero}</span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2">{passo.titulo}</h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                      {passo.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você informa */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.35em] text-accent">No cadastro</span>
          <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-foreground text-balance">
            Conta tudo pra gente
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
            Quanto mais você nos contar, mais certinha chega sua sacola. A vendedora vai te fazer algumas perguntinhas simples.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Seu nome e telefone para contato",
            "O tamanho que você usa",
            "Os tipos de roupa que você mais gosta",
            "Suas cores preferidas",
            "Seu estilo (casual, social, festa...)",
            "Os melhores dias para receber",
            "O horário preferido de entrega",
            "Qualquer observação especial que quiser",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-sm border border-border bg-background">
              <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28 text-center">
          <ShoppingBag className="h-12 w-12 text-background/20 mx-auto mb-8" strokeWidth={1} />
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-balance mb-6">
            Pronta para receber a sua sacola?
          </h2>
          <p className="mx-auto max-w-lg font-sans text-sm leading-relaxed text-background/70 text-pretty mb-10">
            Chama uma das nossas vendedoras no WhatsApp agora. Em poucos minutos seu cadastro fica pronto e logo logo sua sacola chega na sua porta.
          </p>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-background px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Quero me cadastrar
          </Link>

          {/* Acesso interno discreto */}
          <div className="mt-16 pt-8 border-t border-background/10 flex items-center justify-center gap-6">
            <Link
              href="/sacola-amiga/vendedora"
              className="font-sans text-xs text-background/30 hover:text-background/60 transition-colors tracking-wider uppercase"
            >
              Acesso Vendedora
            </Link>
            <span className="text-background/20">·</span>
            <Link
              href="/sacola-amiga/admin"
              className="font-sans text-xs text-background/30 hover:text-background/60 transition-colors tracking-wider uppercase"
            >
              Acesso Admin
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
