import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CompartilharTeste } from "../../testes/compartilhar-teste"

const articles = {
  "guarda-roupa-salva-o-dia": {
    category: "Comportamento · Matéria 01",
    title: "Quando o guarda-roupa salva o dia",
    hook: "A roupa certa não resolve tudo — mas pode devolver o eixo quando a vida começa antes do café.",
    image: "/magazine/materia-guarda-roupa.png",
    alt: "Mulher escolhendo uma produção em um guarda-roupa organizado",
    paragraphs: [
      "Você acorda atrasada, o celular já tem três mensagens e a primeira reunião do dia começa em quarenta minutos. Nesses instantes, estilo não é sobre montar uma produção perfeita: é reconhecer as peças que fazem você se sentir pronta para ocupar o próprio espaço.",
      "É aí que a Displicent entra com aquela elegância descomplicada que acompanha a mulher real. Uma camisa bem cortada, uma textura gostosa e uma modelagem que não exige ajustes a cada passo transformam a pressa em presença. Não é sobre parecer outra pessoa; é sobre conseguir ser você com mais clareza.",
      "Quando o dia pede movimento, o Lado Avesso lembra que personalidade mora nos detalhes. Uma estampa inesperada, uma combinação de proporções ou um toque de cor podem mudar a energia de uma manhã comum. O look vira uma pequena decisão a seu favor, mesmo quando o restante da agenda parece fora do controle.",
      "E há a Cris Jeans, parceira dos dias em que praticidade e desejo precisam caber na mesma escolha. O jeans que acompanha uma reunião, um almoço improvisado e o caminho de volta para casa não é básico por falta de imaginação: ele é uma base para a sua vida acontecer sem interrupção.",
      "Na MALU, a curadoria começa nessa conversa honesta. A gente não escolhe peças para um personagem ideal, mas para a cliente que vive prazos, encontros, mudanças de planos e ainda quer se olhar no espelho com prazer. Seu guarda-roupa pode ser uma ferramenta de confiança — e a próxima novidade pode estar esperando por você.",
    ],
  },
  "terceira-peca-para-toda-historia": {
    category: "Comportamento · Matéria 02",
    title: "A amiga que sempre leva uma terceira opção",
    hook: "Do café ao jantar, descubra por que uma terceira peça pode acompanhar todas as versões do seu dia.",
    image: "/magazine/materia-terceira-peca.png",
    alt: "Mulher usando uma terceira peça em uma transição do trabalho para a noite",
    paragraphs: [
      "Era para ser só um café depois do trabalho. Mas o convite muda, a conversa fica boa e, de repente, existe um jantar no horizonte. Você não quer voltar para casa — quer apenas que a roupa acompanhe a história que apareceu no meio do caminho.",
      "A Displicent entende esse desejo de leveza com intenção. Uma terceira peça pode ser o gesto que transforma uma base simples em uma imagem completa: entra no escritório, sai para a rua e continua fazendo sentido quando as luzes da noite acendem.",
      "No Lado Avesso, encontramos a surpresa que impede o look de ficar previsível. Uma textura, um recorte ou uma cor bem colocada dizem que você se conhece, mas não tem medo de experimentar. A roupa acompanha a sua conversa: começa familiar e revela novas camadas.",
      "A Cris Jeans traz o chão perfeito para essa liberdade. Com uma modelagem que respeita o corpo e uma versatilidade que não depende da ocasião, ela permite que você troque o ritmo sem trocar quem é. Um blazer, uma jaqueta ou uma sobreposição fazem o resto — e cabem na bolsa da amiga que pensa em tudo.",
      "MALU é essa amiga que ajuda você a escolher sem complicar. Por isso, nossas novidades são pensadas para a vida inteira, não para uma foto isolada: peças que atravessam planos, humor e horários. Quando o dia mudar de ideia, seu estilo pode mudar junto.",
    ],
  },
  "moda-praia-seu-signo": {
    category: "Horóscopo · Matéria 01",
    title: "Seu signo pede uma moda praia",
    hook: "Manvar, Arsiè e as promoções do VIP Amigas da Malu para vestir a sua próxima fase.",
    image: "/magazine/horoscopo-signo-praia.png",
    alt: "Mulher usando moda praia elegante diante do mar ensolarado",
    paragraphs: [
      "Cada signo tem um jeito próprio de chegar ao verão. Há quem escolha a cor antes mesmo de olhar a modelagem, quem procure conforto para passar o dia inteiro fora e quem queira uma peça que conte uma história sem precisar dizer nada.",
      "Na Manvar, a moda praia encontra personalidade em cores, recortes e presenças marcantes. É para quem gosta de vestir o sol com coragem, transformar a saída de praia em look e deixar que o estilo acompanhe cada mergulho.",
      "A Arsiè conversa com outro desejo: o de se sentir bonita nos detalhes. Texturas, caimentos e escolhas delicadas criam uma moda praia que respeita o seu ritmo, seja em uma viagem planejada ou naquele domingo que virou passeio.",
      "E, para tornar a escolha ainda mais gostosa, o grupo VIP Amigas da Malu reúne promoções e novidades para quem gosta de chegar primeiro. O seu signo pode inspirar a busca, mas é a sua vida real que decide a peça certa.",
      "Descubra o que combina com você e deixe a MALU acompanhar o seu próximo capítulo de sol.",
    ],
  },
  "verao-nas-estrelas": {
    category: "Horóscopo · Matéria 02",
    title: "O verão está nas estrelas",
    hook: "Uma leitura fashion para escolher sua próxima moda praia com intenção, desejo e um pouco de magia.",
    image: "/magazine/horoscopo-verao-estrelas.png",
    alt: "Mulher escolhendo um look de moda praia ao entardecer",
    paragraphs: [
      "O céu muda todos os dias, e a gente também. Por isso, olhar para as estrelas pode ser um jeito divertido de perguntar: o que eu quero viver nesta temporada? Mais aventura, descanso, encontros ou simplesmente tempo para mim?",
      "Para as personalidades solares, a Manvar traz atitude e energia. Para quem busca leveza e versatilidade, a Arsiè oferece combinações que atravessam a praia, o almoço e o fim de tarde com naturalidade.",
      "Os doze signos aparecem de formas diferentes, mas todos têm algo em comum: merecem uma escolha feita com carinho. A MALU seleciona peças pensando no corpo, na rotina e no prazer de vestir uma versão verdadeira de você.",
      "No VIP Amigas da Malu, as promoções chegam como uma boa surpresa entre amigas. É o espaço para receber novidades, encontrar oportunidades e escolher sem pressa o que faz sentido para a sua próxima fase.",
      "Leia seu signo, confie no seu desejo e deixe o verão encontrar você pronta para viver mais.",
    ],
  },
  "adamantina-novos-capitulos": {
    category: "Amor · Matéria 01",
    title: "Adamantina, mudanças e novos capítulos",
    hook: "Há lugares que guardam a nossa história — e pessoas que aprendem a mudar sem deixar de ser verdadeiras.",
    image: "/magazine/materia-adamantina.png",
    alt: "Mulher caminhando por uma rua de Adamantina ao entardecer",
    paragraphs: [
      "Adamantina, no interior de São Paulo, tem esse jeito bonito de lembrar que as grandes histórias também nascem em lugares onde todo mundo conhece o seu nome. Foi ali que a MALU construiu, ao longo de 30 anos, uma relação feita de presença, confiança e muitas mudanças vividas lado a lado.",
      "A vida muda de endereço, de planos, de corpo e de desejos. Mudam as prioridades, os encontros e a maneira como a gente se enxerga no espelho. Mas algumas coisas permanecem: a vontade de acolher, o cuidado em escolher e a certeza de que moda pode acompanhar uma mulher em cada novo capítulo.",
      "Depois de uma história incrível, a MALU também está vivendo suas transformações. Olhamos para o futuro com a mesma intimidade de quem conhece a cidade, suas clientes e suas histórias — mas com olhos curiosos para novas possibilidades, novas peças e novas formas de estar perto.",
      "Amar é perceber a mudança sem tentar congelá-la. É celebrar quem você foi, reconhecer quem você é e abrir espaço para quem está chegando. Em Adamantina, cada encontro na MALU carrega um pouco desse movimento: uma conversa, uma escolha e a sensação de que você não precisa viver sua próxima fase sozinha.",
      "As novidades da MALU nascem desse vínculo. São escolhas para acompanhar a sua vida real, com beleza, intenção e o carinho de uma marca que segue mudando — sem esquecer de onde veio.",
    ],
  },
  "escolher-com-amor": {
    category: "Amor · Matéria 02",
    title: "Escolher também é um ato de amor",
    hook: "Quando você escolhe com critério, começa a construir uma relação mais bonita com o espelho, com a vida e com quem ama.",
    image: "/magazine/materia-escolher.png",
    alt: "Mulher escolhendo peças cuidadosamente em uma boutique",
    paragraphs: [
      "Escolher parece simples até a gente perceber quantas vozes falam dentro de uma decisão. A tendência do momento, a opinião de alguém, o medo de errar e aquela vontade antiga de se sentir bonita. Amar a si mesma também passa por aprender a escutar qual dessas vozes realmente é sua.",
      "Na MALU, curadoria não é reunir tudo o que existe. É olhar com atenção para cada peça, entender a qualidade, o caimento, a história e o lugar que ela pode ocupar na vida de uma cliente. É escolher menos no automático e mais com intenção.",
      "Esse critério muda a relação com a roupa. Uma peça bem escolhida não precisa disputar espaço no armário: ela encontra você. Acompanha um encontro, um dia comum, uma mudança de planos e aquela versão que você ainda está descobrindo.",
      "E amar alguém também é escolher com presença. É observar o que faz sentido para a outra pessoa, respeitar seus desejos e oferecer algo que diga: eu vejo você. O cuidado que colocamos na curadoria é uma forma de levar esse mesmo gesto para cada cliente da MALU.",
      "Entre o amor-próprio e o amor compartilhado, existe uma escolha diária: tratar sua história com carinho. Que as próximas novidades sejam um convite para escolher com calma, critério e prazer — do jeito que a MALU acredita que você merece.",
    ],
  },
} as const

type Slug = keyof typeof articles

const zodiacCards = [
  ["Áries", "/magazine/signo-aries.png", "Maiô de recortes ou biquíni vibrante. Proteja a pele e reserve energia para novas aventuras. A primavera-verão traz movimento; a MALU acompanha com peças marcantes e práticas."],
  ["Touro", "/magazine/signo-touro.png", "Maiô estruturado ou biquíni de cintura alta. Priorize conforto, hidratação e tempo sem pressa. A estação favorece prazer e estabilidade; a MALU escolhe caimentos gostosos e duráveis."],
  ["Gêmeos", "/magazine/signo-gemeos.png", "Biquíni versátil com saída de praia. Alterne sol e sombra e hidrate-se. Convites e mudanças movimentam o verão; a MALU cria combinações para cada história."],
  ["Câncer", "/magazine/signo-cancer.png", "Maiô delicado ou top confortável. Crie um ritual de autocuidado e acolhimento. Reencontros aquecem a estação; a MALU cuida dos detalhes para você se sentir em casa."],
  ["Leão", "/magazine/signo-leao.png", "Biquíni metalizado ou maiô de presença. Use proteção solar e lembre-se de descansar. Celebrações pedem brilho; a MALU encontra a peça protagonista para você aparecer."],
  ["Virgem", "/magazine/signo-virgem.png", "Maiô minimalista ou biquíni de linhas limpas. Organize pausas e proteção. A primavera-verão pede escolhas melhores; a MALU traduz seu critério em peças bem pensadas."],
  ["Libra", "/magazine/signo-libra.png", "Biquíni elegante com saída coordenada. Equilibre exposição e descanso. Parcerias e encontros ganham harmonia; a MALU compõe beleza com leveza."],
  ["Escorpião", "/magazine/signo-escorpiao.png", "Maiô marcante ou biquíni em tons profundos. Respeite seus limites e sua intimidade. Transformações ganham força; a MALU acompanha sua intensidade com autenticidade."],
  ["Sagitário", "/magazine/signo-sagitario.png", "Biquíni esportivo ou maiô para movimento. Cuide do corpo que leva você longe. Viagens ampliam horizontes; a MALU escolhe versatilidade da areia ao próximo destino."],
  ["Capricórnio", "/magazine/signo-capricornio.png", "Maiô clássico ou biquíni de modelagem precisa. Planeje pausas reais. Reconhecimento e construção chegam com calma; a MALU oferece peças atemporais e confiáveis."],
  ["Aquário", "/magazine/signo-aquario.png", "Biquíni assimétrico ou maiô autoral. Experimente sem comparação. Ideias novas e uma temporada fora do padrão vêm pela frente; a MALU abre espaço para sua individualidade."],
  ["Peixes", "/magazine/signo-peixes.png", "Biquíni fluido ou maiô em tons suaves. Hidrate-se e proteja sua sensibilidade. Romance e inspiração chegam com o verão; a MALU acolhe seu imaginário com delicadeza."],
] as const

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug as Slug] ?? articles["guarda-roupa-salva-o-dia"]
  return { title: `${article.title} | MALU Magazine`, description: article.hook }
}

export default async function MateriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug as Slug] ?? articles["guarda-roupa-salva-o-dia"]
  return (
    <main className="min-h-screen bg-[#f7efe5] text-[#211b18]">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-12">
        <Link href={`/magazine#${article.category.startsWith("Amor") ? "amor" : "comportamento"}`} className="text-xs font-bold uppercase tracking-[.2em] text-[#d72f39]">← Voltar para {article.category.startsWith("Amor") ? "amor" : "comportamento"}</Link>
        <header className="mt-10 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#d72f39]">{article.category}</p>
          <h1 className="mt-5 font-serif text-6xl leading-[.86] sm:text-8xl">{article.title}</h1>
          <p className="mt-7 max-w-2xl font-serif text-2xl italic leading-tight sm:text-3xl">{article.hook}</p>
        </header>
        <div className="relative mt-10 aspect-[4/3] overflow-hidden border-2 border-[#211b18] bg-[#f0d9c4]">
          <Image src={article.image} alt={article.alt} fill priority sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
        </div>
        <CompartilharTeste title={article.title} />
        <article className="mx-auto max-w-3xl py-10 sm:py-16">
          {article.paragraphs.map((paragraph) => <p key={paragraph} className="mb-7 font-serif text-xl leading-relaxed sm:text-2xl">{paragraph}</p>)}
          {slug === "moda-praia-seu-signo" && (
            <section className="mt-14" aria-labelledby="guia-signos-titulo">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#d72f39]">Primavera-verão 2026</p>
              <h2 id="guia-signos-titulo" className="mt-3 font-serif text-4xl leading-none sm:text-5xl">O que a moda praia pede para cada signo</h2>
              <p className="mt-5 text-base leading-relaxed text-[#211b18]/70">Um pequeno mapa para escolher sua peça, cuidar de si e receber a nova estação com a curadoria da MALU.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {zodiacCards.map(([sign, image, text], index) => (
                  <article key={sign} className={`grid items-start gap-5 border-2 border-[#211b18] p-4 sm:grid-cols-[120px_1fr] sm:p-5 ${index % 3 === 0 ? "bg-[#f0d9c4]" : index % 3 === 1 ? "bg-[#e7dced]" : "bg-[#f1c8ce]"}`}>
                    <div className="relative aspect-[3/4] overflow-hidden border-2 border-[#211b18]">
                      <Image src={image} alt={`Mulher representando ${sign} na moda praia 2026`} fill sizes="120px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d72f39]">Moda praia 2026</p>
                      <h3 className="mt-2 font-serif text-3xl">{sign}</h3>
                      <p className="mt-3 text-sm leading-relaxed">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
          <div className="mt-12 border-2 border-[#d72f39] bg-[#f0d9c4] p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#d72f39]">Continue sua descoberta</p>
            <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">Novidades escolhidas para a sua vida real.</h2>
            <Link href="/magazine/catalogo/biquinis" className="mt-7 inline-flex rounded-full bg-[#d72f39] px-6 py-4 text-xs font-bold uppercase tracking-[.2em] text-white transition-transform hover:-translate-y-1">Ver novidades MALU</Link>
          </div>
        </article>
      </div>
    </main>
  )
}
