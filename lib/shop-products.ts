export type ShopProduct = {
  slug: string
  name: string
  price: string
  image: string
  category: "Moda praia"
  type: "Biquínis"
}

export const shopProducts: ShopProduct[] = [
  { slug: "biquini-tigre", name: "Biquíni estampa tigre", price: "R$ 49,90", image: "/products/biquini-tigre.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-estampado", name: "Biquíni estampa tropical", price: "R$ 49,90", image: "/products/biquini-estampado.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-verde", name: "Biquíni verde militar", price: "R$ 49,90", image: "/products/biquini-verde.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-azul", name: "Biquíni azul intenso", price: "R$ 49,90", image: "/products/biquini-azul.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-laranja", name: "Biquíni laranja solar", price: "R$ 49,90", image: "/products/biquini-laranja.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-preto-laranja", name: "Biquíni preto e laranja", price: "R$ 49,90", image: "/products/biquini-preto-laranja.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-amarelo-paisagem", name: "Biquíni amarelo paisagem", price: "R$ 49,90", image: "/products/biquini-amarelo-paisagem.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-paisagem-colorida", name: "Biquíni paisagem colorida", price: "R$ 49,90", image: "/products/biquini-paisagem-colorida.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-floral-vermelho", name: "Biquíni floral vermelho", price: "R$ 49,90", image: "/products/biquini-floral-vermelho.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-teal-estampado", name: "Biquíni azul petróleo estampado", price: "R$ 49,90", image: "/products/biquini-teal-estampado.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-tie-dye", name: "Biquíni tie-dye marrom", price: "R$ 49,90", image: "/products/biquini-tie-dye.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-laranja-medalhoes", name: "Biquíni laranja medalhões", price: "R$ 49,90", image: "/products/biquini-laranja-medalhoes.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-preto-laranja-2", name: "Biquíni preto e laranja clássico", price: "R$ 49,90", image: "/products/biquini-preto-laranja-2.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-azul-peixes", name: "Biquíni azul peixes", price: "R$ 49,90", image: "/products/biquini-azul-peixes.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-animal-print", name: "Biquíni animal print", price: "R$ 49,90", image: "/products/biquini-animal-print.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-rosa-canelado", name: "Biquíni rosa canelado", price: "R$ 49,90", image: "/products/biquini-rosa-canelado.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-tie-dye-2", name: "Biquíni tie-dye terroso", price: "R$ 49,90", image: "/products/biquini-tie-dye-2.png", category: "Moda praia", type: "Biquínis" },
  { slug: "biquini-estampa-pink", name: "Biquíni estampa pink", price: "R$ 49,90", image: "/products/biquini-estampa-pink.png", category: "Moda praia", type: "Biquínis" },
]

export function getShopProduct(slug: string) {
  return shopProducts.find((product) => product.slug === slug)
}

export function getWhatsappLink(product: ShopProduct, baseUrl: string) {
  const productUrl = `${baseUrl}/shop/${product.slug}`
  const message = `Olá, tenho interesse nesse produto, ainda está disponível?\n${product.name}\n${productUrl}`
  return `https://wa.me/5518997453135?text=${encodeURIComponent(message)}`
}

