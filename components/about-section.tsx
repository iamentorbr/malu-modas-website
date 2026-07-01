import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Interior da loja Malu Modas em Adamantina"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3 font-sans">
              Nossa Historia
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance leading-tight">
              Estilo e Elegancia em Adamantina
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans text-sm leading-relaxed">
              <p>
                A Malu Modas nasceu do sonho de levar moda feminina de qualidade para Adamantina e toda a regiao. 
                Com uma curadoria cuidadosa de pecas que unem tendencias atuais com a elegancia atemporal, 
                oferecemos uma experiencia de compra unica.
              </p>
              <p>
                Cada peca em nossa loja e selecionada pensando na mulher moderna que busca 
                sofisticacao sem abrir mao do conforto. Das estampas tropicais vibrantes aos 
                tons neutros classicos, nossa colecao reflete a beleza e a forca da mulher brasileira.
              </p>
              <p>
                Venha nos visitar e descubra o seu proximo look favorito. Estamos no coracao de 
                Adamantina, prontas para te receber com carinho e estilo.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div className="text-center">
                <p className="font-serif text-2xl lg:text-3xl text-foreground">30+</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1 font-sans">Anos</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl lg:text-3xl text-foreground">10k+</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1 font-sans">Clientes</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl lg:text-3xl text-foreground">500+</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1 font-sans">Pecas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
