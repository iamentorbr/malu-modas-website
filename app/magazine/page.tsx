import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MALU MAGAZINE | Moda, comportamento e desejo",
  description: "A revista digital da MALU MODAS: moda, amor, horóscopo, testes e o Catálogo Virtual MALU.",
}

const coverImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12bb90da-daec-4baf-8a6e-e77b7f487896-2Ge0FjZTG8eLaB0onylzO2tTe1a07O.jpg"

const departments = [
  { title: "Teste seu estilo", eyebrow: "Comportamento", text: "Você é clássica, solar, romântica ou a amiga que sempre ousa primeiro?", href: "#testes" },
  { title: "Seu look nas estrelas", eyebrow: "Horóscopo", text: "Uma leitura fashion para vestir a sua próxima fase.", href: "#horoscopo" },
  { title: "Amor à primeira vista", eyebrow: "Amor", text: "Peças, encontros e pequenos sinais para deixar o desejo falar.", href: "#amor" },
]

export default function MagazinePage() {
  return (
    <main className="min-h-screen bg-[#f7efe5] text-[#211b18]">
      <section className="relative overflow-hidden border-b-4 border-[#d72f39] bg-[#f0d9c4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.55),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-6 pb-16 pt-10 lg:grid-cols-[1fr_0.75fr] lg:px-12 lg:pt-16">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.38em] text-[#d72f39]">MALU MODAS apresenta</p>
            <h1 className="max-w-3xl font-serif text-[clamp(4rem,12vw,11rem)] leading-[.78] tracking-[-.08em] text-[#d72f39]">MALU<br /><span className="ml-[12%] text-[#211b18]">MAGAZINE</span></h1>
            <p className="mt-8 max-w-xl font-serif text-2xl italic leading-tight sm:text-3xl">A revista para quem quer vestir o desejo e viver a própria história.</p>
            <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.2em]">
              <Link href="/magazine/catalogo/biquinis" className="rounded-full bg-[#d72f39] px-5 py-3 text-white transition-transform hover:-translate-y-1">Abrir catálogo</Link>
              <a href="#editorial" className="rounded-full border-2 border-[#211b18] px-5 py-3 transition-colors hover:bg-[#211b18] hover:text-[#f7efe5]">Ler a edição</a>
            </div>
          </div>
          <div className="relative order-1 mx-auto aspect-[3/4] w-full max-w-md rotate-2 overflow-hidden border-[10px] border-[#f7efe5] bg-white shadow-[16px_18px_0_#d72f39] lg:order-2">
            <Image src={coverImage} alt="Modelo usando biquíni estampado à beira da piscina" fill priority sizes="(max-width: 1024px) 90vw, 35vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#211b18]/80 to-transparent p-6 pt-28 text-white"><p className="text-xs font-bold uppercase tracking-[.25em]">Edição verão</p><p className="mt-1 font-serif text-3xl italic">Troca de coleção</p></div>
          </div>
        </div>
      </section>

      <section id="editorial" className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-10 border-b-2 border-[#211b18] pb-16 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <p className="text-sm font-bold uppercase tracking-[.28em] text-[#d72f39]">Carta da redação</p>
          <p className="max-w-4xl font-serif text-3xl leading-tight sm:text-5xl">Pensando em vocês — e para não enchermos o celular das nossas amigas de fotos — criamos o Catálogo Virtual MALU.</p>
        </div>
        <div className="grid gap-8 py-12 text-base leading-relaxed text-[#51433d] lg:grid-cols-2">
          <p>Vamos compartilhar nossas peças no Shop, Instagram e E-commerce, sempre pensando na comodidade, segurança e qualidade do serviço que prestamos a vocês.</p>
          <p>Queremos que vocês queiram acessar nosso conteúdo, vestir nossas marcas e estar conosco sempre. Buscamos tecnologia, processos e formas de levar até vocês tudo que a MALU tem de melhor: <strong className="text-[#211b18]">as melhores marcas para vestir o seu desejo.</strong></p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {departments.map((item, index) => <a key={item.title} href={item.href} className="group border-2 border-[#211b18] bg-[#f0d9c4] p-6 transition-all hover:-translate-y-1 hover:bg-[#d72f39] hover:text-white"><span className="font-serif text-4xl text-[#d72f39] group-hover:text-white">0{index + 1}</span><p className="mt-8 text-xs font-bold uppercase tracking-[.22em]">{item.eyebrow}</p><h2 className="mt-2 font-serif text-2xl">{item.title}</h2><p className="mt-3 text-sm leading-relaxed opacity-75">{item.text}</p></a>)}
        </div>
      </section>

      <section className="bg-[#211b18] px-6 py-16 text-[#f7efe5] lg:px-12 lg:py-24"><div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.28em] text-[#f4a0a0]">Primeiro capítulo</p><h2 className="mt-3 max-w-2xl font-serif text-5xl leading-none sm:text-7xl">Biquínis<br /><i>troca de coleção</i></h2></div><Link href="/magazine/catalogo/biquinis" className="inline-flex w-fit rounded-full bg-[#d72f39] px-6 py-4 text-xs font-bold uppercase tracking-[.2em] transition-colors hover:bg-[#f4a0a0] hover:text-[#211b18]">Ver catálogo virtual</Link></div></section>
    </main>
  )
}
