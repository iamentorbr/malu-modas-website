import { ShopCatalog } from "@/components/shop/shop-catalog"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { shopProducts } from "@/lib/shop-products"

export const metadata = {
  title: "Shop | MALU MODAS",
  description: "Conheça a curadoria de moda da MALU MODAS e fale com a gente pelo WhatsApp para consultar disponibilidade.",
}

const products = shopProducts

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
        <ShopCatalog products={products} />
      </section>
      <Footer />
    </main>
  )
}
