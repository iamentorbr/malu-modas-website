"use client"

import { useState, useEffect, useTransition } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  UserPlus, Trash2, X, Check, KeyRound, ShieldCheck, ShieldOff,
  RefreshCw, Eye, EyeOff,
} from "lucide-react"

type Usuario = {
  id: string
  email: string
  role: "admin" | "vendedora"
  nome: string
  criado_em: string
  ultimo_acesso: string | null
}

async function getToken(): Promise<string | null> {
  const supabase = createClient()
  const { data } = await supabase.auth.getSession()
  return data.session?.access_token ?? null
}

async function apiRequest(method: string, body?: object) {
  const token = await getToken()
  const res = await fetch("/api/sacola-amiga/usuarios", {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  return res.json()
}

function formatDate(d: string | null) {
  if (!d) return "—"
  return new Date(d).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
  })
}

export default function GerenciarVendedoras() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")
  const [isPending, startTransition] = useTransition()

  // Modal nova vendedora
  const [modalAberto, setModalAberto] = useState(false)
  const [novoEmail, setNovoEmail] = useState("")
  const [novoNome, setNovoNome] = useState("")
  const [novaSenha, setNovaSenha] = useState("")
  const [novoRole, setNovoRole] = useState<"vendedora" | "admin">("vendedora")
  const [mostraSenha, setMostraSenha] = useState(false)
  const [erroModal, setErroModal] = useState("")

  // Modal trocar senha
  const [trocandoSenha, setTrocandoSenha] = useState<Usuario | null>(null)
  const [novaSenhaTroca, setNovaSenhaTroca] = useState("")
  const [mostraSenhaTroca, setMostraSenhaTroca] = useState(false)

  // Confirmar exclusão
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  const carregar = () => {
    setCarregando(true)
    startTransition(async () => {
      const data = await apiRequest("GET")
      if (data.error) { setErro(data.error); setCarregando(false); return }
      setUsuarios(data.usuarios ?? [])
      setCarregando(false)
    })
  }

  useEffect(() => { carregar() }, [])

  const criarUsuario = () => {
    setErroModal("")
    if (!novoEmail.trim() || !novoNome.trim() || !novaSenha.trim()) {
      setErroModal("Preencha todos os campos."); return
    }
    if (novaSenha.length < 6) {
      setErroModal("A senha deve ter pelo menos 6 caracteres."); return
    }
    startTransition(async () => {
      const data = await apiRequest("POST", {
        email: novoEmail.trim(),
        nome: novoNome.trim(),
        senha: novaSenha,
        role: novoRole,
      })
      if (data.error) { setErroModal(data.error); return }
      setUsuarios((prev) => [...prev, data.usuario])
      setModalAberto(false)
      setNovoEmail(""); setNovoNome(""); setNovaSenha(""); setNovoRole("vendedora")
    })
  }

  const trocarSenha = () => {
    if (!trocandoSenha || novaSenhaTroca.length < 6) return
    startTransition(async () => {
      const data = await apiRequest("PATCH", { id: trocandoSenha.id, senha: novaSenhaTroca })
      if (data.error) { setErro(data.error); return }
      setTrocandoSenha(null); setNovaSenhaTroca("")
    })
  }

  const alternarRole = (u: Usuario) => {
    const novoRoleVal = u.role === "admin" ? "vendedora" : "admin"
    startTransition(async () => {
      const data = await apiRequest("PATCH", { id: u.id, role: novoRoleVal })
      if (data.error) { setErro(data.error); return }
      setUsuarios((prev) => prev.map((x) => x.id === u.id ? { ...x, role: novoRoleVal } : x))
    })
  }

  const deletar = (id: string) => {
    startTransition(async () => {
      const data = await apiRequest("DELETE", { id })
      if (data.error) { setErro(data.error); return }
      setUsuarios((prev) => prev.filter((u) => u.id !== id))
      setConfirmDelete(null)
    })
  }

  return (
    <div className="space-y-5">
      {/* Cabeçalho da seção */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-xl text-foreground">Vendedoras</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Gerencie os acessos ao sistema. Admins têm permissão total; vendedoras só cadastram.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={carregar} disabled={carregando || isPending}
            className="p-2 rounded-sm border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            title="Recarregar">
            <RefreshCw className={`h-4 w-4 ${carregando || isPending ? "animate-spin" : ""}`} />
          </button>
          <button type="button" onClick={() => setModalAberto(true)}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity">
            <UserPlus className="h-3.5 w-3.5" />
            Nova vendedora
          </button>
        </div>
      </div>

      {erro && (
        <p className="text-xs text-destructive bg-destructive/10 px-4 py-2 rounded-sm border border-destructive/20">
          {erro}
        </p>
      )}

      {/* Lista */}
      {carregando ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-6 w-6 rounded-full border-2 border-accent border-t-transparent animate-spin" />
        </div>
      ) : usuarios.length === 0 ? (
        <div className="rounded-sm border border-border bg-background px-6 py-12 text-center">
          <p className="text-sm text-muted-foreground">Nenhuma usuária cadastrada ainda.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {usuarios.map((u) => (
            <div key={u.id} className="rounded-sm border border-border bg-background px-5 py-4 flex items-center gap-4">
              {/* Avatar */}
              <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm font-semibold
                ${u.role === "admin" ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"}`}>
                {u.nome ? u.nome.charAt(0).toUpperCase() : u.email.charAt(0).toUpperCase()}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-sm text-foreground truncate">{u.nome || "—"}</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest
                    ${u.role === "admin" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {u.role === "admin" ? "Admin" : "Vendedora"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-0.5">
                  Criado em {formatDate(u.criado_em)}
                  {u.ultimo_acesso && ` · Último acesso: ${formatDate(u.ultimo_acesso)}`}
                </p>
              </div>

              {/* Ações */}
              <div className="flex items-center gap-1 flex-shrink-0">
                {/* Trocar role */}
                <button type="button" onClick={() => alternarRole(u)} disabled={isPending}
                  title={u.role === "admin" ? "Rebaixar para Vendedora" : "Promover para Admin"}
                  className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                  {u.role === "admin"
                    ? <ShieldOff className="h-4 w-4" />
                    : <ShieldCheck className="h-4 w-4" />}
                </button>

                {/* Trocar senha */}
                <button type="button" onClick={() => { setTrocandoSenha(u); setNovaSenhaTroca(""); setMostraSenhaTroca(false) }}
                  title="Alterar senha"
                  className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                  <KeyRound className="h-4 w-4" />
                </button>

                {/* Excluir */}
                {confirmDelete === u.id ? (
                  <div className="flex items-center gap-1">
                    <button type="button" onClick={() => deletar(u.id)} disabled={isPending}
                      className="p-2 rounded-sm text-destructive hover:bg-destructive/10 transition-colors" title="Confirmar exclusão">
                      <Check className="h-4 w-4" />
                    </button>
                    <button type="button" onClick={() => setConfirmDelete(null)}
                      className="p-2 rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button type="button" onClick={() => setConfirmDelete(u.id)}
                    className="p-2 rounded-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    title="Remover acesso">
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal: Nova vendedora */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-background rounded-sm border border-border shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="font-serif text-lg text-foreground">Nova usuária</h3>
              <button type="button" onClick={() => { setModalAberto(false); setErroModal("") }}
                className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-6 py-6 space-y-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Nome completo</label>
                <input type="text" value={novoNome} onChange={(e) => setNovoNome(e.target.value)}
                  placeholder="Ex: Ana Paula"
                  className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">E-mail</label>
                <input type="email" value={novoEmail} onChange={(e) => setNovoEmail(e.target.value)}
                  placeholder="Ex: ana@malumodas.com"
                  className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Senha inicial</label>
                <div className="relative">
                  <input type={mostraSenha ? "text" : "password"} value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full rounded-sm border border-border bg-background px-3 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40" />
                  <button type="button" onClick={() => setMostraSenha(!mostraSenha)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {mostraSenha ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Nível de acesso</label>
                <div className="flex gap-2">
                  {(["vendedora", "admin"] as const).map((r) => (
                    <button key={r} type="button" onClick={() => setNovoRole(r)}
                      className={`flex-1 py-2 rounded-sm text-xs font-semibold border transition-all capitalize
                        ${novoRole === r ? "bg-foreground text-background border-foreground" : "bg-background text-foreground border-border hover:border-foreground/50"}`}>
                      {r === "admin" ? "Admin" : "Vendedora"}
                    </button>
                  ))}
                </div>
              </div>
              {erroModal && <p className="text-xs text-destructive">{erroModal}</p>}
            </div>
            <div className="px-6 py-4 border-t border-border flex justify-end gap-2">
              <button type="button" onClick={() => { setModalAberto(false); setErroModal("") }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary/50 transition-colors">
                Cancelar
              </button>
              <button type="button" onClick={criarUsuario} disabled={isPending}
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity disabled:opacity-50">
                <UserPlus className="h-3.5 w-3.5" />
                {isPending ? "Criando..." : "Criar acesso"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Trocar senha */}
      {trocandoSenha && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="w-full max-w-sm bg-background rounded-sm border border-border shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="font-serif text-lg text-foreground">Alterar senha</h3>
              <button type="button" onClick={() => setTrocandoSenha(null)}
                className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-6 py-6 space-y-4">
              <p className="text-xs text-muted-foreground">
                Alterando senha de <strong className="text-foreground">{trocandoSenha.nome || trocandoSenha.email}</strong>
              </p>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Nova senha</label>
                <div className="relative">
                  <input type={mostraSenhaTroca ? "text" : "password"} value={novaSenhaTroca}
                    onChange={(e) => setNovaSenhaTroca(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full rounded-sm border border-border bg-background px-3 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40" />
                  <button type="button" onClick={() => setMostraSenhaTroca(!mostraSenhaTroca)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {mostraSenhaTroca ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-border flex justify-end gap-2">
              <button type="button" onClick={() => setTrocandoSenha(null)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary/50 transition-colors">
                Cancelar
              </button>
              <button type="button" onClick={trocarSenha} disabled={isPending || novaSenhaTroca.length < 6}
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity disabled:opacity-50">
                <KeyRound className="h-3.5 w-3.5" />
                {isPending ? "Salvando..." : "Salvar senha"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
