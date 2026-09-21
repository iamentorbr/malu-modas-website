import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TestesMalu } from "./testes-malu"

export const metadata: Metadata = {
  title: "MALU MAGAZINE | Moda, comportamento e desejo",
  description: "Conteúdos da MALU MAGAZINE sobre estilo, horóscopo e amor, com testes para descobrir as novidades que combinam com você.",
}

const coverImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12bb90da-daec-4baf-8a6e-e77b7f487896-2Ge0FjZTG8eLaB0onylzO2tTe1a07O.jpg"
const departments = [
  { title: "Comportamento", eyebrow: "01", text: "Estilo para a vida real, com escolhas que revelam quem você é.", href: "#comportamento", color: "bg-[#f3d7c0] hover:bg-[#e98b78]" },
  { title: "Horóscopo", eyebrow: "02", text: "Moda, personalidade e inspiração para vestir a sua próxima fase.", href: "#horoscopo", color: "bg-[#e1d5ee] hover:bg-[#a98bc4]" },
  { title: "Amor", eyebrow: "03", text: "Desejo, encontros e autocuidado para escolher com o coração.", href: "#amor", color: "bg-[#f1c8ce] hover:bg-[#d97887]" },
]

const contents = {
  comportamento: [
    { title: "Quando o guarda-roupa salva o dia", text: "Você acorda atrasada, tem uma reunião importante e precisa parecer você mesma em cinco minutos. A solução não é ter mais roupa: é reconhecer as peças MALU que fazem você respirar fundo, se olhar no espelho e sair pronta para ocupar seu espaço.", href: "/magazine/materias/guarda-roupa-salva-o-dia" },
    { title: "A amiga que sempre leva uma terceira opção", text: "No café depois do trabalho, o convite muda para um jantar e você não quer voltar para casa. Um blazer leve, um vestido que acompanha o corpo e um acessório marcante transformam a mesma produção — do jeito prático e cheio de personalidade que a MALU entende.", href: "/magazine/materias/terceira-peca-para-toda-historia" },
  ],
  horoscopo: [
{ title: "Seu signo pede uma moda praia", text: "Manvar, Arsiè e as promoções do grupo VIP Amigas da Malu para vestir sua próxima fase com intenção.", href: "/magazine/materias/moda-praia-seu-signo" },
 { title: "O verão está nas estrelas", text: "Descubra uma leitura para cada signo e encontre as novidades que combinam com o seu jeito de viver o sol.", href: "/magazine/materias/verao-nas-estrelas" },
  ],
  amor: [
    { title: "Adamantina, mudanças e novos capítulos", text: "Depois de 30 anos de uma história incrível, a MALU olha para Adamantina e para tudo o que a vida ainda pode transformar.", href: "/magazine/materias/adamantina-novos-capitulos" },
    { title: "Escolher também é um ato de amor", text: "Critério, curadoria e escolhas que aproximam você de si mesma — e de quem você ama.", href: "/magazine/materias/escolher-com-amor" },
  ],
}

function EditorialSection({ id, eyebrow, title, items }: { id: string; eyebrow: string; title: string; items: { title: string; text: string; href?: string }[] }) {
  return (
    <section id={id} className="border-t-2 border-[#211b18] py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#d72f39]">{eyebrow}</p>
          <h2 className="mt-4 max-w-sm font-serif text-5xl leading-[.9] sm:text-6xl">{title}</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item, index) => (
            <article key={item.title} className="border-2 border-[#211b18] bg-[#f0d9c4] p-6">
              <span className="font-serif text-3xl text-[#d72f39]">0{index + 1}</span>
              <h3 className="mt-8 font-serif text-2xl leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#51433d]">{item.text}</p>
              <Link href={item.href ?? `#${id}`} className="mt-6 inline-flex text-xs font-bold uppercase tracking-[.18em] text-[#d72f39] hover:underline">Ler matéria →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MagazinePage() {
  return (
    <main className="min-h-screen bg-[#f7efe5] text-[#211b18]">
      <section className="relative overflow-hidden border-b-4 border-[#d72f39] bg-[#f0d9c4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.55),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-12 lg:pt-16">
          <div className="max-w-5xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[.38em] text-[#d72f39]">MALU MODAS apresenta</p>
            <h1 className="max-w-5xl font-serif text-[clamp(4rem,15vw,12rem)] leading-[.78] tracking-[-.08em] text-[#d72f39]">MALU<br /><span className="ml-[12%] text-[#211b18]">MAGAZINE</span></h1>
            <p className="mt-8 max-w-xl font-serif text-2xl italic leading-tight sm:text-3xl">A revista para quem quer vestir o desejo e viver a própria história.</p>
            <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.2em]"><Link href="/magazine/catalogo/biquinis" className="rounded-full bg-[#d72f39] px-5 py-3 text-white transition-transform hover:-translate-y-1">Abrir catálogo</Link><a href="#conteudos" className="rounded-full border-2 border-[#211b18] px-5 py-3 transition-colors hover:bg-[#211b18] hover:text-[#f7efe5]">Ler a edição</a></div>
            <div className="relative mx-auto mt-10 block aspect-[3/4] w-full max-w-[260px] rotate-2 overflow-hidden border-[8px] border-[#f7efe5] bg-white shadow-[10px_12px_0_#d72f39] lg:hidden"><Image src={coverImage} alt="Modelo usando biquíni estampado à beira da piscina" fill priority sizes="260px" className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#211b18]/80 to-transparent p-4 pt-20 text-white"><p className="text-[10px] font-bold uppercase tracking-[.2em]">Edição verão</p><p className="mt-1 font-serif text-2xl italic">Troca de coleção</p></div></div>
          </div>
        </div>
      </section>

      <section id="conteudos" className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-10 border-b-2 border-[#211b18] pb-16 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><p className="text-sm font-bold uppercase tracking-[.28em] text-[#d72f39]">Carta da redação</p><p className="max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">Situações reais, conversas honestas e um jeito MALU de encontrar estilo para a vida que acontece de verdade.</p></div>
        <div className="grid gap-4 py-12 sm:grid-cols-3">{departments.map((item) => <a key={item.title} href={item.href} className={`group border-2 border-[#211b18] p-6 transition-all hover:-translate-y-1 hover:text-[#211b18] ${item.color}`}><span className="font-serif text-4xl text-[#d72f39]">{item.eyebrow}</span><p className="mt-8 text-xs font-bold uppercase tracking-[.22em]">{item.title}</p><h2 className="mt-2 font-serif text-2xl">MALU MAGAZINE</h2><p className="mt-3 text-sm leading-relaxed opacity-75">{item.text}</p><span className="mt-6 inline-flex text-xs font-bold uppercase tracking-[.18em] underline underline-offset-4">Explorar categoria</span></a>)}</div>

        <EditorialSection id="comportamento" eyebrow="01 · Comportamento" title="A vida pede estilo" items={contents.comportamento} />
        <EditorialSection id="horoscopo" eyebrow="02 · Horóscopo" title="Vista a sua fase" items={contents.horoscopo} />
        <EditorialSection id="amor" eyebrow="03 · Amor" title="Deixe o desejo falar" items={contents.amor} />

        <TestesMalu />
      </section>

      <section className="bg-[#211b18] px-6 py-16 text-[#f7efe5] lg:px-12 lg:py-24"><div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.28em] text-[#f4a0a0]">Primeiro capítulo</p><h2 className="mt-3 max-w-2xl font-serif text-5xl leading-none sm:text-7xl">Biquínis<br /><i>troca de coleção</i></h2></div><Link href="/magazine/catalogo/biquinis" className="inline-flex w-fit rounded-full bg-[#d72f39] px-6 py-4 text-xs font-bold uppercase tracking-[.2em] transition-colors hover:bg-[#f4a0a0] hover:text-[#211b18]">Ver catálogo virtual</Link></div></section>
    </main>
  )
}
