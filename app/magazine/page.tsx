import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MALU MAGAZINE | Moda, comportamento e desejo",
  description: "Conteúdos da MALU MAGAZINE sobre estilo, horóscopo e amor, com testes para descobrir as novidades que combinam com você.",
}

const coverImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12bb90da-daec-4baf-8a6e-e77b7f487896-2Ge0FjZTG8eLaB0onylzO2tTe1a07O.jpg"
const whatsappNumber = "5518997453135"
const testMessage = "CRIS, Acabei de responder o teste na MALU MAGAZINE e quero muito receber as novidades baseadas no meu perfil! Me ajuuuuuuuuda! ❤️😍"
const testWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(testMessage)}`

const departments = [
  { title: "Teste seu estilo", eyebrow: "Comportamento", text: "Você é clássica, solar, romântica ou a amiga que sempre ousa primeiro?", href: "#comportamento" },
  { title: "Seu look nas estrelas", eyebrow: "Horóscopo", text: "Uma leitura fashion para vestir a sua próxima fase.", href: "#horoscopo" },
  { title: "Amor à primeira vista", eyebrow: "Amor", text: "Peças, encontros e pequenos sinais para deixar o desejo falar.", href: "#amor" },
]

const contents = {
  comportamento: [
    { title: "Quando o guarda-roupa salva o dia", text: "Você acorda atrasada, tem uma reunião importante e precisa parecer você mesma em cinco minutos. A solução não é ter mais roupa: é reconhecer as peças MALU que fazem você respirar fundo, se olhar no espelho e sair pronta para ocupar seu espaço." },
    { title: "A amiga que sempre leva uma terceira opção", text: "No café depois do trabalho, o convite muda para um jantar e você não quer voltar para casa. Um blazer leve, um vestido que acompanha o corpo e um acessório marcante transformam a mesma produção — do jeito prático e cheio de personalidade que a MALU entende." },
  ],
  horoscopo: [
    { title: "Mercúrio pede praticidade", text: "A agenda está cheia: trânsito, mensagens sem resposta e uma apresentação no fim do dia. Escolha uma produção que trabalhe por você, com conforto e presença. Na curadoria da MALU, cada detalhe ajuda a deixar a rotina mais leve." },
    { title: "Vênus abriu espaço para a cor", text: "Você entra na loja pensando em comprar o básico e sai apaixonada por uma cor que nunca usou. Talvez seja exatamente a mudança que a sua próxima fase estava pedindo — e a MALU está aqui para encontrar a peça que faz sentido para o seu momento." },
  ],
  amor: [
    { title: "O encontro que começa no improviso", text: "Era só um café rápido, mas ele virou passeio, conversa longa e aquele desejo de prolongar a noite. Vista algo que acompanhe todos os seus planos — uma escolha MALU para quando a melhor parte da história não estava no roteiro." },
    { title: "Amor também é se escolher", text: "Tem dias em que o convite é ficar em casa, colocar sua música favorita e se arrumar só para você. O look mais importante é aquele que devolve sua confiança, e a MALU celebra cada versão sua, com ou sem testemunhas." },
  ],
}

function EditorialSection({ id, eyebrow, title, items }: { id: string; eyebrow: string; title: string; items: { title: string; text: string }[] }) {
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
              <p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[#d72f39]">MALU por perto</p>
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
        <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-6 pb-16 pt-10 lg:grid-cols-[1fr_0.75fr] lg:px-12 lg:pt-16">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-xs font-bold uppercase tracking-[.38em] text-[#d72f39]">MALU MODAS apresenta</p>
            <h1 className="max-w-3xl font-serif text-[clamp(4rem,12vw,11rem)] leading-[.78] tracking-[-.08em] text-[#d72f39]">MALU<br /><span className="ml-[12%] text-[#211b18]">MAGAZINE</span></h1>
            <p className="mt-8 max-w-xl font-serif text-2xl italic leading-tight sm:text-3xl">A revista para quem quer vestir o desejo e viver a própria história.</p>
            <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.2em]"><Link href="/magazine/catalogo/biquinis" className="rounded-full bg-[#d72f39] px-5 py-3 text-white transition-transform hover:-translate-y-1">Abrir catálogo</Link><a href="#conteudos" className="rounded-full border-2 border-[#211b18] px-5 py-3 transition-colors hover:bg-[#211b18] hover:text-[#f7efe5]">Ler a edição</a></div>
          </div>
          <div className="relative order-1 mx-auto aspect-[3/4] w-full max-w-md rotate-2 overflow-hidden border-[10px] border-[#f7efe5] bg-white shadow-[16px_18px_0_#d72f39] lg:order-2"><Image src={coverImage} alt="Modelo usando biquíni estampado à beira da piscina" fill priority sizes="(max-width: 1024px) 90vw, 35vw" className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#211b18]/80 to-transparent p-6 pt-28 text-white"><p className="text-xs font-bold uppercase tracking-[.25em]">Edição verão</p><p className="mt-1 font-serif text-3xl italic">Troca de coleção</p></div></div>
        </div>
      </section>

      <section id="conteudos" className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-10 border-b-2 border-[#211b18] pb-16 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><p className="text-sm font-bold uppercase tracking-[.28em] text-[#d72f39]">Carta da redação</p><p className="max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">Situações reais, conversas honestas e um jeito MALU de encontrar estilo para a vida que acontece de verdade.</p></div>
        <div className="grid gap-4 py-12 sm:grid-cols-3">{departments.map((item, index) => <a key={item.title} href={item.href} className="group border-2 border-[#211b18] bg-[#f0d9c4] p-6 transition-all hover:-translate-y-1 hover:bg-[#d72f39] hover:text-white"><span className="font-serif text-4xl text-[#d72f39] group-hover:text-white">0{index + 1}</span><p className="mt-8 text-xs font-bold uppercase tracking-[.22em]">{item.eyebrow}</p><h2 className="mt-2 font-serif text-2xl">{item.title}</h2><p className="mt-3 text-sm leading-relaxed opacity-75">{item.text}</p></a>)}</div>

        <EditorialSection id="comportamento" eyebrow="01 · Comportamento" title="A vida pede estilo" items={contents.comportamento} />
        <EditorialSection id="horoscopo" eyebrow="02 · Horóscopo" title="Vista a sua fase" items={contents.horoscopo} />
        <EditorialSection id="amor" eyebrow="03 · Amor" title="Deixe o desejo falar" items={contents.amor} />

        <section id="testes" className="mt-8 border-2 border-[#d72f39] bg-[#d72f39] p-8 text-white sm:p-12"><p className="text-xs font-bold uppercase tracking-[.28em] text-[#f7efe5]">Testes MALU</p><h2 className="mt-3 max-w-3xl font-serif text-4xl leading-none sm:text-6xl">Responda, descubra e receba novidades feitas para você.</h2><div className="mt-8 grid gap-4 md:grid-cols-3"><div className="bg-[#f0d9c4] p-5 text-[#211b18]"><p className="text-xs font-bold uppercase tracking-[.18em]">Teste 01</p><h3 className="mt-2 font-serif text-2xl">Qual é a sua energia hoje?</h3><p className="mt-2 text-sm">Clássica, solar, romântica ou ousada?</p></div><div className="bg-[#f0d9c4] p-5 text-[#211b18]"><p className="text-xs font-bold uppercase tracking-[.18em]">Teste 02</p><h3 className="mt-2 font-serif text-2xl">Que look combina com sua fase?</h3><p className="mt-2 text-sm">Conforto, cor, brilho ou uma nova história?</p></div><div className="bg-[#f0d9c4] p-5 text-[#211b18]"><p className="text-xs font-bold uppercase tracking-[.18em]">Teste 03</p><h3 className="mt-2 font-serif text-2xl">O que seu coração escolheria?</h3><p className="mt-2 text-sm">Um encontro, um recomeço ou você?</p></div></div><a href={testWhatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#211b18] px-6 py-4 text-center text-xs font-bold uppercase tracking-[.2em] text-white transition-transform hover:-translate-y-1">Quero receber as novidades da MALU</a></section>
      </section>

      <section className="bg-[#211b18] px-6 py-16 text-[#f7efe5] lg:px-12 lg:py-24"><div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.28em] text-[#f4a0a0]">Primeiro capítulo</p><h2 className="mt-3 max-w-2xl font-serif text-5xl leading-none sm:text-7xl">Biquínis<br /><i>troca de coleção</i></h2></div><Link href="/magazine/catalogo/biquinis" className="inline-flex w-fit rounded-full bg-[#d72f39] px-6 py-4 text-xs font-bold uppercase tracking-[.2em] transition-colors hover:bg-[#f4a0a0] hover:text-[#211b18]">Ver catálogo virtual</Link></div></section>
    </main>
  )
}
