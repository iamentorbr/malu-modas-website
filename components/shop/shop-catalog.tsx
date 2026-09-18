"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import type { ShopProduct } from "@/lib/shop-products"

type ShopCatalogProps = {
  products: ShopProduct[]
}

const priceFilters = ["Todos", "R$ 49,90", "R$ 79,90"]

export function ShopCatalog({ products }: ShopCatalogProps) {
  const [selectedPrice, setSelectedPrice] = useState("Todos")
  const filteredProducts = selectedPrice === "Todos" ? products : products.filter((product) => product.price === selectedPrice)

  return (
    <>
      <div className="mb-10 flex flex-col gap-6 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Categoria</p>
          <h2 className="mt-2 font-serif text-2xl text-foreground lg:text-3xl">Moda praia</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <SlidersHorizontal aria-hidden="true" className="size-4" /> Filtrar por preço
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar biquínis por preço">
            {priceFilters.map((price) => (
              <button
                key={price}
                type="button"
                onClick={() => setSelectedPrice(price)}
                aria-pressed={selectedPrice === price}
                className={`rounded-sm border px-4 py-2 text-xs transition-colors ${selectedPrice === price ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:bg-secondary"}`}
              >
                {price}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Moda praia</p>
          <h3 className="mt-2 font-serif text-2xl text-foreground lg:text-3xl">Biquínis</h3>
        </div>
        <p className="text-right text-xs text-muted-foreground">{filteredProducts.length} {filteredProducts.length === 1 ? "produto" : "produtos"}</p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.slug} className="group overflow-hidden rounded-sm border border-border bg-background">
              <Link href={`/shop/${product.slug}`} aria-label={`Ver detalhes de ${product.name}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </Link>
              <div className="flex flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div><Link href={`/shop/${product.slug}`} className="font-serif text-lg text-foreground hover:underline">{product.name}</Link><p className="mt-1 text-sm font-medium text-foreground">{product.price}</p></div>
                  <ArrowUpRight aria-hidden="true" className="size-5 text-muted-foreground" />
                </div>
                <Link href={`/shop/${product.slug}`} className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"><ArrowUpRight aria-hidden="true" className="size-4" />Ver produto</Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-border px-6 py-16 text-center">
          <p className="font-serif text-2xl text-foreground">Nenhum biquíni nesta faixa</p>
          <p className="mt-2 text-sm text-muted-foreground">Escolha outra faixa de preço para ver os produtos disponíveis.</p>
        </div>
      )}
    </>
  )
}
