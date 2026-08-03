import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Shop | MALU MODAS",
  description: "Compre as peças da MALU MODAS direto pela nossa loja online. Moda feminina plus size com curadoria de amiga pra amiga.",
}

export default function ShopPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:py-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Loja online</span>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-foreground lg:text-5xl text-balance">
            Shop MALU
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
            Peças selecionadas com carinho, de amiga pra amiga. Escolha a sua e finalize a compra com toda segurança.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-md rounded-sm border border-border bg-background p-10 text-center">
          <h2 className="font-serif text-xl text-foreground">Em breve na loja</h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
            Estamos preparando nossa vitrine online. Volte em breve para conferir as novidades da MALU.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
