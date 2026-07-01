"use client"

import React from "react"

import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 lg:py-28 px-6 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.4em] uppercase opacity-70 mb-3 font-sans">
          Exclusividade
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-4 text-balance">
          Receba Novidades em Primeira Mao
        </h2>
        <p className="font-sans text-sm opacity-70 mb-8 leading-relaxed">
          Cadastre-se e receba 10% de desconto na sua primeira compra, alem de acesso antecipado as novas colecoes.
        </p>

        {submitted ? (
          <p className="font-sans text-sm opacity-90">
            Obrigada por se cadastrar! Em breve voce recebera nossas novidades.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-3 text-sm font-sans placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground text-primary-foreground"
            />
            <button
              type="submit"
              className="bg-primary-foreground text-primary px-8 py-3 text-xs tracking-[0.25em] uppercase font-sans hover:opacity-90 transition-opacity"
            >
              Cadastrar
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
