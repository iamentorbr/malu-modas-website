"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import LoginAdmin from "./login-admin"
import PainelAdmin from "./painel-admin"

export default function AdminClient() {
  const [checking, setChecking] = useState(true)
  const [autenticado, setAutenticado] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(({ data }) => {
      const user = data.session?.user
      if (user && user.app_metadata?.role === "admin") {
        setAutenticado(true)
      }
      setChecking(false)
    })
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setAutenticado(false)
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-6 w-6 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      </div>
    )
  }

  if (!autenticado) {
    return <LoginAdmin onLogin={() => setAutenticado(true)} />
  }

  return <PainelAdmin onLogout={handleLogout} />
}
