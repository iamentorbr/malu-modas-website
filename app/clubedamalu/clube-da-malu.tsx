"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

/* ---------- palette ---------- */
const C = {
  bg: "#f6f1e9",
  beige: "#efe7da",
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

const WA_NUMBER = "5518997453135"
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
const IG_LINK = "https://instagram.com/eusoumalu.modas"
const SITE_LINK = "https://eusoumalu.com.br"
const waMain = wa("Oi Malu! Vim pela pagina Clube da Malu e quero entrar para a lista das amigas 💛")

/* ---------- scroll reveal hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, shown }
}

function Reveal({
  children,
  style,
  as = "div",
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  as?: "div" | "section"
}) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  const Tag = as as any
  return (
    <Tag
      ref={ref}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(28px)",
        transition: "opacity .8s cubic-bezier(.19,.7,.2,1), transform .8s cubic-bezier(.19,.7,.2,1)",
      }}
    >
      {children}
    </Tag>
  )
}

/* ---------- countdown ---------- */
function useCountdown() {
  const [t, setT] = useState({ d: "00", h: "00", m: "00", s: "00" })
  useEffect(() => {
    const key = "malu_offer_deadline"
    let dl = 0
    try {
      dl = Number.parseInt(localStorage.getItem(key) || "0", 10)
    } catch {}
    const now = Date.now()
    if (!dl || dl < now) {
      dl = now + 48 * 3600 * 1000
      try {
        localStorage.setItem(key, String(dl))
      } catch {}
    }
    const p = (n: number) => String(n).padStart(2, "0")
    const tick = () => {
      let diff = dl - Date.now()
      if (diff <= 0) {
        setT({ d: "00", h: "00", m: "00", s: "00" })
        return
      }
      let s = Math.floor(diff / 1000)
      const d = Math.floor(s / 86400)
      s -= d * 86400
      const h = Math.floor(s / 3600)
      s -= h * 3600
      const m = Math.floor(s / 60)
      s -= m * 60
      setT({ d: p(d), h: p(h), m: p(m), s: p(s) })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

/* ---------- data ---------- */
const benefits = [
  { n: "01", t: "Acesso antecipado às campanhas" },
  { n: "02", t: "Peças selecionadas com preços especiais" },
  { n: "03", t: "Curadoria de moda para se vestir bem" },
  { n: "04", t: "Marcas que as clientes amam" },
  { n: "05", t: "Ofertas por tempo limitado" },
]

const prices = [
  {
    tag: "Achadinhos",
    int: "29",
    cents: "90",
    title: "Curingas do dia a dia",
    desc: "Peças-chave e básicos de presença por um preço que surpreende.",
    featured: false,
    bg: C.card,
    border: "rgba(33,27,22,.12)",
    shadow: "none",
    textColor: C.ink,
    tagColor: C.goldDark,
    descColor: "rgba(33,27,22,.66)",
    btnBg: "transparent",
    btnColor: C.ink,
    btnBorder: C.ink,
    href: wa("Oi Malu! Quero conferir a seleção de peças por R$ 29,90 🛍️"),
  },
  {
    tag: "Seleção",
    int: "39",
    cents: "90",
    title: "Bem-vestir sem pesar",
    desc: "Combinações versáteis para trabalho e rotina, com muito estilo.",
    featured: true,
    bg: C.ink,
    border: C.goldLight,
    shadow: "0 30px 60px -30px rgba(33,27,22,.55)",
    textColor: C.bg,
    tagColor: C.goldLight,
    descColor: "rgba(246,241,233,.66)",
    btnBg: C.goldLight,
    btnColor: C.ink,
    btnBorder: C.goldLight,
    href: wa("Oi Malu! Quero conferir a seleção de peças por R$ 39,90 🛍️"),
  },
  {
    tag: "Peças desejo",
    int: "79",
    cents: "90",
    title: "Marcas queridinhas",
    desc: "As marcas mais amadas e tecidos especiais, com preço de amiga.",
    featured: false,
    bg: C.card,
    border: "rgba(33,27,22,.12)",
    shadow: "none",
    textColor: C.ink,
    tagColor: C.goldDark,
    descColor: "rgba(33,27,22,.66)",
    btnBg: "transparent",
    btnColor: C.ink,
    btnBorder: C.ink,
    href: wa("Oi Malu! Quero conferir a seleção de peças por R$ 79,90 🛍️"),
  },
]

const campaigns = [
  { name: "OFF DO OFF", desc: "Descontos sobre descontos nas peças que já estavam em oferta. O melhor preço da casa." },
  { name: "Marcas que todas adoram", desc: "Aquelas marcas queridinhas que você procura, reunidas em um só lugar." },
  { name: "Curadoria da semana", desc: "Uma seleção nova toda semana, pensada para vestir a vida real." },
  { name: "Achadinhos da Malu", desc: "Preço pequeno, impacto grande. Os garimpos que só a Malu encontra." },
  { name: "Tendências antecipadas", desc: "O que vem por aí na moda, antes de todo mundo saber." },
  { name: "Peças selecionadas", desc: "A curadoria essencial: qualidade e preço em equilíbrio perfeito." },
].map((c) => ({ ...c, href: wa(`Oi Malu! Quero saber mais sobre a campanha "${c.name}" ✨`) }))

const rules = [
  { n: "01", t: "Não reservamos as peças", d: "As peças de campanha não ficam separadas. A prioridade é de quem fecha primeiro." },
  { n: "02", t: "Abaixo de R$ 99,90 não parcelamos", d: "Peças com valor inferior a R$ 99,90 são pagas à vista, sem parcelamento." },
  { n: "03", t: "Frete por conta da cliente", d: "O frete ou a entrega via motoboy é de responsabilidade da cliente." },
  { n: "04", t: "Reserva só com pagamento", d: "A confirmação da reserva ocorre após a confirmação do pagamento do PIX ou pagamento na loja." },
  { n: "05", t: "Estoque limitado", d: "As campanhas valem enquanto durarem as peças selecionadas. Sem garantia de reposição." },
  { n: "06", t: "Preços promocionais", d: "Valores de campanha não são cumulativos com outras promoções e podem mudar sem aviso." },
]

const pillars = [
  { k: "Real", l: "para a sua rotina" },
  { k: "Curada", l: "peça a peça" },
  { k: "Acessível", l: "preço de amiga" },
  { k: "Desejo", l: "que veste bem" },
]

/* ---------- component ---------- */
export default function ClubeDaMalu() {
  const cd = useCountdown()

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: sans, minHeight: "100vh" }}>
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(246,241,233,.82)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(33,27,22,.09)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px clamp(18px,5vw,56px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontFamily: serif, fontWeight: 700, fontSize: 24, letterSpacing: ".02em", color: C.ink }}>
              CLUBE DA MALU
            </span>
            <span style={{ height: 16, width: 1, background: "rgba(33,27,22,.2)" }} />
            <span
              style={{
                fontSize: 11,
                letterSpacing: ".24em",
                textTransform: "uppercase",
                color: C.goldDark,
                fontWeight: 600,
              }}
            >
              Amigas da Malu
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a href="#regras" style={{ textDecoration: "none", fontSize: 13.5, fontWeight: 600, color: C.ink }}>
              Regras das campanhas
            </a>
            <a
              href={waMain}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: C.ink,
                color: C.bg,
                fontSize: 13.5,
                fontWeight: 600,
                padding: "11px 20px",
                borderRadius: 100,
              }}
            >
              Falar com a Malu
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", padding: "clamp(48px,6vw,84px) clamp(18px,5vw,56px) clamp(56px,7vw,96px)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "clamp(32px,5vw,72px)",
            alignItems: "center",
          }}
        >
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "7px 15px",
                border: "1px solid rgba(122,46,59,.3)",
                borderRadius: 100,
                marginBottom: 26,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.wine }} />
              <span style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: C.wine, fontWeight: 600 }}>
                Clube secreto · só para amigas
              </span>
            </div>
            <h1
              style={{
                fontFamily: serif,
                fontWeight: 600,
                fontSize: "clamp(52px,9vw,104px)",
                lineHeight: 0.94,
                letterSpacing: "-.02em",
                margin: "0 0 24px",
                color: C.ink,
              }}
            >
              Clube
              <br />
              <span style={{ fontStyle: "italic", color: C.goldDark }}>da</span> Malu
            </h1>
            <p style={{ fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.65, color: "rgba(33,27,22,.72)", maxWidth: 500, margin: "0 0 34px" }}>
              As melhores campanhas da MALU reunidas em um clube secreto para quem ama boas marcas, bons preços e acesso
              antecipado às tendências.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <a
                href="#precos"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: C.ink,
                  color: C.bg,
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "16px 30px",
                  borderRadius: 100,
                }}
              >
                Ver peças selecionadas <span style={{ fontSize: 17 }}>→</span>
              </a>
              <a
                href={waMain}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: 15,
                  fontWeight: 600,
                  color: C.ink,
                  padding: "16px 8px",
                  borderBottom: `1.5px solid ${C.gold}`,
                }}
              >
                Falar com a Malu
              </a>
            </div>
            <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex" }}>
                <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#e2d3bc", border: `2px solid ${C.bg}` }} />
                <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#cbb59a", border: `2px solid ${C.bg}`, marginLeft: -10 }} />
                <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#b7a184", border: `2px solid ${C.bg}`, marginLeft: -10 }} />
              </div>
              <span style={{ fontSize: 13, color: "rgba(33,27,22,.6)", lineHeight: 1.4 }}>
                Curadoria MALU · Adamantina/SP
                <br />
                vestindo o seu desejo desde sempre
              </span>
            </div>
          </Reveal>

          <Reveal style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: 6,
                overflow: "hidden",
                border: "1px solid rgba(33,27,22,.1)",
              }}
            >
              <img
                src="/clubedamalu/hero-editorial.png"
                alt="Editorial de moda feminina da MALU MODAS"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -22,
                left: -18,
                background: C.card,
                border: "1px solid rgba(33,27,22,.1)",
                borderRadius: 6,
                padding: "16px 20px",
                boxShadow: "0 18px 40px -20px rgba(33,27,22,.4)",
              }}
            >
              <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: C.goldDark, fontWeight: 700, marginBottom: 4 }}>
                A partir de
              </div>
              <div style={{ fontFamily: serif, fontSize: 34, fontWeight: 700, lineHeight: 1, color: C.ink }}>
                R$ 29<span style={{ fontSize: 20 }}>,90</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXCLUSIVIDADE */}
      <section style={{ background: C.ink, color: C.bg, padding: "clamp(64px,8vw,112px) clamp(18px,5vw,56px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 56px" }}>
            <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.goldLight, fontWeight: 600 }}>
              Bem-vinda ao clube
            </span>
            <h2 style={{ fontFamily: serif, fontWeight: 600, fontSize: "clamp(30px,5vw,52px)", lineHeight: 1.05, letterSpacing: "-.01em", margin: "18px 0 22px" }}>
              Você entrou para o Clube da Malu
            </h2>
            <p style={{ fontSize: "clamp(15px,1.8vw,18px)", lineHeight: 1.7, color: "rgba(246,241,233,.66)", margin: 0 }}>
              Por aqui, reunimos campanhas especiais, peças selecionadas, marcas queridinhas e oportunidades que aparecem
              antes para quem acompanha a MALU de perto.
            </p>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 1,
              background: "rgba(246,241,233,.12)",
              border: "1px solid rgba(246,241,233,.12)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {benefits.map((b) => (
              <Reveal key={b.n} style={{ background: C.ink, padding: "30px 26px", display: "flex", flexDirection: "column", gap: 14, minHeight: 150 }}>
                <span style={{ fontFamily: serif, fontSize: 26, color: C.goldLight, lineHeight: 1 }}>{b.n}</span>
                <span style={{ fontSize: 15.5, fontWeight: 500, lineHeight: 1.4, color: C.bg }}>{b.t}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PREÇOS */}
      <section id="precos" style={{ padding: "clamp(64px,8vw,112px) clamp(18px,5vw,56px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 20px" }}>
            <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.goldDark, fontWeight: 600 }}>
              Peças selecionadas
            </span>
            <h2 style={{ fontFamily: serif, fontWeight: 600, fontSize: "clamp(30px,5vw,52px)", lineHeight: 1.05, letterSpacing: "-.01em", margin: "16px 0 0", color: C.ink }}>
              Começando com peças selecionadas
            </h2>
          </Reveal>

          <Reveal style={{ display: "flex", justifyContent: "center", margin: "0 0 44px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "clamp(10px,2vw,20px)",
                background: C.card,
                border: "1px solid rgba(33,27,22,.12)",
                borderRadius: 100,
                padding: "12px 22px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: C.wine, fontWeight: 700 }}>Termina em</span>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { v: cd.d, l: "dias" },
                  { v: cd.h, l: "horas" },
                  { v: cd.m, l: "min" },
                  { v: cd.s, l: "seg" },
                ].map((u) => (
                  <div key={u.l} style={{ textAlign: "center", minWidth: 44 }}>
                    <div style={{ fontFamily: serif, fontSize: 30, fontWeight: 700, lineHeight: 1, color: C.ink }}>{u.v}</div>
                    <div style={{ fontSize: 9.5, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(33,27,22,.5)", marginTop: 3, fontWeight: 600 }}>
                      {u.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 22, alignItems: "stretch" }}>
            {prices.map((p) => (
              <Reveal
                key={p.tag}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  background: p.bg,
                  border: `1.5px solid ${p.border}`,
                  borderRadius: 12,
                  padding: "34px 30px 30px",
                  boxShadow: p.shadow,
                }}
              >
                {p.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: -13,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: C.wine,
                      color: C.bg,
                      fontSize: 10.5,
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      padding: "6px 16px",
                      borderRadius: 100,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Favorito das amigas
                  </span>
                )}
                <span style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, color: p.tagColor, marginBottom: 14 }}>
                  {p.tag}
                </span>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 4, color: p.textColor, marginBottom: 6 }}>
                  <span style={{ fontFamily: serif, fontSize: 22, fontWeight: 600, marginTop: 12 }}>R$</span>
                  <span style={{ fontFamily: serif, fontSize: 64, fontWeight: 700, lineHeight: 0.9 }}>{p.int}</span>
                  <span style={{ fontFamily: serif, fontSize: 28, fontWeight: 600, marginTop: 8 }}>,{p.cents}</span>
                </div>
                <span style={{ fontSize: 16, fontWeight: 600, color: p.textColor, marginBottom: 8 }}>{p.title}</span>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: p.descColor, margin: "0 0 26px", flex: 1 }}>{p.desc}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    background: p.btnBg,
                    color: p.btnColor,
                    border: `1.5px solid ${p.btnBorder}`,
                    fontSize: 14.5,
                    fontWeight: 600,
                    padding: 14,
                    borderRadius: 100,
                  }}
                >
                  Conferir seleção
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ textAlign: "center" }}>
            <p style={{ fontSize: 12.5, color: "rgba(33,27,22,.5)", margin: "30px 0 0", letterSpacing: ".02em" }}>
              Estoque limitado. Campanhas válidas enquanto durarem as peças selecionadas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAMPANHAS */}
      <section style={{ background: C.beige, padding: "clamp(64px,8vw,112px) clamp(18px,5vw,56px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ maxWidth: 640, margin: "0 0 48px" }}>
            <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.goldDark, fontWeight: 600 }}>
              Curadoria de campanhas
            </span>
            <h2 style={{ fontFamily: serif, fontWeight: 600, fontSize: "clamp(30px,5vw,52px)", lineHeight: 1.05, letterSpacing: "-.01em", margin: "16px 0 0", color: C.ink }}>
              As melhores campanhas da MALU em um só lugar
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
            {campaigns.map((c) => (
              <Reveal
                key={c.name}
                style={{ display: "flex", flexDirection: "column", background: C.card, border: "1px solid rgba(33,27,22,.1)", borderRadius: 12, overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/10",
                    background: "repeating-linear-gradient(135deg,#efe7da,#efe7da 11px,#e6dbc9 11px,#e6dbc9 22px)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      fontFamily: "ui-monospace, Menlo, monospace",
                      fontSize: 10,
                      letterSpacing: ".03em",
                      color: "rgba(33,27,22,.5)",
                      background: "rgba(255,253,249,.85)",
                      padding: "5px 9px",
                      borderRadius: 4,
                    }}
                  >
                    campanha · {c.name}
                  </span>
                </div>
                <div style={{ padding: "24px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontFamily: serif, fontWeight: 700, fontSize: 26, lineHeight: 1.05, letterSpacing: "-.01em", margin: "0 0 10px", color: C.ink }}>
                    {c.name}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(33,27,22,.66)", margin: "0 0 22px", flex: 1 }}>{c.desc}</p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.ink,
                      alignSelf: "flex-start",
                      paddingBottom: 3,
                      borderBottom: `1.5px solid ${C.gold}`,
                    }}
                  >
                    Ver campanha <span>→</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURADORIA */}
      <section style={{ padding: "clamp(64px,8vw,120px) clamp(18px,5vw,56px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.goldDark, fontWeight: 600 }}>A curadoria</span>
            <h2 style={{ fontFamily: serif, fontWeight: 600, fontSize: "clamp(32px,5.5vw,58px)", lineHeight: 1.04, letterSpacing: "-.015em", margin: "20px 0 28px", color: C.ink }}>
              Moda escolhida por quem
              <br />
              conhece você
            </h2>
            <p style={{ fontSize: "clamp(16px,2vw,20px)", lineHeight: 1.7, color: "rgba(33,27,22,.72)", margin: "0 auto", maxWidth: 660 }}>
              A MALU seleciona peças pensando na vida real: trabalho, encontros, rotina, conforto, beleza e presença.
              Aqui, preço bom não significa qualquer peça. Significa{" "}
              <span style={{ color: C.wine, fontStyle: "italic", fontFamily: serif, fontSize: "1.12em" }}>oportunidade com curadoria</span>.
            </p>
          </Reveal>
          <Reveal style={{ display: "flex", justifyContent: "center", gap: "clamp(28px,6vw,72px)", flexWrap: "wrap", marginTop: 52 }}>
            {pillars.map((p) => (
              <div key={p.k} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: serif, fontSize: "clamp(34px,5vw,48px)", fontWeight: 700, color: C.gold, lineHeight: 1 }}>{p.k}</div>
                <div style={{ fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(33,27,22,.6)", marginTop: 8, fontWeight: 600 }}>
                  {p.l}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* REGRAS */}
      <section id="regras" style={{ background: C.beige, padding: "clamp(64px,8vw,112px) clamp(18px,5vw,56px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", maxWidth: 660, margin: "0 auto 20px" }}>
            <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: C.goldDark, fontWeight: 600 }}>Combinado de amiga</span>
            <h2 style={{ fontFamily: serif, fontWeight: 600, fontSize: "clamp(30px,5vw,52px)", lineHeight: 1.05, letterSpacing: "-.01em", margin: "16px 0 18px", color: C.ink }}>
              Regras das campanhas
            </h2>
            <p style={{ fontSize: "clamp(15px,1.8vw,18px)", lineHeight: 1.65, color: "rgba(33,27,22,.68)", margin: 0 }}>
              Pra tudo fluir bem entre amigas, essas são as regrinhas das peças em campanha e promoção. Transparência
              sempre — assim ninguém sai no prejuízo.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 1,
              background: "rgba(33,27,22,.1)",
              border: "1px solid rgba(33,27,22,.1)",
              borderRadius: 12,
              overflow: "hidden",
              marginTop: 44,
            }}
          >
            {rules.map((r) => (
              <Reveal key={r.n} style={{ background: C.card, padding: "30px 28px", display: "flex", flexDirection: "column", gap: 12, minHeight: 170 }}>
                <span style={{ fontFamily: serif, fontSize: 30, fontWeight: 700, color: C.gold, lineHeight: 1 }}>{r.n}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: C.ink, lineHeight: 1.3 }}>{r.t}</span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(33,27,22,.66)" }}>{r.d}</span>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ display: "flex", alignItems: "flex-start", gap: 14, background: C.ink, color: C.bg, borderRadius: 12, padding: "24px 28px", marginTop: 22 }}>
            <span style={{ fontSize: 20, lineHeight: 1.3 }}>💛</span>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(246,241,233,.82)", margin: 0 }}>
              Ao participar das campanhas, você concorda com essas regras. Elas existem para garantir preço justo e
              organização — de amiga pra amiga. Dúvidas? Chama a Malu no WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer style={{ background: C.bg, padding: "clamp(48px,6vw,72px) clamp(18px,5vw,56px) 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 32,
              alignItems: "start",
              paddingBottom: 36,
              borderBottom: "1px solid rgba(33,27,22,.12)",
            }}
          >
            <div>
              <div style={{ fontFamily: serif, fontWeight: 700, fontSize: 28, letterSpacing: ".02em", color: C.ink }}>CLUBE DA MALU</div>
              <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 20, color: C.goldDark, margin: "6px 0 0" }}>Na MALU, vestimos o seu desejo.</p>
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(33,27,22,.5)", fontWeight: 700, marginBottom: 14 }}>Onde estamos</div>
              <p style={{ fontSize: 15, color: "rgba(33,27,22,.72)", lineHeight: 1.6, margin: 0 }}>
                MALU MODAS
                <br />
                Adamantina / SP
              </p>
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(33,27,22,.5)", fontWeight: 700, marginBottom: 14 }}>Fale com a gente</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href={IG_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", fontSize: 15, fontWeight: 600, color: C.ink }}>
                  Instagram · @eusoumalu.modas
                </a>
                <a href={waMain} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", fontSize: 15, fontWeight: 600, color: C.ink }}>
                  WhatsApp · (18) 99745-3135
                </a>
                <a href={SITE_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", fontSize: 15, fontWeight: 600, color: C.ink }}>
                  Site · eusoumalu.com.br
                </a>
                <a href="#regras" style={{ textDecoration: "none", fontSize: 15, fontWeight: 600, color: C.ink }}>
                  Regras das campanhas
                </a>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 24 }}>
            <span style={{ fontSize: 12.5, color: "rgba(33,27,22,.5)" }}>© 2026 MALU MODAS — Adamantina/SP. Todos os direitos reservados.</span>
            <span style={{ fontSize: 12.5, color: "rgba(33,27,22,.5)" }}>Clube da Malu · página exclusiva</span>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={waMain}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 60,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: C.wa,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 12px 28px -10px rgba(37,178,90,.7)",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.24.68-1.42 1.32-1.95 1.36-.5.05-.96.24-3.24-.68-2.73-1.08-4.47-3.85-4.6-4.03-.14-.18-1.11-1.48-1.11-2.82s.7-2 .95-2.27c.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.49-.09.18-.14.29-.27.45-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.72 1.18 1.54 1.92 1.06.94 1.95 1.24 2.22 1.38.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.6-.14.24.09 1.55.73 1.81.86.27.14.45.2.51.31.07.11.07.64-.17 1.32z" />
        </svg>
      </a>
    </div>
  )
}
