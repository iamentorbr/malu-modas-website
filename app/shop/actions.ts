"use server"

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN
const SHOPIFY_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
const API_VERSION = "2025-07"

export async function createCheckout(
  variantId: string,
  quantity = 1,
): Promise<{ url: string | null; error?: string }> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    return { url: null, error: "Loja indisponível no momento." }
  }

  try {
    const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
      },
      body: JSON.stringify({
        query: `mutation CartCreate($lines: [CartLineInput!]!) {
          cartCreate(input: { lines: $lines }) {
            cart { checkoutUrl }
            userErrors { field message }
          }
        }`,
        variables: { lines: [{ merchandiseId: variantId, quantity }] },
      }),
    })

    const json = await res.json()
    const checkoutUrl: string | undefined = json?.data?.cartCreate?.cart?.checkoutUrl
    const userErrors = json?.data?.cartCreate?.userErrors ?? []

    if (userErrors.length > 0) {
      console.log("[v0] cartCreate userErrors:", JSON.stringify(userErrors))
      return { url: null, error: "Não foi possível iniciar o checkout." }
    }
    if (!checkoutUrl) {
      console.log("[v0] cartCreate sem checkoutUrl:", JSON.stringify(json?.errors ?? json))
      return { url: null, error: "Não foi possível iniciar o checkout." }
    }

    // Adiciona channel=online_store para evitar tela de senha
    const url = new URL(checkoutUrl)
    url.searchParams.set("channel", "online_store")
    return { url: url.toString() }
  } catch (err) {
    console.log("[v0] createCheckout error:", err)
    return { url: null, error: "Erro ao iniciar o checkout." }
  }
}
