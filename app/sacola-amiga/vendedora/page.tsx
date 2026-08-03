import type { Metadata } from "next"
import VendedoraClient from "./vendedora-client"

export const metadata: Metadata = {
  title: "Sacola Amiga | Vendedora — MALU MODAS",
  description: "Cadastre clientes para a Sacola Amiga da MALU MODAS.",
}

export default function VendedoraPage() {
  return <VendedoraClient />
}
