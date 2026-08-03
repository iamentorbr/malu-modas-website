"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import LoginVendedora from "./login-vendedora"
import PortalVendedora from "./portal-vendedora"
import { listarCadastros } from "@/app/sacola-amiga/actions"
import type { SacolaAmiga } from "@/lib/sacola-amiga/types"

export default function VendedoraClient() {
  const [checking, setChecking] = useState(true)
  const [nomeVendedora, setNomeVendedora] = useState<string | null>(null)
  const [clientes, setClientes] = useState<SacolaAmiga[]>([])

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(async ({ data }) => {
      const user = data.session?.user
      if (user) {
        const role = user.app_metadata?.role
        if (role === "vendedora" || role === "admin") {
          const nome =
            user.user_metadata?.nome_vendedora ||
            user.user_metadata?.name ||
            user.email?.split("@")[0] ||
            "Vendedora"
          setNomeVendedora(nome)
          const res = await listarCadastros()
          if (res.ok) setClientes(res.data as SacolaAmiga[])
        }
      }
      setChecking(false)
    })
  }, [])

  const handleLogin = async (nome: string) => {
    setNomeVendedora(nome)
    const res = await listarCadastros()
    if (res.ok) setClientes(res.data as SacolaAmiga[])
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setNomeVendedora(null)
    setClientes([])
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-6 w-6 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      </div>
    )
  }

  if (!nomeVendedora) {
    return <LoginVendedora onLogin={handleLogin} />
  }

  return (
    <PortalVendedora
      nomeVendedora={nomeVendedora}
      clientesIniciais={clientes}
      onLogout={handleLogout}
    />
  )
}
