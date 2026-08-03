import type { Metadata } from "next"
import AdminClient from "./admin-client"

export const metadata: Metadata = {
  title: "Sacola Amiga | Admin — MALU MODAS",
  description: "Painel administrativo da Sacola Amiga.",
}

export default function AdminPage() {
  return <AdminClient />
}
