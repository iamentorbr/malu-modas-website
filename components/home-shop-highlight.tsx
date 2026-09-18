import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { shopProducts } from "@/lib/shop-products"

const featuredProducts = shopProducts.slice(0, 3)

export function HomeShopHighlight() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Malu Shop</p>
          <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Seu próximo look começa aqui
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Descubra a curadoria de moda praia da MALU, com peças escolhidas para acompanhar seus dias de sol.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-foreground px-6 py-4 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Explorar o Shop
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {featuredProducts.map((product) => (
            <Link key={product.slug} href={`/shop/${product.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-background">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 30vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif text-sm text-foreground sm:text-base">{product.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{product.price}</p>
                </div>
                <ArrowRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
