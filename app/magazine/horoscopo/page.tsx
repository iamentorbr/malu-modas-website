import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CompartilharTeste } from "../testes/compartilhar-teste"

export const metadata: Metadata = {
  title: "Horóscopo da MALU | Moda praia e novidades",
  description: "Descubra a moda praia que combina com o seu signo, com Manvar, Arsiè e as promoções do grupo VIP Amigas da Malu.",
}

const signs = [
  ["Áries", "Você chega primeiro e escolhe uma moda praia com presença. Manvar em cores intensas combina com sua energia direta; entre no VIP Amigas da Malu para descobrir promoções antes de todo mundo."],
  ["Touro", "Conforto também é luxo. Arsiè traz texturas e modelagens para você aproveitar cada detalhe sem pressa. No grupo VIP Amigas da Malu, sua próxima peça pode aparecer com uma condição irresistível."],
  ["Gêmeos", "Duas ideias, dois looks e zero vontade de escolher só um. Misture a leveza da Manvar com a versatilidade da Arsiè e acompanhe as promoções do VIP Amigas da Malu para variar sem culpa."],
  ["Câncer", "Você veste memória, afeto e dias de sol. Uma peça Arsiè com toque delicado traduz seu jeito acolhedor, enquanto o VIP Amigas da Malu guarda novidades para transformar o próximo passeio em lembrança."],
  ["Leão", "O verão tem palco e você sabe ocupar. Aposte na Manvar para uma produção marcante, com brilho e cor na medida. As promoções do VIP Amigas da Malu foram feitas para quem gosta de chegar sendo notada."],
  ["Virgem", "Você observa acabamento, caimento e praticidade. A Arsiè conversa com seu olhar cuidadoso, e o grupo VIP Amigas da Malu ajuda a encontrar aquela oportunidade certeira sem abrir mão da qualidade."],
  ["Libra", "Seu signo entende de equilíbrio: uma saída leve, um beachwear elegante e o acessório certo. Combine Manvar e Arsiè com harmonia e entre no VIP Amigas da Malu para receber curadorias e promoções especiais."],
  ["Escorpião", "Sua moda praia não precisa explicar tudo. Recortes, contraste e uma presença magnética da Manvar revelam só o necessário. No VIP Amigas da Malu, as novidades chegam em primeira mão para você escolher no seu tempo."],
  ["Sagitário", "Você quer uma peça que acompanhe o mapa: praia, viagem, passeio e mais uma parada inesperada. A Arsiè vai com você, e as promoções do VIP Amigas da Malu ajudam a preparar a mala sem limitar o roteiro."],
  ["Capricórnio", "Investir em uma peça que funciona por muitas temporadas é a sua linguagem. A Manvar entrega presença e construção, enquanto o VIP Amigas da Malu avisa quando a escolha certa vem com uma condição especial."],
  ["Aquário", "Você não segue o look pronto: cria sua própria combinação. Misture formas da Arsiè com a atitude da Manvar e acompanhe o VIP Amigas da Malu para encontrar novidades que chegam antes da tendência."],
  ["Peixes", "Seu verão pede leveza, imaginação e um pouco de sonho. Uma produção Arsiè fluida encontra seu ritmo, e o grupo VIP Amigas da Malu transforma essa inspiração em novidades e promoções para viver de verdade."],
] as const

export default function HoroscopoPage() {
  return (
    <main className="min-h-screen bg-[#f7efe5] text-[#211b18]">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-12">
        <Link href="/magazine#horoscopo" className="text-xs font-bold uppercase tracking-[.2em] text-[#d72f39]">← Voltar para a MALU Magazine</Link>
        <header className="mt-10 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#d72f39]">Horóscopo · Moda praia</p>
          <h1 className="mt-5 font-serif text-6xl leading-[.86] sm:text-8xl">Seu verão<br /><i>nas estrelas</i></h1>
          <p className="mt-7 max-w-2xl font-serif text-2xl italic leading-tight sm:text-3xl">O céu muda, o estilo acompanha: descubra Manvar, Arsiè e as oportunidades que o VIP Amigas da Malu reservou para a sua fase.</p>
        </header>
        <div className="relative mt-10 aspect-[4/3] overflow-hidden border-2 border-[#211b18] bg-[#f0d9c4]">
          <Image src="/magazine/horoscopo-moda-praia.png" alt="Mulher usando moda praia elegante em um cenário ensolarado" fill priority sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
        </div>
        <CompartilharTeste title="Seu verão nas estrelas" />
        <article className="mx-auto max-w-3xl py-10 sm:py-16">
          <p className="mb-10 font-serif text-xl leading-relaxed sm:text-2xl">Não é sobre deixar o signo decidir tudo. É sobre usar essa leitura como um espelho gostoso: reconhecer o que você deseja vestir, onde quer estar e qual novidade faz sentido para o seu momento. A MALU reuniu doze caminhos para você encontrar sua moda praia com mais intenção.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {signs.map(([sign, text], index) => <section key={sign} className="border-2 border-[#211b18] bg-[#f0d9c4] p-6"><span className="font-serif text-3xl text-[#d72f39]">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-5 font-serif text-3xl">{sign}</h2><p className="mt-3 text-sm leading-relaxed text-[#51433d]">{text}</p></section>)}
          </div>
          <div className="mt-12 border-2 border-[#d72f39] bg-[#f0d9c4] p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#d72f39]">Para receber primeiro</p>
            <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">Entre para o grupo VIP Amigas da Malu.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#51433d]">Receba promoções, novidades e oportunidades da MALU antes de todo mundo.</p>
            <Link href="/magazine/testes/horoscopo" className="mt-7 inline-flex rounded-full bg-[#d72f39] px-6 py-4 text-xs font-bold uppercase tracking-[.2em] text-white transition-transform hover:-translate-y-1">Descobrir meu perfil</Link>
          </div>
        </article>
      </div>
    </main>
  )
}
