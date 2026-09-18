import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { notFound } from "next/navigation"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getShopProduct, getWhatsappLink, shopProducts } from "@/lib/shop-products"

export function generateStaticParams() {
  return shopProducts.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getShopProduct(slug)
  if (!product) return { title: "Produto não encontrado | MALU MODAS" }
  return { title: `${product.name} | MALU MODAS`, description: `Confira ${product.name} por ${product.price} e consulte a disponibilidade pelo WhatsApp.` }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getShopProduct(slug)
  if (!product) notFound()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://malumodas.clipp.com.br"
  const whatsappUrl = getWhatsappLink(product, siteUrl)

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
          <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
        </div>
        <div className="flex flex-col items-start gap-6">
          <Link href="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft aria-hidden="true" className="size-4" />Voltar para Shop</Link>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">MALU MODAS</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-foreground lg:text-6xl">{product.name}</h1>
            <p className="mt-5 text-2xl font-medium text-foreground">{product.price}</p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Uma peça escolhida para acompanhar seus dias de sol. Consulte pelo WhatsApp a disponibilidade de tamanho e detalhes do produto.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"><MessageCircle aria-hidden="true" className="size-4" />Consultar pelo WhatsApp</a>
          <p className="text-xs text-muted-foreground">Ao clicar, a mensagem já inclui o link desta página exclusiva.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
