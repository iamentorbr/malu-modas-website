import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Malu Modas - Colecao Resort"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs tracking-[0.4em] uppercase text-background/80 mb-4 font-sans animate-fade-in-up">
          Nova Colecao 2026
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background max-w-3xl leading-tight text-balance animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Elegancia que Floresce
        </h1>
        <p className="mt-4 text-sm md:text-base text-background/80 max-w-md font-sans leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Descubra pecas unicas inspiradas na beleza tropical brasileira
        </p>
        <Link
          href="#colecoes"
          className="mt-8 inline-block border border-background text-background px-10 py-3 text-xs tracking-[0.25em] uppercase hover:bg-background hover:text-foreground transition-all duration-300 font-sans animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Explorar Colecao
        </Link>
      </div>
    </section>
  )
}
