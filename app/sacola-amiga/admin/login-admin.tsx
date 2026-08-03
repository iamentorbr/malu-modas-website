"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { ShoppingBag, Shield } from "lucide-react"

export default function LoginAdmin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !senha.trim()) {
      setErro("Preencha e-mail e senha.")
      return
    }
    setErro("")
    setLoading(true)

    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: senha,
    })

    if (error || !data.user) {
      setErro("E-mail ou senha incorretos.")
      setLoading(false)
      return
    }

    const role = data.user.app_metadata?.role
    if (role !== "admin") {
      await supabase.auth.signOut()
      setErro("Acesso restrito a administradores.")
      setLoading(false)
      return
    }

    setLoading(false)
    onLogin()
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground mb-4">
            <Shield className="h-5 w-5 text-accent" />
          </div>
          <h1 className="font-serif text-3xl text-foreground leading-tight">
            Sacola <span className="italic text-accent">Amiga</span>
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[.2em] text-muted-foreground">Acesso Administrativo</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-sm border border-border bg-card px-6 py-7 space-y-4"
        >
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-1.5">
              E-mail
            </label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@malumodas.com.br"
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-1.5">
              Senha
            </label>
            <input
              type="password"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>

          {erro && <p className="text-xs text-destructive">{erro}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold uppercase tracking-[.15em] text-background hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Verificando..." : "Acessar Painel Admin"}
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShoppingBag className="h-3.5 w-3.5" />
          <span>Acesso restrito — MALU MODAS</span>
        </div>
      </div>
    </div>
  )
}
