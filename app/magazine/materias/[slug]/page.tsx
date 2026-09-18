import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CompartilharTeste } from "../../testes/compartilhar-teste"

const articles = {
  "guarda-roupa-salva-o-dia": {
    category: "Comportamento · Matéria 01",
    title: "Quando o guarda-roupa salva o dia",
    hook: "A roupa certa não resolve tudo — mas pode devolver o eixo quando a vida começa antes do café.",
    image: "/magazine/materia-guarda-roupa.png",
    alt: "Mulher escolhendo uma produção em um guarda-roupa organizado",
    paragraphs: [
      "Você acorda atrasada, o celular já tem três mensagens e a primeira reunião do dia começa em quarenta minutos. Nesses instantes, estilo não é sobre montar uma produção perfeita: é reconhecer as peças que fazem você se sentir pronta para ocupar o próprio espaço.",
      "É aí que a Displicent entra com aquela elegância descomplicada que acompanha a mulher real. Uma camisa bem cortada, uma textura gostosa e uma modelagem que não exige ajustes a cada passo transformam a pressa em presença. Não é sobre parecer outra pessoa; é sobre conseguir ser você com mais clareza.",
      "Quando o dia pede movimento, o Lado Avesso lembra que personalidade mora nos detalhes. Uma estampa inesperada, uma combinação de proporções ou um toque de cor podem mudar a energia de uma manhã comum. O look vira uma pequena decisão a seu favor, mesmo quando o restante da agenda parece fora do controle.",
      "E há a Cris Jeans, parceira dos dias em que praticidade e desejo precisam caber na mesma escolha. O jeans que acompanha uma reunião, um almoço improvisado e o caminho de volta para casa não é básico por falta de imaginação: ele é uma base para a sua vida acontecer sem interrupção.",
      "Na MALU, a curadoria começa nessa conversa honesta. A gente não escolhe peças para um personagem ideal, mas para a cliente que vive prazos, encontros, mudanças de planos e ainda quer se olhar no espelho com prazer. Seu guarda-roupa pode ser uma ferramenta de confiança — e a próxima novidade pode estar esperando por você.",
    ],
  },
  "terceira-peca-para-toda-historia": {
    category: "Comportamento · Matéria 02",
    title: "A amiga que sempre leva uma terceira opção",
    hook: "Do café ao jantar, descubra por que uma terceira peça pode acompanhar todas as versões do seu dia.",
    image: "/magazine/materia-terceira-peca.png",
    alt: "Mulher usando uma terceira peça em uma transição do trabalho para a noite",
    paragraphs: [
      "Era para ser só um café depois do trabalho. Mas o convite muda, a conversa fica boa e, de repente, existe um jantar no horizonte. Você não quer voltar para casa — quer apenas que a roupa acompanhe a história que apareceu no meio do caminho.",
      "A Displicent entende esse desejo de leveza com intenção. Uma terceira peça pode ser o gesto que transforma uma base simples em uma imagem completa: entra no escritório, sai para a rua e continua fazendo sentido quando as luzes da noite acendem.",
      "No Lado Avesso, encontramos a surpresa que impede o look de ficar previsível. Uma textura, um recorte ou uma cor bem colocada dizem que você se conhece, mas não tem medo de experimentar. A roupa acompanha a sua conversa: começa familiar e revela novas camadas.",
      "A Cris Jeans traz o chão perfeito para essa liberdade. Com uma modelagem que respeita o corpo e uma versatilidade que não depende da ocasião, ela permite que você troque o ritmo sem trocar quem é. Um blazer, uma jaqueta ou uma sobreposição fazem o resto — e cabem na bolsa da amiga que pensa em tudo.",
      "MALU é essa amiga que ajuda você a escolher sem complicar. Por isso, nossas novidades são pensadas para a vida inteira, não para uma foto isolada: peças que atravessam planos, humor e horários. Quando o dia mudar de ideia, seu estilo pode mudar junto.",
    ],
  },
} as const

type Slug = keyof typeof articles

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug as Slug] ?? articles["guarda-roupa-salva-o-dia"]
  return { title: `${article.title} | MALU Magazine`, description: article.hook }
}

export default async function MateriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug as Slug] ?? articles["guarda-roupa-salva-o-dia"]
  return (
    <main className="min-h-screen bg-[#f7efe5] text-[#211b18]">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-12">
        <Link href="/magazine#comportamento" className="text-xs font-bold uppercase tracking-[.2em] text-[#d72f39]">← Voltar para comportamento</Link>
        <header className="mt-10 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#d72f39]">{article.category}</p>
          <h1 className="mt-5 font-serif text-6xl leading-[.86] sm:text-8xl">{article.title}</h1>
          <p className="mt-7 max-w-2xl font-serif text-2xl italic leading-tight sm:text-3xl">{article.hook}</p>
        </header>
        <div className="relative mt-10 aspect-[4/3] overflow-hidden border-2 border-[#211b18] bg-[#f0d9c4]">
          <Image src={article.image} alt={article.alt} fill priority sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
        </div>
        <CompartilharTeste title={article.title} />
        <article className="mx-auto max-w-3xl py-10 sm:py-16">
          {article.paragraphs.map((paragraph) => <p key={paragraph} className="mb-7 font-serif text-xl leading-relaxed sm:text-2xl">{paragraph}</p>)}
          <div className="mt-12 border-2 border-[#d72f39] bg-[#f0d9c4] p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#d72f39]">Continue sua descoberta</p>
            <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">Novidades escolhidas para a sua vida real.</h2>
            <Link href="/magazine/catalogo/biquinis" className="mt-7 inline-flex rounded-full bg-[#d72f39] px-6 py-4 text-xs font-bold uppercase tracking-[.2em] text-white transition-transform hover:-translate-y-1">Ver novidades MALU</Link>
          </div>
        </article>
      </div>
    </main>
  )
}
