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
]

export function getShopProduct(slug: string) {
  return shopProducts.find((product) => product.slug === slug)
}

export function getWhatsappLink(product: ShopProduct, baseUrl: string) {
  const productUrl = `${baseUrl}/shop/${product.slug}`
  const message = `Olá, tenho interesse nesse produto, ainda está disponível?\n${product.name}\n${productUrl}`
  return `https://wa.me/5518997453135?text=${encodeURIComponent(message)}`
}

