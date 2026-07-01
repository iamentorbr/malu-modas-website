import Image from "next/image"
import { Instagram, MapPin, Phone, Users } from "lucide-react"

export const metadata = {
  title: "Links | EU SOU MALU",
  description: "Links importantes da MALU MODAS - Moda Feminina em Adamantina, SP",
}

const links = [
  {
    name: "Amigas da MALU",
    description: "Grupo de Clientes",
    href: "https://chat.whatsapp.com/FO2hYWwaLm1LUE1Yagokus?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnTsebpWd8ReRK5RdV1dwTbOpPoORd3wPn_agzfYb06J13sHA8jrQ1_uI6qos_aem_m2cE4HKbrViSSOHvo7Rssw",
    icon: Users,
    featured: true,
  },
  {
    name: "Instagram",
    description: "@eusoumalu.modas",
    href: "https://instagram.com/eusoumalu.modas",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    description: "(18) 99745-3135",
    href: "https://wa.me/5518997453135",
    icon: Phone,
  },
  {
    name: "Nossa Loja",
    description: "Av. Rio Branco, 570 - Adamantina, SP",
    href: "https://maps.google.com/?q=Av.+Rio+Branco,+570,+Adamantina,+SP",
    icon: MapPin,
  },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] flex flex-col items-center px-4 py-12">
      {/* Logo and Header */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-[#c9a227]/30">
          <Image
            src="/images/logo-malu.jpg"
            alt="EU SOU MALU"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[#c9a227] text-sm mt-1 tracking-widest uppercase">Moda Feminina</p>
      </div>

      {/* Links */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 w-full p-4 rounded-lg transition-all duration-300 ${
                link.featured
                  ? "bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#b8922a] hover:to-[#c9a227] text-[#1a1a1a]"
                  : "bg-[#f5f3ed] hover:bg-[#e8e4d9] text-[#1a1a1a]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  link.featured ? "bg-[#1a1a1a]/20" : "bg-[#c9a227]/10"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${link.featured ? "text-[#1a1a1a]" : "text-[#c9a227]"}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium ${link.featured ? "text-[#1a1a1a]" : "text-[#1a1a1a]"}`}
                >
                  {link.name}
                </p>
                <p
                  className={`text-sm truncate ${
                    link.featured ? "text-[#1a1a1a]/70" : "text-[#1a1a1a]/60"
                  }`}
                >
                  {link.description}
                </p>
              </div>
              <svg
                className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 ${
                  link.featured ? "text-[#1a1a1a]/60" : "text-[#1a1a1a]/40"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-[#e8e4d9]/40 text-xs">Adamantina - SP</p>
      </div>
    </main>
  )
}
