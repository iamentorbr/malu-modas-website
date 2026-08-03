"use client"

import { useState, useTransition, useCallback } from "react"
import { Search, ShoppingBag, Phone, MapPin, Tag, Calendar } from "lucide-react"
import { listarCadastros } from "@/app/sacola-amiga/actions"
import type { SacolaAmiga } from "@/lib/sacola-amiga/types"

function formatPhone(t: string) {
  const d = t.replace(/\D/g, "")
  if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return t
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })
}

function TagList({ items, color = "secondary" }: { items: string[] | null; color?: string }) {
  if (!items || items.length === 0) return <span className="text-muted-foreground text-xs italic">—</span>
  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item) => (
        <span
          key={item}
          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground`}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default function ListaClientes({ inicial }: { inicial: SacolaAmiga[] }) {
  const [busca, setBusca] = useState("")
  const [clientes, setClientes] = useState<SacolaAmiga[]>(inicial)
  const [isPending, startTransition] = useTransition()
  const [expandido, setExpandido] = useState<string | null>(null)

  const pesquisar = useCallback((valor: string) => {
    setBusca(valor)
    startTransition(async () => {
      const res = await listarCadastros(valor)
      if (res.ok) setClientes(res.data as SacolaAmiga[])
    })
  }, [])

  return (
    <div className="space-y-4">
      {/* Barra de busca */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={busca}
          onChange={(e) => pesquisar(e.target.value)}
          placeholder="Buscar cliente pelo nome..."
          className="w-full rounded-sm border border-border bg-background pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
        {isPending && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-accent border-t-transparent animate-spin" />
        )}
      </div>

      {/* Contagem */}
      <p className="text-xs text-muted-foreground">
        {clientes.length} {clientes.length === 1 ? "cliente cadastrada" : "clientes cadastradas"}
        {busca && ` para "${busca}"`}
      </p>

      {/* Lista */}
      {clientes.length === 0 ? (
        <div className="rounded-sm border border-border bg-background px-6 py-12 text-center">
          <ShoppingBag className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
          <p className="text-sm text-muted-foreground">Nenhuma cliente encontrada.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {clientes.map((c) => {
            const aberto = expandido === c.id
            return (
              <div
                key={c.id}
                className="rounded-sm border border-border bg-background overflow-hidden"
              >
                {/* Linha resumo */}
                <button
                  type="button"
                  onClick={() => setExpandido(aberto ? null : c.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-serif text-sm font-semibold text-foreground">
                        {c.nome_cliente.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm text-foreground truncate">{c.nome_cliente}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        Cadastrada por {c.nome_vendedora} · {formatDate(c.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {c.tamanho && (
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-secondary text-[10px] font-semibold text-secondary-foreground uppercase tracking-wide">
                        {c.tamanho}
                      </span>
                    )}
                    <svg
                      className={`h-4 w-4 text-muted-foreground transition-transform ${aberto ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24" fill="none" aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Detalhes expandidos */}
                {aberto && (
                  <div className="border-t border-border px-5 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-secondary/10">
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Telefone</p>
                        <p className="text-sm font-medium text-foreground">{formatPhone(c.telefone)}</p>
                      </div>
                    </div>

                    {(c.cidade || c.bairro) && (
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Localização</p>
                          <p className="text-sm font-medium text-foreground">
                            {[c.bairro, c.cidade].filter(Boolean).join(" — ")}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-2">
                      <Tag className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Tipos de roupa</p>
                        <TagList items={c.tipos_roupa} />
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Tag className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Cores preferidas</p>
                        <TagList items={c.cores_preferidas} />
                      </div>
                    </div>

                    {c.estilo && (
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Estilo</p>
                        <p className="text-sm text-foreground">{c.estilo}</p>
                      </div>
                    )}

                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Disponibilidade</p>
                        <TagList items={c.dias_preferidos} />
                        {c.horario_preferido && (
                          <p className="text-xs text-muted-foreground mt-1">{c.horario_preferido}</p>
                        )}
                      </div>
                    </div>

                    {c.observacoes && (
                      <div className="sm:col-span-2">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Observações</p>
                        <p className="text-sm text-foreground leading-relaxed bg-background rounded-sm border border-border px-3 py-2">
                          {c.observacoes}
                        </p>
                      </div>
                    )}

                    {c.como_chegou && (
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Como chegou</p>
                        <p className="text-sm text-foreground">{c.como_chegou}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
