import type { Metadata } from "next"
import ClubeDaMalu from "./clube-da-malu"

export const metadata: Metadata = {
  title: "Clube da Malu | Campanhas exclusivas da MALU MODAS",
  description:
    "O Clube da Malu reúne as melhores campanhas da MALU MODAS: peças selecionadas, marcas queridinhas e acesso antecipado às tendências. De amiga pra amiga.",
}

export default function Page() {
  return <ClubeDaMalu />
}
