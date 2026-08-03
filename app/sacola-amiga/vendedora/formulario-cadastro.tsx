"use client"

import { useState, useTransition } from "react"
import { inserirCadastro } from "@/app/sacola-amiga/actions"
import {
  TAMANHOS, TIPOS_ROUPA, CORES, ESTILOS,
  DIAS_SEMANA, HORARIOS, COMO_CHEGOU,
  type SacolaAmigarInsert,
} from "@/lib/sacola-amiga/types"

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function toggleArr(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]
}

type CheckGroupProps = {
  options: string[]
  selected: string[]
  onChange: (v: string[]) => void
}

function CheckGroup({ options, selected, onChange }: CheckGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const on = selected.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(toggleArr(selected, opt))}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              on
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-foreground border-border hover:border-foreground/50"
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

type RadioGroupProps = {
  options: string[]
  value: string
  onChange: (v: string) => void
}

function RadioGroup({ options, value, onChange }: RadioGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const on = value === opt
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              on
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-background text-foreground border-border hover:border-foreground/50"
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

export default function FormularioCadastro({ nomeVendedora }: { nomeVendedora: string }) {
  const [isPending, startTransition] = useTransition()
  const [sucesso, setSucesso] = useState(false)
  const [erroGeral, setErroGeral] = useState("")

  // Campos
  const [nomeCliente, setNomeCliente] = useState("")
  const [telefone, setTelefone] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [tamanho, setTamanho] = useState("")
  const [tiposRoupa, setTiposRoupa] = useState<string[]>([])
  const [cores, setCores] = useState<string[]>([])
  const [estilo, setEstilo] = useState("")
  const [dias, setDias] = useState<string[]>([])
  const [horario, setHorario] = useState("")
  const [observacoes, setObservacoes] = useState("")
  const [comoChegou, setComoChegou] = useState("")

  // Erros
  const [erroNome, setErroNome] = useState("")
  const [erroTel, setErroTel] = useState("")

  const resetForm = () => {
    setNomeCliente(""); setTelefone(""); setBairro(""); setCidade("")
    setTamanho(""); setTiposRoupa([]); setCores([]); setEstilo("")
    setDias([]); setHorario(""); setObservacoes(""); setComoChegou("")
    setErroNome(""); setErroTel(""); setErroGeral("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let valid = true

    if (nomeCliente.trim().length < 2) {
      setErroNome("Informe o nome completo da cliente."); valid = false
    } else setErroNome("")

    const digits = telefone.replace(/\D/g, "")
    if (digits.length < 10) {
      setErroTel("Informe um telefone válido com DDD."); valid = false
    } else setErroTel("")

    if (!valid) return

    const payload: SacolaAmigarInsert = {
      nome_cliente: nomeCliente.trim(),
      telefone: digits,
      bairro: bairro.trim() || null,
      cidade: cidade.trim() || null,
      nome_vendedora: nomeVendedora,
      tamanho: tamanho || null,
      tipos_roupa: tiposRoupa.length ? tiposRoupa : null,
      cores_preferidas: cores.length ? cores : null,
      estilo: estilo || null,
      dias_preferidos: dias.length ? dias : null,
      horario_preferido: horario || null,
      observacoes: observacoes.trim() || null,
      como_chegou: comoChegou || null,
    }

    setErroGeral("")
    startTransition(async () => {
      const res = await inserirCadastro(payload)
      if (!res.ok) {
        setErroGeral(res.error ?? "Erro ao salvar.")
      } else {
        setSucesso(true)
        resetForm()
      }
    })
  }

  if (sucesso) {
    return (
      <div className="text-center py-16 px-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-foreground mb-6">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-foreground mb-2">Cadastro realizado!</h2>
        <p className="font-sans text-sm text-muted-foreground mb-8 max-w-xs mx-auto">
          A cliente foi cadastrada com sucesso na Sacola Amiga.
        </p>
        <button
          type="button"
          onClick={() => setSucesso(false)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[.15em] text-background hover:opacity-90 transition-opacity"
        >
          Cadastrar nova cliente
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Bloco 1 — Dados da cliente */}
      <section>
        <h2 className="font-serif text-lg text-foreground mb-4 pb-2 border-b border-border">
          Dados da Cliente
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-1.5">
              Nome completo <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(e.target.value)}
              placeholder="Nome da cliente"
              className={`w-full rounded-sm border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 ${erroNome ? "border-destructive" : "border-border"}`}
            />
            {erroNome && <p className="mt-1 text-xs text-destructive">{erroNome}</p>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-1.5">
              Telefone / WhatsApp <span className="text-accent">*</span>
            </label>
            <input
              type="tel"
              inputMode="numeric"
              value={telefone}
              onChange={(e) => setTelefone(maskPhone(e.target.value))}
              placeholder="(18) 99999-9999"
              className={`w-full rounded-sm border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 ${erroTel ? "border-destructive" : "border-border"}`}
            />
            {erroTel && <p className="mt-1 text-xs text-destructive">{erroTel}</p>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-1.5">
              Cidade
            </label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Ex: Adamantina"
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-1.5">
              Bairro
            </label>
            <input
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Bairro"
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
        </div>
      </section>

      {/* Bloco 2 — Preferências de moda */}
      <section>
        <h2 className="font-serif text-lg text-foreground mb-4 pb-2 border-b border-border">
          Preferências de Moda
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-2">
              Tamanho que usa
            </label>
            <RadioGroup options={TAMANHOS} value={tamanho} onChange={setTamanho} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-2">
              Tipos de roupa que gosta (pode marcar vários)
            </label>
            <CheckGroup options={TIPOS_ROUPA} selected={tiposRoupa} onChange={setTiposRoupa} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-2">
              Cores preferidas
            </label>
            <CheckGroup options={CORES} selected={cores} onChange={setCores} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-2">
              Estilo predominante
            </label>
            <RadioGroup options={ESTILOS} value={estilo} onChange={setEstilo} />
          </div>
        </div>
      </section>

      {/* Bloco 3 — Disponibilidade */}
      <section>
        <h2 className="font-serif text-lg text-foreground mb-4 pb-2 border-b border-border">
          Melhores Dias para Receber
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-2">
              Dias disponíveis
            </label>
            <CheckGroup options={DIAS_SEMANA} selected={dias} onChange={setDias} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-2">
              Melhor horário
            </label>
            <RadioGroup options={HORARIOS} value={horario} onChange={setHorario} />
          </div>
        </div>
      </section>

      {/* Bloco 4 — Observações + origem */}
      <section>
        <h2 className="font-serif text-lg text-foreground mb-4 pb-2 border-b border-border">
          Informações Adicionais
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-1.5">
              Observações específicas da cliente
            </label>
            <textarea
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Preferências especiais, tamanho exato, marcas que gosta, o que NÃO gosta, etc."
              rows={3}
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[.14em] font-semibold text-muted-foreground mb-2">
              Como a cliente chegou até nós
            </label>
            <RadioGroup options={COMO_CHEGOU} value={comoChegou} onChange={setComoChegou} />
          </div>
        </div>
      </section>

      {/* Rodapé do form */}
      <div className="pt-2">
        <div className="rounded-sm bg-secondary/60 px-4 py-3 mb-4">
          <p className="text-xs text-muted-foreground">
            Cadastro realizado por{" "}
            <span className="font-semibold text-foreground">{nomeVendedora}</span>
          </p>
        </div>

        {erroGeral && (
          <p className="mb-3 text-sm text-destructive text-center">{erroGeral}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-semibold uppercase tracking-[.15em] text-background hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Salvando cadastro..." : "Salvar Cadastro na Sacola Amiga"}
        </button>
      </div>
    </form>
  )
}
