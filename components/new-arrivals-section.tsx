"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const products = [
  {
    name: "Vestido Floral Resort",
    price: "R$ 489,90",
    image: "/images/new-arrival-1.jpg",
    tag: "Novo",
  },
  {
    name: "Conjunto Alfaiataria Areia",
    price: "R$ 599,90",
    image: "/images/new-arrival-2.jpg",
    tag: "Novo",
  },
  {
    name: "Conjunto Terracotta",
    price: "R$ 379,90",
    image: "/images/new-arrival-3.jpg",
    tag: "Novo",
  },
  {
    name: "Vestido Tricot Dourado",
    price: "R$ 459,90",
    image: "/images/new-arrival-4.jpg",
    tag: "Tendencia",
  },
]

export function NewArrivalsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="novidades" className="py-20 lg:py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
              Recem Chegados
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
              Novidades
            </h2>
          </div>
          <Link
            href="#"
            className="text-xs tracking-[0.25em] uppercase text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors font-sans self-start md:self-auto"
          >
            Ver Tudo
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, idx) => (
            <Link
              key={product.name}
              href="#"
              className="group"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] tracking-[0.15em] uppercase px-3 py-1 font-sans">
                    {product.tag}
                  </span>
                )}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground text-center py-3 text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 ${
                    hoveredIdx === idx ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                >
                  Adicionar a Sacola
                </div>
              </div>
              <h3 className="font-sans text-sm text-foreground mb-1">{product.name}</h3>
              <p className="font-sans text-sm text-muted-foreground">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
