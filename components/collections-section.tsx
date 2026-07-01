import Image from "next/image"
import Link from "next/link"

const collections = [
  {
    title: "Vestidos",
    subtitle: "A peca perfeita para cada ocasiao",
    image: "/images/collection-vestidos.jpg",
    href: "#",
  },
  {
    title: "Conjuntos",
    subtitle: "Elegancia coordenada",
    image: "/images/collection-conjuntos.jpg",
    href: "#",
  },
  {
    title: "Acessorios",
    subtitle: "Detalhes que transformam",
    image: "/images/collection-acessorios.jpg",
    href: "#",
  },
]

export function CollectionsSection() {
  return (
    <section id="colecoes" className="py-20 lg:py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
            Nossas Colecoes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            Curadoria Exclusiva
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={col.image || "/placeholder.svg"}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-all duration-500 group-hover:bg-foreground/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <h3 className="font-serif text-2xl text-background mb-1">{col.title}</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-background/70 font-sans">
                  {col.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
