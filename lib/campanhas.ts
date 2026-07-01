export type Produto = {
  nome: string
  descricao: string
  preco: string
  image: string
}

export type Campanha = {
  slug: string
  nome: string
  chamada: string
  descricao: string
  destaque: string
  produtos: Produto[]
}

// Cada campanha comeca com 1 produto. Adicione novos produtos com FOTO + NOME
// no array "produtos" de cada campanha abaixo.
export const campanhas: Campanha[] = [
  {
    slug: "moda-intima-by-malu",
    nome: "Moda Intima by Malu",
    chamada: "Delicadeza que abraca o seu corpo",
    descricao:
      "Lingerie selecionada com carinho para valorizar a sua beleza natural. Pecas confortaveis, com tecidos macios e acabamento impecavel, do PP ao plus size.",
    destaque: "Colecao Intima",
    produtos: [
      {
        nome: "Conjunto em Renda",
        descricao:
          "Conjunto delicado em renda, com sutia sem aro e calcinha de cintura media. Conforto e elegancia para o dia a dia.",
        preco: "Consulte no WhatsApp",
        image: "/campanhas/moda-intima-produto.png",
      },
    ],
  },
  {
    slug: "jeans-79",
    nome: "Jeans 79",
    chamada: "O jeans perfeito por um precinho especial",
    descricao:
      "Selecionamos os melhores modelos de jeans por R$ 79. Cintura alta, modelagem que valoriza a silhueta e caimento perfeito para todos os corpos.",
    destaque: "Promocao Jeans",
    produtos: [
      {
        nome: "Jeans Cintura Alta",
        descricao:
          "Calca jeans de cintura alta com modelagem que valoriza a silhueta. Tecido de qualidade com leve elasticidade.",
        preco: "R$ 79",
        image: "/campanhas/jeans-79-produto.png",
      },
    ],
  },
  {
    slug: "moda-modesta",
    nome: "Moda Modesta",
    chamada: "Elegancia com leveza e cobertura",
    descricao:
      "Pecas pensadas para quem ama um visual sofisticado e discreto. Vestidos fluidos, comprimentos alongados e tecidos nobres que valorizam a sua feminilidade.",
    destaque: "Colecao Modesta",
    produtos: [
      {
        nome: "Vestido Midi Fluido",
        descricao:
          "Vestido midi de caimento fluido em tom terroso. Manga longa e comprimento alongado para um look elegante e confortavel.",
        preco: "Consulte no WhatsApp",
        image: "/campanhas/moda-modesta-produto.png",
      },
    ],
  },
]

export function getCampanha(slug: string) {
  return campanhas.find((c) => c.slug === slug)
}
