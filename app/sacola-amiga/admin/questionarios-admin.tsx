"use client"

import { useCallback, useEffect, useState } from "react"
import { ClipboardList, ChevronDown, RefreshCw } from "lucide-react"
import { listarQuestionarios, type Questionnaire } from "../questionarios-actions"

function Tags({ values }: { values?: string[] | null }) {
  if (!values?.length) return <span className="text-xs italic text-muted-foreground">Não informado</span>
  return <div className="flex flex-wrap gap-1.5">{values.map((value) => <span key={value} className="rounded-full bg-secondary px-2 py-1 text-[11px]">{value}</span>)}</div>
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><p className="mb-1 text-[10px] font-semibold uppercase tracking-[.12em] text-muted-foreground">{label}</p>{children}</div>
}

export default function QuestionariosAdmin() {
  const [items, setItems] = useState<Questionnaire[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [expanded, setExpanded] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    const result = await listarQuestionarios()
    if (result.ok) { setItems(result.data); setError("") } else setError(result.error)
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  return <section className="space-y-5">
    <div className="flex items-end justify-between gap-4">
      <div><p className="text-xs uppercase tracking-[.14em] text-muted-foreground">Apenas questionários</p><h1 className="mt-1 font-serif text-3xl text-foreground">Respostas da MALU Magazine</h1><p className="mt-1 text-sm text-muted-foreground">{items.length} resposta{items.length === 1 ? "" : "s"} recebida{items.length === 1 ? "" : "s"}</p></div>
      <button type="button" onClick={load} disabled={loading} className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary disabled:opacity-50"><RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> Atualizar</button>
    </div>
    {error && <div className="rounded-sm border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">{error}</div>}
    {!loading && !items.length && <div className="rounded-sm border border-border px-6 py-14 text-center"><ClipboardList className="mx-auto mb-3 h-8 w-8 text-muted-foreground" /><p className="text-sm text-muted-foreground">Nenhuma resposta de questionário ainda.</p></div>}
    <div className="space-y-3">{items.map((item) => { const open = expanded === item.id; return <article key={item.id} className="overflow-hidden rounded-sm border border-border bg-card">
      <button type="button" onClick={() => setExpanded(open ? null : item.id)} className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-secondary/30"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-serif text-lg text-foreground">{item.first_name.charAt(0).toUpperCase()}</div><div className="min-w-0 flex-1"><p className="font-semibold text-foreground">{item.first_name}, {item.age} anos</p><p className="text-xs text-muted-foreground">{new Date(item.created_at).toLocaleString("pt-BR")}</p></div><ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} /></button>
      {open && <div className="grid gap-5 border-t border-border px-5 py-5 sm:grid-cols-2"><Field label="O que quer ver no grupo"><Tags values={item.wants_to_see} /></Field><Field label="Roupas preferidas"><Tags values={item.preferred_clothes} /></Field><Field label="Ocasiões de uso"><Tags values={item.clothing_occasions} /></Field><Field label="Cores preferidas"><Tags values={item.preferred_colors} /></Field><Field label="Estilo"><Tags values={item.style_preferences} /></Field><Field label="Tecido mais usado"><p className="text-sm text-foreground">{item.favorite_fabric || "Não informado"}</p></Field><Field label="Tamanho"><p className="text-sm text-foreground">{item.clothing_size || "Não informado"}</p></Field><Field label="Frequência de compra"><p className="text-sm text-foreground">{item.shopping_frequency || "Não informado"}</p></Field><Field label="Viaja nos próximos 3 meses"><p className="text-sm text-foreground">{item.plans_to_travel || "Não informado"}</p></Field><Field label="Interesse na MALU Magazine"><p className="text-sm text-foreground">{item.magazine_interest || "Não informado"}</p></Field><div className="sm:col-span-2"><Field label="Mensagem final"><p className="font-serif text-base leading-relaxed text-foreground">{item.final_message}</p></Field></div></div>}
    </article> })}</div>
  </section>
}
