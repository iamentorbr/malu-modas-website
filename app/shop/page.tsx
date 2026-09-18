import Image from "next/image"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Shop | MALU MODAS",
  description: "Conheça a curadoria de moda da MALU MODAS e fale com a gente pelo WhatsApp para consultar disponibilidade.",
}

const whatsappNumber = "5518997453135"
const products = [
  { slug: "biquini-tigre", name: "Biquíni estampa tigre", price: "R$ 49,90", image: "/products/biquini-tigre.png" },
  { slug: "biquini-estampado", name: "Biquíni estampa tropical", price: "R$ 49,90", image: "/products/biquini-estampado.png" },
  { slug: "biquini-verde", name: "Biquíni verde militar", price: "R$ 49,90", image: "/products/biquini-verde.png" },
  { slug: "biquini-azul", name: "Biquíni azul intenso", price: "R$ 49,90", image: "/products/biquini-azul.png" },
  { slug: "biquini-laranja", name: "Biquíni laranja solar", price: "R$ 49,90", image: "/products/biquini-laranja.png" },
  { slug: "biquini-preto-laranja", name: "Biquíni preto e laranja", price: "R$ 49,90", image: "/products/biquini-preto-laranja.png" },
]

function whatsappLink(slug: string, name: string) {
  const productUrl = `https://malumodas.clipp.com.br/shop#${slug}`
  const message = `Olá, tenho interesse nesse produto, ainda está disponível?\n${name}\n${productUrl}`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function ShopPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Loja online</span>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight text-foreground lg:text-6xl text-balance">Escolhas que combinam com você</h1>
          <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground text-pretty">Explore nossa curadoria e consulte a disponibilidade de cada peça diretamente pelo WhatsApp.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Curadoria MALU</p>
            <h2 className="mt-2 font-serif text-2xl text-foreground lg:text-3xl">Peças em destaque</h2>
          </div>
          <p className="hidden text-right text-xs text-muted-foreground sm:block">Fale com a gente para confirmar tamanho e disponibilidade.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article id={product.slug} key={product.slug} className="group overflow-hidden rounded-sm border border-border bg-background">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div><h3 className="font-serif text-lg text-foreground">{product.name}</h3><p className="mt-1 text-sm font-medium text-foreground">{product.price}</p></div>
                  <ArrowUpRight aria-hidden="true" className="size-5 text-muted-foreground" />
                </div>
                <a href={whatsappLink(product.slug, product.name)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"><MessageCircle aria-hidden="true" className="size-4" />Consultar pelo WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
