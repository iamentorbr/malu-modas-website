export type SacolaAmiga = {
  id: string
  created_at: string
  updated_at: string
  nome_cliente: string
  telefone: string
  bairro: string | null
  cidade: string | null
  nome_vendedora: string
  tamanho: string | null
  tipos_roupa: string[] | null
  cores_preferidas: string[] | null
  estilo: string | null
  dias_preferidos: string[] | null
  horario_preferido: string | null
  observacoes: string | null
  como_chegou: string | null
}

export type SacolaAmigarInsert = Omit<SacolaAmiga, "id" | "created_at" | "updated_at">

export const TAMANHOS = [
  "34", "36", "38", "40", "42", "44",
  "46 / Plus P", "48 / Plus M", "50 / Plus G", "52 / Plus GG", "54 / Plus XGG", "Único",
]

export const TIPOS_ROUPA = [
  "Vestido", "Blusa", "Calça", "Saia", "Conjunto",
  "Macacão", "Short", "Jaqueta / Casaco", "Lingerie",
]

export const CORES = [
  "Preto", "Branco", "Nude / Bege", "Azul", "Rosa",
  "Vermelho", "Verde", "Amarelo", "Estampado", "Colorido em geral",
]

export const ESTILOS = [
  "Casual / Dia a Dia",
  "Trabalho / Social",
  "Festa / Eventos",
  "Esportivo / Confortável",
  "Variado (gosta de tudo)",
]

export const DIAS_SEMANA = [
  "Segunda-feira", "Terça-feira", "Quarta-feira",
  "Quinta-feira", "Sexta-feira", "Sábado", "Qualquer dia",
]

export const HORARIOS = ["Manhã", "Tarde", "Noite", "Qualquer horário"]

export const COMO_CHEGOU = [
  "Instagram",
  "WhatsApp / Indicação",
  "Passou pela loja",
  "Facebook",
  "Já é cliente",
  "Outro",
]
