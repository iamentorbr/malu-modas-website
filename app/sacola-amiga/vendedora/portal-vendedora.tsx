"use client"

import { useState } from "react"
import { LogOut, PlusCircle, List, ShoppingBag } from "lucide-react"
import FormularioCadastro from "./formulario-cadastro"
import ListaClientes from "./lista-clientes"
import type { SacolaAmiga } from "@/lib/sacola-amiga/types"

type Tab = "cadastrar" | "lista"

export default function PortalVendedora({
  nomeVendedora,
  clientesIniciais,
  onLogout,
}: {
  nomeVendedora: string
  clientesIniciais: SacolaAmiga[]
  onLogout: () => void
}) {
  const [tab, setTab] = useState<Tab>("cadastrar")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-accent" />
            <div>
              <span className="font-serif text-base leading-none text-foreground">Sacola Amiga</span>
              <span className="hidden sm:inline text-xs text-muted-foreground ml-2">· {nomeVendedora}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 flex">
          <button
            type="button"
            onClick={() => setTab("cadastrar")}
            className={`flex items-center gap-1.5 px-1 py-3.5 text-xs font-semibold uppercase tracking-[.12em] border-b-2 transition-colors mr-6 ${
              tab === "cadastrar"
                ? "border-accent text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <PlusCircle className="h-3.5 w-3.5" />
            Novo Cadastro
          </button>
          <button
            type="button"
            onClick={() => setTab("lista")}
            className={`flex items-center gap-1.5 px-1 py-3.5 text-xs font-semibold uppercase tracking-[.12em] border-b-2 transition-colors ${
              tab === "lista"
                ? "border-accent text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <List className="h-3.5 w-3.5" />
            Minhas Clientes
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="mx-auto max-w-2xl px-4 sm:px-6 py-8">
        {tab === "cadastrar" ? (
          <FormularioCadastro nomeVendedora={nomeVendedora} />
        ) : (
          <ListaClientes inicial={clientesIniciais} />
        )}
      </main>
    </div>
  )
}
