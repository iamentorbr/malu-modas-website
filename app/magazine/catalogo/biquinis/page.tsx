import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Biquínis — Troca de coleção | MALU MAGAZINE",
  description: "Catálogo Virtual MALU: biquínis selecionados para as amigas da MALU.",
}

const WHATSAPP_NUMBER = "5518997453135"
const WHATSAPP_MESSAGE = "QUE INCRÍVEL! Ainda está disponível na loja?"

const products = [
  { name: "Poá Riviera", detail: "Top meia-taça · Calcinha lacinho", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watermarked_img_16895249889252796812-F8BoW1vUlpKIIcdyOtN7AFfjui128W.jpg", color: "Vermelho cereja" },
  { name: "Maré Alta", detail: "Top estampado · Calcinha vinho", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1f507624-0f62-45da-b943-623e41f0317d-2MQdwB15bOrjg5VotPtmCBCqe868MS.jpg", color: "Estampa tropical" },
  { name: "Leopard Sun", detail: "Top meia-taça · Calcinha fio", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8cdd411c-9918-495a-8665-473819d50419-EulqlyHzjAyMFvC0rJRtrLSi2dolit.jpg", color: "Onça solar" },
  { name: "Positano", detail: "Top estampado · Calcinha asa delta", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9acfc54e-9ef4-4b99-81e8-c09716d6a63d-ykxYa6cSmLVqD7adM8gQazMRF8UOS8.jpg", color: "Azul mediterrâneo" },
  { name: "Flora", detail: "Top cortininha · Calcinha lacinho", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12bb90da-daec-4baf-8a6e-e77b7f487896-2Ge0FjZTG8eLaB0onylzO2tTe1a07O.jpg", color: "Floral jardim" },
  { name: "Laranja 2000", detail: "Top com amarração · Calcinha tanga", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49%2C90%20%282%29-6pJrQNUyEdauARNnGQZdohIXyMhM9C.jpg", color: "Laranja solar" },
  { name: "Étnico", detail: "Top com babados · Calcinha clássica", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/64fbc132-2c8a-4068-9d2e-9bfe7a0f19c8-0w0yWPLOMmTPStkVsmRMyJrYsvgr0x.jpg", color: "Marrom queimado" },
  { name: "Círculos", detail: "Top meia-taça · Calcinha lacinho", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/54d6ea44-85e4-44e9-9992-403ecb0f9c7c-8LGAwKRvK6KLWkrUtBaer7LMlXmW9X.jpg", color: "Terracota" },
  { name: "Patchwork", detail: "Top estruturado · Calcinha lacinho", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/47cc8cc5-8605-4e1f-8893-1d895ab6e2be-rIOIBAxa4lPJHHLQUZY0cQrCwvxcui.jpg", color: "Multicolor" },
  { name: "Azul Capri", detail: "Top triângulo · Calcinha tanga", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84803b61-8ced-4d64-9b49-d068dbecaed3-iKvS9bNfEY7pSfRRhuHqthz6J9C2x9.jpg", color: "Azul piscina" },
  { name: "Rosa Pop", detail: "Top estruturado · Calcinha lacinho", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/85a6727c-c501-446b-b6b5-0a9ae9bcdf14-N6UcemLtap578uf7s7fGOkz1ZDm51G.jpg", color: "Rosa chiclete" },
  { name: "Tropicalia", detail: "Top meia-taça · Calcinha tanga", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/539876f0-ae70-44fc-8c70-da1467a61a8b-hCOiAQCVjcMgZ518WbxGWDUJ8Sjobc.jpg", color: "Floral tropical" },
]

export default function BiquinisPage() {
  return (
    <main className="min-h-screen bg-[#f7efe5] text-[#211b18]">
      <header className="border-b-2 border-[#211b18] bg-[#d72f39] px-6 py-5 text-white lg:px-12"><div className="mx-auto flex max-w-7xl items-center justify-between"><Link href="/magazine" className="text-xs font-bold uppercase tracking-[.25em] hover:opacity-75">← MALU MAGAZINE</Link><span className="font-serif text-2xl italic">Catálogo Virtual</span><span className="hidden text-xs font-bold uppercase tracking-[.2em] sm:block">Amigas da MALU</span></div></header>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-12 lg:pb-20 lg:pt-24"><div className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.35em] text-[#d72f39]">Edição 01 · Troca de coleção</p><h1 className="mt-5 font-serif text-6xl leading-[.85] tracking-[-.05em] sm:text-8xl">BIQUÍNIS<br /><i className="text-[#d72f39]">para vestir o desejo</i></h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#51433d]">Uma seleção especial para as amigas da MALU. Salve seus favoritos, compartilhe com a gente e venha descobrir a peça que tem a sua cara.</p></div><div className="mt-12 flex flex-wrap gap-2 border-y-2 border-[#211b18] py-4 text-xs font-bold uppercase tracking-[.18em]"><span className="bg-[#211b18] px-4 py-2 text-[#f7efe5]">12 peças</span><span className="px-4 py-2">Verão 2026</span><span className="px-4 py-2">MALU MODAS</span></div></section>
      <section className="mx-auto grid max-w-7xl gap-x-5 gap-y-12 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">{products.map((product, index) => <article key={product.name} className="group"><div className="relative aspect-[3/4] overflow-hidden bg-[#ead9ca]"><Image src={product.image} alt={`${product.name}, biquíni ${product.color}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-[#f7efe5] px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em]">0{index + 1}</span></div><div className="flex items-start justify-between gap-4 border-b border-[#211b18] py-4"><div><h2 className="font-serif text-2xl">{product.name}</h2><p className="mt-1 text-xs uppercase tracking-[.12em] text-[#51433d]">{product.detail}</p><p className="mt-2 text-xs text-[#d72f39]">{product.color}</p></div><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border border-[#211b18] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] transition-colors hover:bg-[#211b18] hover:text-[#f7efe5]" aria-label={`Tenho interesse em ${product.name} pelo WhatsApp`}>Quero</a></div></article>)}</section>
      <section className="bg-[#211b18] px-6 py-16 text-center text-[#f7efe5] lg:px-12 lg:py-24"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#f4a0a0]">Gostou de algum?</p><h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">Mande um print para a sua vendedora ou fale com a MALU.</h2><a href="https://wa.me/5518997453135" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#d72f39] px-6 py-4 text-xs font-bold uppercase tracking-[.2em] hover:bg-[#f4a0a0] hover:text-[#211b18]">Falar com a MALU</a></section>
    </main>
  )
}
