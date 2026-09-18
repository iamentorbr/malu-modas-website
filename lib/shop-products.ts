export type ShopProduct = {
  slug: string
  name: string
  price: string
  image: string
}

export const shopProducts: ShopProduct[] = [
  { slug: "biquini-tigre", name: "Biquíni estampa tigre", price: "R$ 49,90", image: "/products/biquini-tigre.png" },
  { slug: "biquini-estampado", name: "Biquíni estampa tropical", price: "R$ 49,90", image: "/products/biquini-estampado.png" },
  { slug: "biquini-verde", name: "Biquíni verde militar", price: "R$ 49,90", image: "/products/biquini-verde.png" },
  { slug: "biquini-azul", name: "Biquíni azul intenso", price: "R$ 49,90", image: "/products/biquini-azul.png" },
  { slug: "biquini-laranja", name: "Biquíni laranja solar", price: "R$ 49,90", image: "/products/biquini-laranja.png" },
  { slug: "biquini-preto-laranja", name: "Biquíni preto e laranja", price: "R$ 49,90", image: "/products/biquini-preto-laranja.png" },
]

export function getShopProduct(slug: string) {
  return shopProducts.find((product) => product.slug === slug)
}

export function getWhatsappLink(product: ShopProduct, baseUrl: string) {
  const productUrl = `${baseUrl}/shop/${product.slug}`
  const message = `Olá, tenho interesse nesse produto, ainda está disponível?\n${product.name}\n${productUrl}`
  return `https://wa.me/5518997453135?text=${encodeURIComponent(message)}`
}

