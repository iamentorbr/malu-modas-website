"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, User } from "lucide-react"

const navLinksLeft = [
  { href: "/shop", label: "Shop" },
  { href: "/sacola-amiga", label: "Sacola Amiga" },
]

const navLinksRight = [
  { href: "/magazine", label: "Malu Magazine" },
  { href: "#contato", label: "Contato" },
]

const navLinks = [...navLinksLeft, ...navLinksRight]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Nav Left */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegacao principal">
          {navLinksLeft.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <span className="font-serif text-2xl lg:text-3xl tracking-[0.15em] text-foreground">
            MALU MODAS
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mt-0.5">
            Moda Feminina
          </span>
        </Link>

        {/* Desktop Nav Right */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinksRight.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Buscar" className="text-foreground hover:text-accent transition-colors hidden lg:block">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Minha conta" className="text-foreground hover:text-accent transition-colors hidden lg:block">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-6" aria-label="Menu mobile">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors py-2 border-b border-border"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
