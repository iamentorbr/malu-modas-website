"use server"

import { createClient } from "@/lib/supabase/server"
import type { SacolaAmigarInsert } from "@/lib/sacola-amiga/types"

export async function inserirCadastro(data: SacolaAmigarInsert) {
  const supabase = await createClient()
  const { error } = await supabase.from("sacola_amiga").insert(data)
  if (error) {
    console.log("[sacola-amiga] erro ao inserir:", error.message)
    return { ok: false, error: "Não foi possível salvar o cadastro. Tente novamente." }
  }
  return { ok: true }
}

async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.app_metadata?.role !== "admin") return null
  return supabase
}

export async function listarCadastros(busca?: string) {
  const supabase = await requireAdmin()
  if (!supabase) return { ok: false, data: [], error: "Acesso restrito a administradores." }
  let query = supabase
    .from("sacola_amiga")
    .select("*")
    .order("created_at", { ascending: false })

  if (busca && busca.trim().length > 0) {
    query = query.ilike("nome_cliente", `%${busca.trim()}%`)
  }

  const { data, error } = await query
  if (error) {
    console.log("[sacola-amiga] erro ao listar:", error.message)
    return { ok: false, data: [] }
  }
  return { ok: true, data: data ?? [] }
}

export async function atualizarCadastro(id: string, data: Partial<SacolaAmigarInsert>) {
  const supabase = await requireAdmin()
  if (!supabase) return { ok: false, error: "Acesso restrito a administradores." }
  const { error } = await supabase.from("sacola_amiga").update(data).eq("id", id)
  if (error) {
    console.log("[sacola-amiga] erro ao atualizar:", error.message)
    return { ok: false, error: "Não foi possível atualizar o cadastro." }
  }
  return { ok: true }
}

export async function deletarCadastro(id: string) {
  const supabase = await requireAdmin()
  if (!supabase) return { ok: false, error: "Acesso restrito a administradores." }
  const { error } = await supabase.from("sacola_amiga").delete().eq("id", id)
  if (error) {
    console.log("[sacola-amiga] erro ao deletar:", error.message)
    return { ok: false, error: "Não foi possível remover o cadastro." }
  }
  return { ok: true }
}
