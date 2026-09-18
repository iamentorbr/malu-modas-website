import Image from "next/image"
import Link from "next/link"

const tests = [
  { slug: "estilo", number: "01", eyebrow: "Comportamento", title: "Teste seu estilo de verdade", text: "Descubra o que sua rotina já sabe sobre você.", image: "/magazine/teste-estilo.png" },
  { slug: "horoscopo", number: "02", eyebrow: "Horóscopo", title: "Seu look nas estrelas", text: "Vista a fase que está começando.", image: "/magazine/teste-horoscopo.png" },
  { slug: "amor", number: "03", eyebrow: "Amor", title: "Amor à primeira vista", text: "Escute o que o seu coração quer vestir.", image: "/magazine/teste-amor.png" },
]

export function TestesMalu() {
  return <section id="testes" className="mt-8 border-2 border-[#d72f39] bg-[#d72f39] p-6 text-white sm:p-10 lg:p-12"><div className="flex flex-col gap-4 border-b border-white/30 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.28em] text-[#f7efe5]">Testes MALU</p><h2 className="mt-3 max-w-3xl font-serif text-4xl leading-none sm:text-6xl">Descubra o seu jeito MALU.</h2></div><p className="max-w-xs text-sm leading-relaxed text-white/80">Escolha um teste, responda dez perguntas e receba uma leitura feita para o seu momento.</p></div><div className="mt-8 grid gap-4 md:grid-cols-3">{tests.map((test) => <Link key={test.slug} href={`/magazine/testes/${test.slug}`} className="group overflow-hidden bg-[#f0d9c4] text-[#211b18] transition-transform hover:-translate-y-1"><div className="relative aspect-[4/3] overflow-hidden"><Image src={test.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 font-serif text-4xl text-white drop-shadow">{test.number}</span></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-[.18em] opacity-70">{test.eyebrow}</p><h3 className="mt-3 font-serif text-2xl leading-tight">{test.title}</h3><p className="mt-2 text-sm opacity-75">{test.text}</p><span className="mt-6 inline-block text-xs font-bold uppercase tracking-[.18em] text-[#d72f39]">Começar teste →</span></div></Link>)}</div></section>
}
