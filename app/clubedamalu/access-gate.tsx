"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

const C = {
  bg: "#f6f1e9",
  ink: "#211b16",
  card: "#fffdf9",
  gold: "#b08d57",
  goldDark: "#97733f",
  goldLight: "#c9a96a",
  wine: "#7a2e3b",
  wa: "#25b25a",
}

const serif = "var(--font-cormorant), Georgia, serif"
const sans = "var(--font-manrope), system-ui, sans-serif"

const STORAGE_KEY = "malu_club_access"
const WA_NUMBER = "5518997453135"

/* Formats a Brazilian phone number as the user types */
function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function AccessGate({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true)
  const [unlocked, setUnlocked] = useState(false)

  const [nome, setNome] = useState("")
  const [whats, setWhats] = useState("")
  const [authorized, setAuthorized] = useState(false)
  const [errNome, setErrNome] = useState("")
  const [errWhats, setErrWhats] = useState("")
  const [errAuth, setErrAuth] = useState("")
  const [saving, setSaving] = useState(false)
  const [errSave, setErrSave] = useState("")

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) setUnlocked(true)
    } catch {}
    setChecking(false)
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const n = nome.trim()
    const digits = whats.replace(/\D/g, "")
    let eN = ""
    let eW = ""
    let eA = ""
    if (n.length < 2) eN = "Conta pra gente como te chamar."
    if (digits.length < 10 || digits.length > 11) eW = "Digite um WhatsApp válido com DDD."
    if (!authorized) eA = "Precisamos da sua autorização para liberar o acesso."
    setErrNome(eN)
    setErrWhats(eW)
    setErrAuth(eA)
    setErrSave("")
    if (eN || eW || eA) return

    setSaving(true)

    // Salva o cadastro no Supabase
    try {
      const supabase = createClient()
      const { error } = await supabase.from("clube_da_malu_membros").insert({
        nome: n,
        whatsapp: digits,
        autorizou: true,
      })
      if (error) throw error
    } catch (err) {
      console.log("[v0] Erro ao salvar cadastro do clube:", err)
      setErrSave("Não conseguimos salvar seu cadastro agora. Tente novamente em instantes.")
      setSaving(false)
      return
    }

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ nome: n, whats: digits, authorized: true, at: Date.now() }),
      )
    } catch {}

    // Envia o cadastro para o WhatsApp da MALU
    const msg =
      `Oi Malu! Quero ACESSAR O CLUBE DA MALU 💛\n\n` +
      `Nome: ${n}\nWhatsApp: ${maskPhone(whats)}\n\n` +
      `Autorizo o envio de mensagens, mídias e minha inclusão no grupo secreto das amigas da Malu.`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank")

    setSaving(false)
    setUnlocked(true)
  }

  if (checking) {
    return <div style={{ minHeight: "100vh", background: C.bg }} aria-hidden />
  }

  if (unlocked) return <>{children}</>

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: C.card,
    border: "1.5px solid rgba(33,27,22,.16)",
    borderRadius: 12,
    padding: "15px 16px",
    fontSize: 15.5,
    fontFamily: sans,
    color: C.ink,
    outline: "none",
    boxSizing: "border-box",
  }
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: C.goldDark,
    marginBottom: 8,
  }
  const errStyle: React.CSSProperties = { color: C.wine, fontSize: 13, marginTop: 6, fontWeight: 500 }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        color: C.ink,
        fontFamily: sans,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(20px,5vw,56px)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 460 }}>
        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <span
            style={{
              fontSize: 11,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: C.goldDark,
              fontWeight: 700,
            }}
          >
            Clube secreto · só para amigas
          </span>
          <h1
            style={{
              fontFamily: serif,
              fontWeight: 600,
              fontSize: "clamp(40px,10vw,60px)",
              lineHeight: 0.98,
              letterSpacing: "-.02em",
              margin: "14px 0 0",
              color: C.ink,
            }}
          >
            Clube <span style={{ fontStyle: "italic", color: C.goldDark }}>da</span> Malu
          </h1>
        </div>

        {/* Lock card */}
        <form
          onSubmit={onSubmit}
          style={{
            background: C.card,
            border: "1px solid rgba(33,27,22,.1)",
            borderRadius: 20,
            padding: "clamp(26px,5vw,38px)",
            boxShadow: "0 30px 70px -40px rgba(33,27,22,.5)",
          }}
        >
          {/* Lock icon */}
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              background: C.ink,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="10" width="16" height="11" rx="2.5" stroke={C.goldLight} strokeWidth="1.7" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke={C.goldLight} strokeWidth="1.7" strokeLinecap="round" />
              <circle cx="12" cy="15" r="1.6" fill={C.goldLight} />
            </svg>
          </div>

          <h2
            style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(26px,6vw,34px)",
              lineHeight: 1.05,
              textAlign: "center",
              margin: "0 0 10px",
              color: C.ink,
            }}
          >
            Acesse o Clube
          </h2>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.6,
              textAlign: "center",
              color: "rgba(33,27,22,.66)",
              margin: "0 0 26px",
            }}
          >
            Insira seu nome e WhatsApp para desbloquear as campanhas exclusivas das amigas da Malu.
          </p>

          <div style={{ marginBottom: 18 }}>
            <label htmlFor="gate-nome" style={labelStyle}>
              Seu nome
            </label>
            <input
              id="gate-nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como podemos te chamar?"
              style={{ ...inputStyle, borderColor: errNome ? C.wine : "rgba(33,27,22,.16)" }}
              autoComplete="name"
            />
            {errNome && <p style={errStyle}>{errNome}</p>}
          </div>

          <div style={{ marginBottom: 20 }}>
            <label htmlFor="gate-whats" style={labelStyle}>
              Seu WhatsApp
            </label>
            <input
              id="gate-whats"
              type="tel"
              inputMode="numeric"
              value={whats}
              onChange={(e) => setWhats(maskPhone(e.target.value))}
              placeholder="(00) 00000-0000"
              style={{ ...inputStyle, borderColor: errWhats ? C.wine : "rgba(33,27,22,.16)" }}
              autoComplete="tel"
            />
            {errWhats && <p style={errStyle}>{errWhats}</p>}
          </div>

          {/* Authorization */}
          <label
            htmlFor="gate-auth"
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              cursor: "pointer",
              background: C.bg,
              border: `1.5px solid ${errAuth ? C.wine : "rgba(33,27,22,.12)"}`,
              borderRadius: 12,
              padding: "14px 15px",
              marginBottom: 6,
            }}
          >
            <input
              id="gate-auth"
              type="checkbox"
              checked={authorized}
              onChange={(e) => setAuthorized(e.target.checked)}
              style={{ width: 20, height: 20, accentColor: C.gold, marginTop: 1, flexShrink: 0 }}
            />
            <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "rgba(33,27,22,.82)" }}>
              Autorizo o envio de <strong>mensagens</strong> e <strong>mídias</strong> e a minha inclusão no{" "}
              <strong>grupo secreto das amigas da Malu</strong>.
            </span>
          </label>
          {errAuth && <p style={errStyle}>{errAuth}</p>}

          <button
            type="submit"
            disabled={saving}
            style={{
              width: "100%",
              marginTop: 20,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: C.ink,
              color: C.bg,
              fontSize: 15.5,
              fontWeight: 700,
              fontFamily: sans,
              padding: "17px 24px",
              borderRadius: 100,
              border: "none",
              cursor: saving ? "wait" : "pointer",
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? "Liberando seu acesso..." : "Acessar o Clube"}
            {!saving && <span style={{ fontSize: 17 }}>→</span>}
          </button>
          {errSave && <p style={{ ...errStyle, textAlign: "center" }}>{errSave}</p>}

          <p
            style={{
              fontSize: 11.5,
              textAlign: "center",
              color: "rgba(33,27,22,.5)",
              lineHeight: 1.5,
              margin: "16px 0 0",
            }}
          >
            Seus dados são usados apenas para o contato da MALU MODAS. De amiga pra amiga. 💛
          </p>
        </form>
      </div>
    </div>
  )
}
