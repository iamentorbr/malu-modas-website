"use client"

import { useState, useTransition } from "react"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { createCheckout } from "@/app/shop/actions"
import { formatPrice, type ShopifyProduct } from "@/lib/shopify"

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState("")

  const buy = () => {
    if (!product.variantId || !product.availableForSale) return
    setError("")
    startTransition(async () => {
      const { url, error } = await createCheckout(product.variantId!)
      if (url) {
        if (typeof window !== "undefined" && window.self !== window.top) {
          window.open(url, "_blank")
        } else {
          window.location.href = url
        }
      } else {
        setError(error ?? "Erro ao comprar.")
      }
    })
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-border bg-background">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url || "/placeholder.svg"}
            alt={product.featuredImage.altText ?? product.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <ShoppingBag className="h-8 w-8" />
          </div>
        )}
        {!product.availableForSale && (
          <span className="absolute left-3 top-3 rounded-full bg-foreground/80 px-3 py-1 text-[10px] uppercase tracking-widest text-background">
            Esgotado
          </span>
        )}
        {product.compareAtPrice && product.availableForSale && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-widest text-accent-foreground">
            Oferta
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-base leading-snug text-foreground text-pretty">{product.title}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-sans text-sm font-semibold text-foreground">
            {formatPrice(product.price.amount, product.price.currencyCode)}
          </span>
          {product.compareAtPrice && (
            <span className="font-sans text-xs text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice.amount, product.compareAtPrice.currencyCode)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={buy}
          disabled={isPending || !product.availableForSale || !product.variantId}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ShoppingBag className="h-4 w-4" />
          {isPending ? "Aguarde..." : product.availableForSale ? "Comprar" : "Esgotado"}
        </button>
        {error && <p className="mt-2 text-center text-xs text-destructive">{error}</p>}
      </div>
    </div>
  )
}
