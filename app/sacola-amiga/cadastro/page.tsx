import type { Metadata } from "next"
import Link from "next/link"
import FormularioCadastro from "../vendedora/formulario-cadastro"

export const metadata: Metadata = {
  title: "Cadastro | Sacola Amiga — MALU MODAS",
  description: "Cadastre-se na Sacola Amiga da MALU MODAS.",
}

type CadastroPageProps = {
  searchParams: Promise<{ vendedora?: string }>
}

export default async function CadastroPage({ searchParams }: CadastroPageProps) {
  const params = await searchParams
  const nomeVendedora = params.vendedora?.trim() || "Malu"

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <Link href="/sacola-amiga" className="text-xs uppercase tracking-[.2em] text-accent hover:opacity-80">
            Sacola Amiga
          </Link>
          <h1 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">Seu cadastro personalizado</h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Preencha seus dados para que {nomeVendedora} possa preparar uma seleção especial para você.
          </p>
        </div>
        <FormularioCadastro nomeVendedora={nomeVendedora} />
      </div>
    </main>
  )
}
