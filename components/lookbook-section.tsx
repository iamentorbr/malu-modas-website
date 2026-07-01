import Image from "next/image"
import Link from "next/link"

export function LookbookSection() {
  return (
    <section id="lookbook" className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <Image
        src="/images/lookbook.jpg"
        alt="Lookbook Malu Modas"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs tracking-[0.4em] uppercase text-background/80 mb-4 font-sans">
          Inspire-se
        </p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-background max-w-2xl text-balance leading-tight">
          Lookbook Verao 2026
        </h2>
        <p className="mt-4 text-sm text-background/80 max-w-md font-sans leading-relaxed">
          Descubra como combinar as pecas da nova colecao e crie looks incriveis para cada momento
        </p>
        <Link
          href="#"
          className="mt-8 inline-block bg-background text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-sans"
        >
          Ver Lookbook
        </Link>
      </div>
    </section>
  )
}
