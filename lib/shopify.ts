const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN
const SHOPIFY_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
const API_VERSION = "2025-07"

export type ShopifyProduct = {
  id: string
  title: string
  handle: string
  description: string
  featuredImage: { url: string; altText: string | null } | null
  images: { url: string; altText: string | null }[]
  price: { amount: string; currencyCode: string }
  compareAtPrice: { amount: string; currencyCode: string } | null
  availableForSale: boolean
  variantId: string | null
}

type ShopifyFetchResult<T> = { data?: T; errors?: unknown }

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T | null> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    console.log("[v0] Shopify env vars ausentes")
    return null
  }

  try {
    const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    })

    const json = (await res.json()) as ShopifyFetchResult<T>
    if (json.errors) {
      console.log("[v0] Shopify GraphQL errors:", JSON.stringify(json.errors))
      return null
    }
    return json.data ?? null
  } catch (err) {
    console.log("[v0] Shopify fetch error:", err)
    return null
  }
}

type ProductNode = {
  id: string
  title: string
  handle: string
  description: string
  featuredImage: { url: string; altText: string | null } | null
  images: { edges: { node: { url: string; altText: string | null } }[] }
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  compareAtPriceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  availableForSale: boolean
  variants: { edges: { node: { id: string } }[] }
}

function mapProduct(node: ProductNode): ShopifyProduct {
  const compareAmount = node.compareAtPriceRange?.minVariantPrice?.amount
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description,
    featuredImage: node.featuredImage,
    images: node.images?.edges?.map((e) => e.node) ?? [],
    price: node.priceRange.minVariantPrice,
    compareAtPrice:
      compareAmount && Number(compareAmount) > Number(node.priceRange.minVariantPrice.amount)
        ? node.compareAtPriceRange.minVariantPrice
        : null,
    availableForSale: node.availableForSale,
    variantId: node.variants?.edges?.[0]?.node?.id ?? null,
  }
}

const PRODUCT_FIELDS = `
  id
  title
  handle
  description
  availableForSale
  featuredImage { url altText }
  images(first: 6) { edges { node { url altText } } }
  priceRange { minVariantPrice { amount currencyCode } }
  compareAtPriceRange { minVariantPrice { amount currencyCode } }
  variants(first: 1) { edges { node { id } } }
`

export async function getProducts(first = 24): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { edges: { node: ProductNode }[] } }>(
    `query Products($first: Int!) {
      products(first: $first, sortKey: BEST_SELLING) {
        edges { node { ${PRODUCT_FIELDS} } }
      }
    }`,
    { first },
  )
  if (!data) return []
  return data.products.edges.map((e) => mapProduct(e.node))
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ product: ProductNode | null }>(
    `query Product($handle: String!) {
      product(handle: $handle) { ${PRODUCT_FIELDS} }
    }`,
    { handle },
  )
  if (!data || !data.product) return null
  return mapProduct(data.product)
}

export function formatPrice(amount: string, currencyCode: string): string {
  const value = Number(amount)
  try {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: currencyCode || "BRL",
    }).format(value)
  } catch {
    return `R$ ${value.toFixed(2)}`
  }
}
