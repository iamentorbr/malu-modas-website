import type { Metadata } from "next"
import Link from "next/link"
import { ShoppingBag, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Sacola Amiga | MALU MODAS",
  description: "Cadastro de clientes para a Sacola Condicional da MALU MODAS.",
}

export default function SacolaAmigaPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-foreground mb-5">
            <ShoppingBag className="h-6 w-6 text-accent" />
          </div>
          <h1 className="font-serif text-4xl text-foreground leading-tight tracking-tight text-balance">
            Sacola <span className="italic text-accent">Amiga</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto text-pretty">
            Cadastro de clientes para receber a sacola condicional da MALU MODAS. De amiga pra amiga.
          </p>
        </div>

        {/* Cards de acesso */}
        <div className="space-y-3">
          <Link
            href="/sacola-amiga/vendedora"
            className="flex items-center gap-4 rounded-sm border border-border bg-card px-5 py-5 hover:bg-secondary/30 hover:border-foreground/20 transition-all group"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
              <Users className="h-5 w-5 text-foreground" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground">Acesso Vendedora</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Cadastrar e consultar clientes da sacola
              </p>
            </div>
            <svg className="ml-auto h-4 w-4 text-muted-foreground flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/sacola-amiga/admin"
            className="flex items-center gap-4 rounded-sm border border-border bg-card px-5 py-5 hover:bg-secondary/30 hover:border-foreground/20 transition-all group"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
              <Shield className="h-5 w-5 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground">Acesso Admin</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Visualizar, editar e gerenciar todos os cadastros
              </p>
            </div>
            <svg className="ml-auto h-4 w-4 text-muted-foreground flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          MALU MODAS · Adamantina, SP
        </p>
      </div>
    </div>
  )
}
