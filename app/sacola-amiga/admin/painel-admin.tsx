"use client"

import { useState, useTransition, useCallback, useEffect } from "react"
import {
  Search, ShoppingBag, Phone, MapPin, Tag, Calendar,
  Pencil, Trash2, X, Check, LogOut, Users, ClipboardList,
} from "lucide-react"
import GerenciarVendedoras from "./gerenciar-vendedoras"
import QuestionariosAdmin from "./questionarios-admin"
import { listarCadastros, atualizarCadastro, deletarCadastro } from "@/app/sacola-amiga/actions"
import {
  TAMANHOS, TIPOS_ROUPA, CORES, ESTILOS, DIAS_SEMANA, HORARIOS, COMO_CHEGOU,
  type SacolaAmiga, type SacolaAmigarInsert,
} from "@/lib/sacola-amiga/types"

function formatPhone(t: string) {
  const d = t.replace(/\D/g, "")
  if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return t
}

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })
}

function toggleArr(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]
}

function TagBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground">
      {label}
    </span>
  )
}

function TagList({ items }: { items: string[] | null }) {
  if (!items || items.length === 0) return <span className="text-muted-foreground text-xs italic">—</span>
  return <div className="flex flex-wrap gap-1">{items.map((i) => <TagBadge key={i} label={i} />)}</div>
}

function CheckGroup({ options, selected, onChange }: { options: string[]; selected: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        const on = selected.includes(opt)
        return (
          <button key={opt} type="button" onClick={() => onChange(toggleArr(selected, opt))}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${on ? "bg-foreground text-background border-foreground" : "bg-background text-foreground border-border hover:border-foreground/50"}`}>
            {opt}
          </button>
        )
      })}
    </div>
  )
}

function RadioGroup({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        const on = value === opt
        return (
          <button key={opt} type="button" onClick={() => onChange(opt)}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition-all ${on ? "bg-accent text-accent-foreground border-accent" : "bg-background text-foreground border-border hover:border-foreground/50"}`}>
            {opt}
          </button>
        )
      })}
    </div>
  )
}

function ModalEdicao({ cliente, onClose, onSalvo }: {
  cliente: SacolaAmiga
  onClose: () => void
  onSalvo: (updated: SacolaAmiga) => void
}) {
  const [isPending, startTransition] = useTransition()
  const [erro, setErro] = useState("")

  const [nomeCliente, setNomeCliente] = useState(cliente.nome_cliente)
  const [telefone, setTelefone] = useState(formatPhone(cliente.telefone))
  const [bairro, setBairro] = useState(cliente.bairro ?? "")
  const [cidade, setCidade] = useState(cliente.cidade ?? "")
  const [nomeVendedora, setNomeVendedora] = useState(cliente.nome_vendedora)
  const [tamanho, setTamanho] = useState(cliente.tamanho ?? "")
  const [tiposRoupa, setTiposRoupa] = useState<string[]>(cliente.tipos_roupa ?? [])
  const [cores, setCores] = useState<string[]>(cliente.cores_preferidas ?? [])
  const [estilo, setEstilo] = useState(cliente.estilo ?? "")
  const [dias, setDias] = useState<string[]>(cliente.dias_preferidos ?? [])
  const [horario, setHorario] = useState(cliente.horario_preferido ?? "")
  const [observacoes, setObservacoes] = useState(cliente.observacoes ?? "")
  const [comoChegou, setComoChegou] = useState(cliente.como_chegou ?? "")

  const salvar = () => {
    if (nomeCliente.trim().length < 2) { setErro("Informe o nome da cliente."); return }
    setErro("")
    const digits = telefone.replace(/\D/g, "")
    const payload: Partial<SacolaAmigarInsert> = {
      nome_cliente: nomeCliente.trim(),
      telefone: digits,
      bairro: bairro.trim() || null,
      cidade: cidade.trim() || null,
      nome_vendedora: nomeVendedora.trim(),
      tamanho: tamanho || null,
      tipos_roupa: tiposRoupa.length ? tiposRoupa : null,
      cores_preferidas: cores.length ? cores : null,
      estilo: estilo || null,
      dias_preferidos: dias.length ? dias : null,
      horario_preferido: horario || null,
      observacoes: observacoes.trim() || null,
      como_chegou: comoChegou || null,
    }
    startTransition(async () => {
      const res = await atualizarCadastro(cliente.id, payload)
      if (!res.ok) { setErro(res.error ?? "Erro ao salvar."); return }
      onSalvo({ ...cliente, ...payload } as SacolaAmiga)
    })
  }

  return (
    <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4">
      <div className="w-full max-w-xl bg-background rounded-sm border border-border shadow-xl">
        {/* Header modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-serif text-lg text-foreground">Editar Cadastro</h2>
          <button type="button" onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6 overflow-y-auto max-h-[70vh]">
          {/* Dados da cliente */}
          <section className="space-y-3">
            <h3 className="text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground">Dados da cliente</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-xs text-muted-foreground mb-1">Nome completo</label>
                <input type="text" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)}
                  className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Telefone</label>
                <input type="tel" value={telefone} onChange={(e) => setTelefone(maskPhone(e.target.value))}
                  className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Vendedora responsável</label>
                <input type="text" value={nomeVendedora} onChange={(e) => setNomeVendedora(e.target.value)}
                  className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Cidade</label>
                <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}
                  className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Bairro</label>
                <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)}
                  className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
            </div>
          </section>

          {/* Preferências */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground">Preferências de moda</h3>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Tamanho</label>
              <RadioGroup options={TAMANHOS} value={tamanho} onChange={setTamanho} />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Tipos de roupa</label>
              <CheckGroup options={TIPOS_ROUPA} selected={tiposRoupa} onChange={setTiposRoupa} />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Cores</label>
              <CheckGroup options={CORES} selected={cores} onChange={setCores} />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Estilo</label>
              <RadioGroup options={ESTILOS} value={estilo} onChange={setEstilo} />
            </div>
          </section>

          {/* Disponibilidade */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground">Disponibilidade</h3>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Dias preferidos</label>
              <CheckGroup options={DIAS_SEMANA} selected={dias} onChange={setDias} />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Horário</label>
              <RadioGroup options={HORARIOS} value={horario} onChange={setHorario} />
            </div>
          </section>

          {/* Informações adicionais */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground">Informações adicionais</h3>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Observações</label>
              <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} rows={3}
                className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none" />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1.5">Como chegou</label>
              <RadioGroup options={COMO_CHEGOU} value={comoChegou} onChange={setComoChegou} />
            </div>
          </section>
        </div>

        {/* Footer modal */}
        <div className="px-6 py-4 border-t border-border flex items-center justify-between gap-3">
          {erro && <p className="text-xs text-destructive">{erro}</p>}
          <div className="flex items-center gap-2 ml-auto">
            <button type="button" onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary/50 transition-colors">
              <X className="h-3.5 w-3.5" /> Cancelar
            </button>
            <button type="button" onClick={salvar} disabled={isPending}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity disabled:opacity-50">
              <Check className="h-3.5 w-3.5" />
              {isPending ? "Salvando..." : "Salvar Alterações"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PainelAdmin({ onLogout }: { onLogout: () => void }) {
  const [aba, setAba] = useState<"clientes" | "vendedoras" | "questionarios">("clientes")
  const [busca, setBusca] = useState("")
  const [clientes, setClientes] = useState<SacolaAmiga[]>([])
  const [carregado, setCarregado] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [editando, setEditando] = useState<SacolaAmiga | null>(null)
  const [expandido, setExpandido] = useState<string | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  const carregar = useCallback((valor = "") => {
    startTransition(async () => {
      const res = await listarCadastros(valor)
      if (res.ok) {
        setClientes(res.data as SacolaAmiga[])
      }
      setCarregado(true)
    })
  }, [])

  useEffect(() => {
    carregar()
  }, [carregar])

  const pesquisar = (valor: string) => {
    setBusca(valor)
    carregar(valor)
  }

  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deletarCadastro(id)
      setClientes((prev) => prev.filter((c) => c.id !== id))
      setConfirmDelete(null)
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="h-14 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="h-5 w-5 text-accent" />
              <div>
                <span className="font-serif text-base text-foreground">Sacola Amiga</span>
                <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[9px] font-bold uppercase tracking-widest">
                  Admin
                </span>
              </div>
            </div>
            <button type="button" onClick={onLogout}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
          {/* Abas */}
          <div className="flex gap-0 -mb-px">
            <button type="button" onClick={() => setAba("clientes")}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors
                ${aba === "clientes"
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              <ShoppingBag className="h-3.5 w-3.5" />
              Clientes
            </button>
            <button type="button" onClick={() => setAba("vendedoras")}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors
                ${aba === "vendedoras"
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              <Users className="h-3.5 w-3.5" />
              Vendedoras
            </button>
            <button type="button" onClick={() => setAba("questionarios")}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors
                ${aba === "questionarios"
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              <ClipboardList className="h-3.5 w-3.5" />
              Questionários
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-6">
        {aba === "vendedoras" && <GerenciarVendedoras />}
        {aba === "questionarios" && <QuestionariosAdmin />}
        {aba === "clientes" && <>
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-sm border border-border bg-card px-5 py-4">
            <p className="text-xs uppercase tracking-[.12em] text-muted-foreground mb-1">Total de clientes</p>
            <p className="font-serif text-3xl text-foreground">{clientes.length}</p>
          </div>
          <div className="rounded-sm border border-border bg-card px-5 py-4">
            <p className="text-xs uppercase tracking-[.12em] text-muted-foreground mb-1">Vendedoras ativas</p>
            <p className="font-serif text-3xl text-foreground">
              {new Set(clientes.map((c) => c.nome_vendedora)).size}
            </p>
          </div>
          <div className="rounded-sm border border-border bg-card px-5 py-4">
            <p className="text-xs uppercase tracking-[.12em] text-muted-foreground mb-1">Último cadastro</p>
            <p className="font-serif text-lg text-foreground">
              {clientes[0] ? new Date(clientes[0].created_at).toLocaleDateString("pt-BR") : "—"}
            </p>
          </div>
        </div>

        {/* Busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="text" value={busca} onChange={(e) => pesquisar(e.target.value)}
            placeholder="Buscar cliente pelo nome..."
            className="w-full rounded-sm border border-border bg-background pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40" />
          {isPending && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-accent border-t-transparent animate-spin" />
          )}
        </div>

        {/* Lista */}
        {clientes.length === 0 && carregado ? (
          <div className="rounded-sm border border-border bg-background px-6 py-12 text-center">
            <ShoppingBag className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground">Nenhuma cliente cadastrada ainda.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {clientes.map((c) => {
              const aberto = expandido === c.id
              return (
                <div key={c.id} className="rounded-sm border border-border bg-background overflow-hidden">
                  <div className="flex items-center gap-4 px-5 py-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-serif text-sm font-semibold text-foreground">
                        {c.nome_cliente.charAt(0).toUpperCase()}
                      </span>
                    </div>

                    {/* Info */}
                    <button type="button" onClick={() => setExpandido(aberto ? null : c.id)}
                      className="flex-1 text-left min-w-0">
                      <p className="font-semibold text-sm text-foreground truncate">{c.nome_cliente}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {c.nome_vendedora} · {formatDate(c.created_at)}
                        {c.tamanho && ` · ${c.tamanho}`}
                      </p>
                    </button>

                    {/* Ações */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button type="button" onClick={() => setEditando(c)}
                        className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        title="Editar">
                        <Pencil className="h-4 w-4" />
                      </button>
                      {confirmDelete === c.id ? (
                        <div className="flex items-center gap-1">
                          <button type="button" onClick={() => handleDelete(c.id)}
                            className="p-2 rounded-sm text-destructive hover:bg-destructive/10 transition-colors" title="Confirmar exclusão">
                            <Check className="h-4 w-4" />
                          </button>
                          <button type="button" onClick={() => setConfirmDelete(null)}
                            className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <button type="button" onClick={() => setConfirmDelete(c.id)}
                          className="p-2 rounded-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                          title="Remover">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                      <button type="button" onClick={() => setExpandido(aberto ? null : c.id)}
                        className="p-2 rounded-sm text-muted-foreground hover:text-foreground transition-colors">
                        <svg className={`h-4 w-4 transition-transform ${aberto ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

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
        </>}
      </main>

      {/* Modal de edição */}
      {editando && (
        <ModalEdicao
          cliente={editando}
          onClose={() => setEditando(null)}
          onSalvo={(updated) => {
            setClientes((prev) => prev.map((c) => c.id === updated.id ? updated : c))
            setEditando(null)
          }}
        />
      )}
    </div>
  )
}
