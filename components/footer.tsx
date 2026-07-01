import Link from "next/link"
import { Instagram, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-background py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl tracking-[0.1em] mb-4">MALU MODAS</h3>
            <p className="font-sans text-sm opacity-70 leading-relaxed">
              Moda feminina com estilo e elegancia para a mulher moderna de Adamantina e regiao.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://instagram.com/eusoumalu.modas"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/5518997453135"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-sans">Colecoes</h4>
            <ul className="space-y-3">
              {["Vestidos", "Conjuntos", "Blusas", "Saias", "Acessorios", "Promocoes"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-sans">Informacoes</h4>
            <ul className="space-y-3">
              {["Sobre Nos", "Politica de Trocas", "Formas de Pagamento", "Envio e Entrega", "Termos de Uso"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-sans">Visite-nos</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <p className="font-sans text-sm opacity-70 leading-relaxed">
                  Av. Rio Branco, 570
                  <br />
                  Adamantina - SP
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <p className="font-sans text-sm opacity-70 leading-relaxed">
                  Seg a Sex: 9h - 18h
                  <br />
                  Sab: 9h - 13h
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <p className="font-sans text-sm opacity-70 leading-relaxed">
                  (18) 99745-3135
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs opacity-50">
            2026 MALU MODAS. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs opacity-50">
            Adamantina, SP - Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
