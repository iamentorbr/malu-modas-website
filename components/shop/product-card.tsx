import Image from "next/image"
import { ShoppingBag } from "lucide-react"

export type ProductCard = {
  id: string
  title: string
  featuredImage: { url: string; altText: string | null } | null
  price: string
  compareAtPrice?: string | null
  availableForSale: boolean
}

export function ProductCard({ product }: { product: ProductCard }) {
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
          <span className="font-sans text-sm font-semibold text-foreground">{product.price}</span>
          {product.compareAtPrice && (
            <span className="font-sans text-xs text-muted-foreground line-through">{product.compareAtPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}
