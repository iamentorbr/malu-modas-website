"use server"
import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

// Apenas o service role consegue criar/editar usuários
function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}

// Verifica se quem chamou é admin
async function verificarAdmin(req: NextRequest): Promise<boolean> {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "")
  if (!token) return false
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data } = await supabase.auth.getUser(token)
  return data.user?.app_metadata?.role === "admin"
}

// GET: listar usuários (vendedoras e admins)
export async function GET(req: NextRequest) {
  if (!(await verificarAdmin(req))) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 })
  }
  const admin = getAdminClient()
  const { data, error } = await admin.auth.admin.listUsers()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const usuarios = data.users.map((u) => ({
    id: u.id,
    email: u.email,
    role: u.app_metadata?.role ?? "vendedora",
    nome: u.user_metadata?.nome_vendedora ?? "",
    criado_em: u.created_at,
    ultimo_acesso: u.last_sign_in_at ?? null,
  }))

  return NextResponse.json({ usuarios })
}

// POST: criar novo usuário
export async function POST(req: NextRequest) {
  if (!(await verificarAdmin(req))) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 })
  }
  const body = await req.json()
  const { email, senha, nome, role } = body

  if (!email || !senha || !nome) {
    return NextResponse.json({ error: "Email, senha e nome são obrigatórios." }, { status: 400 })
  }
  if (senha.length < 6) {
    return NextResponse.json({ error: "A senha deve ter pelo menos 6 caracteres." }, { status: 400 })
  }

  const admin = getAdminClient()
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password: senha,
    email_confirm: true,
    app_metadata: { role: role ?? "vendedora" },
    user_metadata: { nome_vendedora: nome },
  })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({
    usuario: {
      id: data.user.id,
      email: data.user.email,
      role: data.user.app_metadata?.role ?? "vendedora",
      nome: data.user.user_metadata?.nome_vendedora ?? "",
      criado_em: data.user.created_at,
      ultimo_acesso: null,
    }
  })
}

// PATCH: atualizar senha ou role de um usuário
export async function PATCH(req: NextRequest) {
  if (!(await verificarAdmin(req))) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 })
  }
  const body = await req.json()
  const { id, senha, role, nome } = body
  if (!id) return NextResponse.json({ error: "ID obrigatório." }, { status: 400 })

  const admin = getAdminClient()
  const updates: Record<string, unknown> = {}
  if (senha && senha.length >= 6) updates.password = senha
  if (role) updates.app_metadata = { role }
  if (nome) updates.user_metadata = { nome_vendedora: nome }

  const { error } = await admin.auth.admin.updateUserById(id, updates)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}

// DELETE: remover usuário
export async function DELETE(req: NextRequest) {
  if (!(await verificarAdmin(req))) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 })
  }
  const body = await req.json()
  const { id } = body
  if (!id) return NextResponse.json({ error: "ID obrigatório." }, { status: 400 })

  const admin = getAdminClient()
  const { error } = await admin.auth.admin.deleteUser(id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
