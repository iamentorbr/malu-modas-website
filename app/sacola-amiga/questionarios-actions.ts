"use server"

import { createClient } from "@/lib/supabase/server"

export type Questionnaire = {
  id: string
  created_at: string
  first_name: string
  age: number
  wants_to_see: string[]
  preferred_clothes: string[]
  clothing_occasions: string[]
  preferred_colors: string[]
  style_preferences: string[]
  favorite_fabric: string
  clothing_size: string
  plans_to_travel: string
  shopping_frequency: string
  magazine_interest: string
  final_message: string
}

export async function listarQuestionarios() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.app_metadata?.role !== "admin") {
    return { ok: false as const, data: [], error: "Acesso restrito a administradores." }
  }

  const { data, error } = await supabase
    .from("malu_magazine_questionnaires")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.log("[v0] Erro ao listar questionários:", error.message)
    return { ok: false as const, data: [], error: "Não foi possível carregar os questionários." }
  }

  return { ok: true as const, data: (data ?? []) as Questionnaire[] }
}
