"use client"

import Image from "next/image"
import Link from "next/link"
import { use, useState } from "react"
import { CompartilharTeste } from "../compartilhar-teste"

const whatsappNumber = "5518997453135"
const whatsappMessage = "MALUUU, Acabei de responder o teste na MALU MAGAZINE e quero muito receber as novidades baseadas no meu perfil! Me ajuuuuuuuuda! ❤️😍"

type TestData = {
  eyebrow: string
  title: string
  hook: string
  intro: string
  image: string
  questions: string[]
  options: string[][]
  results: { title: string; text: string }[]
}

const testData: Record<string, TestData> = {
  estilo: {
    eyebrow: "Teste 01 · Comportamento",
    title: "Teste seu estilo de verdade",
    hook: "Em dez escolhas, descubra o que sua rotina já sabe sobre você.",
    intro: "Entre reuniões, convites de última hora e aqueles dias em que nada parece funcionar, seu estilo não desaparece: ele pede para ser escutado. Este teste traduz suas escolhas em uma curadoria MALU feita para a mulher que você é agora.",
    image: "/magazine/teste-estilo.png",
    questions: ["Quando você abre o armário em uma manhã corrida, o que procura primeiro?", "Para uma reunião importante, você quer transmitir...", "No fim de semana perfeito, você se veste para...", "Uma compra só faz sentido quando...", "Qual elogio mais combina com você?", "Quando uma tendência aparece, você...", "Seu acessório indispensável é...", "Num convite inesperado, você escolhe...", "O que faz uma peça virar favorita?", "Hoje, seu guarda-roupa precisa de mais..."],
    options: [
      ["Uma camisa e uma calça que nunca falham", "Um vestido colorido para mudar o humor", "Uma peça leve que me faça sentir cuidada", "A produção que ninguém esperaria"],
      ["Confiança e competência", "Energia e proximidade", "Sensibilidade e atenção", "Criatividade e liderança"],
      ["Conhecer um lugar novo com conforto", "Encontrar amigas e celebrar", "Um almoço demorado e bonito", "Viver uma aventura sem roteiro"],
      ["Combina com muitas ocasiões", "Traz uma cor que eu amo", "Tem um caimento especial", "Tem personalidade de sobra"],
      ["Você está sempre impecável", "Você ilumina qualquer ambiente", "Você tem um jeito encantador", "Você é impossível de esquecer"],
      ["Observo primeiro e adapto ao meu estilo", "Quero experimentar a cor imediatamente", "Espero a tendência ganhar um toque delicado", "Misturo de um jeito só meu"],
      ["Um relógio ou bolsa estruturada", "Brincos coloridos que aparecem", "Um colar delicado com significado", "Um acessório escultural"],
      ["Uma base que me deixa pronta em minutos", "Uma cor vibrante e uma sandália", "Um detalhe feminino e confortável", "Uma combinação ousada de última hora"],
      ["Resolve mais de um momento do dia", "Me faz receber elogios", "Tem uma história ou textura especial", "Parece ter sido feita para mim"],
      ["Peças versáteis e bem cortadas", "Mais cor e alegria", "Leveza e delicadeza", "Novidades fora do óbvio"],
    ],
    results: [
      { title: "Clássica com presença", text: "Você constrói confiança nos detalhes que permanecem. Sua relação com a moda é prática, mas nunca sem intenção: você gosta de peças que acompanham uma reunião, um almoço e uma noite sem exigir que você se transforme. A MALU pode aproximar você de uma curadoria de bases refinadas, modelagens inteligentes e acessórios que fazem o conhecido parecer novo." },
      { title: "Solar e magnética", text: "Você veste o estado de espírito que quer levar para o mundo. Cor, movimento e leveza aparecem nas suas escolhas porque você sabe que roupa também muda a energia de um dia comum. A MALU tem novidades para acender sua rotina com estampas, texturas e combinações que deixam sua personalidade chegar antes de você." },
      { title: "Romântica contemporânea", text: "Você percebe o que quase passa despercebido: um toque macio, uma linha bonita, uma cor que conversa com a pele. Seu estilo é afetivo e cheio de memória, mas não ficou no passado. A MALU pode encontrar peças delicadas, femininas e atuais para você se sentir cuidada sem perder movimento." },
      { title: "Autoral e sem medo", text: "Você não se veste para caber numa tendência; você usa a moda para abrir conversa. Seu olhar reconhece o inesperado e transforma uma peça marcante em assinatura. A MALU pode apresentar lançamentos fora do óbvio, misturas de cor e peças que acompanham a sua coragem de ser referência." },
    ],
  },
  horoscopo: {
    eyebrow: "Teste 02 · Horóscopo",
    title: "Seu look nas estrelas",
    hook: "Sua próxima fase já está pedindo uma roupa nova.",
    intro: "Nem todo trânsito astral pede a mesma coisa. Há semanas de recolhimento, recomeços, exposição e movimento. Responda pensando na vida que está acontecendo agora e descubra a leitura fashion que a MALU preparou para acompanhar sua próxima fase.",
    image: "/magazine/teste-horoscopo.png",
    questions: ["Qual palavra descreve o céu da sua semana?", "Você gostaria de abrir espaço para...", "Quando a agenda aperta, seu look precisa oferecer...", "Qual cor chama seu nome hoje?", "Para um novo começo, você escolheria...", "O convite ideal desta fase seria...", "O que você quer sentir ao se olhar no espelho?", "Seu ritual antes de sair inclui...", "Se as estrelas enviassem uma peça, ela seria...", "Que energia você quer levar para o próximo mês?"],
    options: [
      ["Um céu aberto e tranquilo", "Uma tempestade que limpa tudo", "Uma noite acolhedora", "Um amanhecer cheio de possibilidades"],
      ["Tempo e espaço para respirar", "Coragem para mudar de rota", "Cuidado e conexão", "Convites e experiências novas"],
      ["Conforto para seguir fluindo", "Uma peça que me dê força", "Acolhimento sem perder estilo", "Impacto para marcar presença"],
      ["Areia e tons claros", "Vermelho ou laranja intenso", "Rosa, lilás ou azul suave", "Dourado e cores luminosas"],
      ["Uma peça leve para começar", "Um look transformador", "Algo que me abrace", "Uma produção para celebrar"],
      ["Um passeio perto da água", "Uma viagem sem data de volta", "Um encontro íntimo", "Uma festa com gente querida"],
      ["Leve e em paz", "Corajosa e renovada", "Amparada e presente", "Radiante e expansiva"],
      ["Escolher uma peça confortável", "Mudar o visual como um ritual", "Cuidar dos detalhes com calma", "Criar um look especial"],
      ["Um look claro e versátil", "Uma cor intensa e marcante", "Uma textura macia e fluida", "Um brilho que chega primeiro"],
      ["Organizar e simplificar", "Virar uma página", "Me acolher mais", "Me permitir aparecer"],
    ],
    results: [
      { title: "Sua fase pede leveza", text: "Você está reorganizando o excesso para ouvir o que realmente importa. Isso não é parar: é escolher melhor. A MALU pode acompanhar esse momento com peças versáteis, confortáveis e luminosas, capazes de atravessar sua agenda sem pesar na decisão. Vista o espaço que você está criando." },
      { title: "Sua fase pede transformação", text: "Existe uma porta aberta e você já percebeu que não precisa voltar a ser quem era antes dela. Sua imagem pode funcionar como um pequeno ritual de coragem. A MALU separa cores, formas e novidades para você marcar a mudança no corpo e sustentar a escolha por dentro." },
      { title: "Sua fase pede acolhimento", text: "Você está entendendo que cuidado também pode ser bonito, sensual e cheio de intenção. O seu próximo look precisa abraçar a rotina, não disputar com ela. Na MALU, você encontra texturas gostosas e silhuetas que devolvem presença sem pedir esforço." },
      { title: "Sua fase pede celebração", text: "Depois de tanto construir, há algo em você pronto para aparecer. Não espere uma ocasião perfeita: a ocasião é essa versão mais inteira que chegou. A MALU pode trazer peças especiais, cores vivas e detalhes para celebrar cada convite — inclusive os que você faz a si mesma." },
    ],
  },
  amor: {
    eyebrow: "Teste 03 · Amor",
    title: "Amor à primeira vista",
    hook: "O que o seu coração escolheria se pudesse provar uma peça?",
    intro: "O amor aparece num encontro, num recomeço, num domingo quieto ou na decisão de se escolher. Este teste não tenta adivinhar o futuro: ele escuta seus desejos de hoje e conecta cada resposta a uma curadoria MALU que conversa com a sua história.",
    image: "/magazine/teste-amor.png",
    questions: ["Qual cena parece mais com o seu momento?", "Você se sente desejada quando veste algo que...", "Um encontro perfeito começa com...", "Quando gosta de alguém, você...", "O que você quer deixar para trás?", "Seu jeito de demonstrar amor é...", "Para se arrumar só para você, escolheria...", "Qual detalhe faz seu coração acelerar?", "Uma nova história merece...", "Hoje, você quer se permitir mais..."] ,
    options: [
      ["Uma conversa que se estende", "Uma página virada", "Um encontro comigo", "Um convite inesperado"],
      ["Me deixa confortável para ser eu", "Marca uma nova versão", "Cuida de mim sem pedir aprovação", "Tem algo surpreendente"],
      ["Um olhar atento", "A chance de começar diferente", "Sentir que estou segura", "Uma história sem roteiro"],
      ["Me aproximo com calma", "Me permito tentar de novo", "Cuido dos meus limites", "Sigo a curiosidade"],
      ["A pressa de provar alguma coisa", "O medo de começar", "A culpa de me colocar em primeiro", "A rotina previsível"],
      ["Ouvir e estar presente", "Abrir espaço para o novo", "Demonstrar cuidado", "Convidar para viver algo"],
      ["Uma peça que me acompanha", "Um look de recomeço", "Algo escolhido só para mim", "Uma produção divertida"],
      ["Um detalhe que só eu percebo", "A sensação de virar a página", "O toque que me faz bem", "Uma cor que desperta desejo"],
      ["Tempo e verdade", "Coragem para recomeçar", "Cuidado e reciprocidade", "Surpresa e aventura"],
      ["Me escutar mais", "Me abrir para possibilidades", "Me escolher sem culpa", "Viver sem controlar tudo"],
    ],
    results: [
      { title: "Você escolhe presença", text: "Você acredita no que acontece sem pressa: uma conversa que fica, um olhar que não precisa se explicar. Sua curadoria MALU pede peças que acompanham encontros longos e fazem você se sentir inteira, confortável e absolutamente presente na própria história." },
      { title: "Você escolhe recomeço", text: "Seu coração está disposto a virar a página sem apagar o que aprendeu. Há frescor na sua forma de desejar e uma vontade bonita de experimentar outra versão de si. A MALU pode apresentar novidades para vestir essa coragem de começar de novo." },
      { title: "Você escolhe a si mesma", text: "O romance mais importante desta fase é o compromisso com o seu bem-estar. Se arrumar para você não é detalhe: é linguagem, prazer e reconhecimento. A MALU quer aproximar peças que celebrem seu corpo, seu tempo e a beleza de não precisar de aprovação." },
      { title: "Você escolhe aventura", text: "Você sabe que as melhores histórias raramente chegam com roteiro pronto. Seu estilo tem curiosidade, humor e desejo de viver mais. A MALU pode acompanhar seus planos com peças marcantes e leves, prontas para sair do armário e entrar na vida." },
    ],
  },
}

export default function TestePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<number | null>(null)
  const test = testData[slug] ?? testData.estilo
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  const questionIndex = answers.length
  const progress = result === null ? (questionIndex / test.questions.length) * 100 : 100

  function answer(index: number) {
    const next = [...answers, index]
    setAnswers(next)
    if (next.length === test.questions.length) setResult(next.reduce((sum, value) => sum + value, 0) % test.results.length)
  }

  function restart() { setAnswers([]); setResult(null) }

  return <><CompartilharTeste title={test.title} /><main className="min-h-screen bg-[#f7efe5] text-[#211b18]"><div className="mx-auto max-w-7xl px-6 py-8 lg:px-12"><Link href="/magazine#testes" className="text-xs font-bold uppercase tracking-[.2em] text-[#d72f39]">← Voltar aos testes</Link><div className="mt-8 grid overflow-hidden border-2 border-[#211b18] bg-[#f0d9c4] lg:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-[360px] lg:min-h-[560px]"><Image src={test.image} alt={test.title} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div><div className="flex flex-col justify-center p-7 sm:p-12"><p className="text-xs font-bold uppercase tracking-[.3em] text-[#d72f39]">{test.eyebrow}</p><h1 className="mt-5 max-w-xl font-serif text-5xl leading-[.9] sm:text-7xl">{test.title}</h1><p className="mt-6 max-w-xl font-serif text-2xl italic leading-tight">{test.hook}</p><p className="mt-6 max-w-xl text-sm leading-relaxed text-[#51433d]">{test.intro}</p></div></div><section className="mx-auto mt-10 max-w-4xl border-2 border-[#211b18] bg-white p-6 sm:p-10" aria-live="polite"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-[.2em]"><span>{result === null ? `Pergunta ${questionIndex + 1} de ${test.questions.length}` : "Seu resultado"}</span><span>{Math.round(progress)}%</span></div><div className="mt-4 h-1 bg-[#e6cabb]"><div className="h-full bg-[#d72f39] transition-all" style={{ width: `${progress}%` }} /></div>{result === null ? <div className="mt-10"><h2 className="font-serif text-3xl leading-tight sm:text-5xl">{test.questions[questionIndex]}</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{test.options[questionIndex].map((option, index) => <button key={option} type="button" onClick={() => answer(index)} className="border-2 border-[#211b18] p-5 text-left text-sm transition-all hover:-translate-y-1 hover:bg-[#211b18] hover:text-white">{option}</button>)}</div></div> : <div className="mt-10"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#d72f39]">A leitura MALU para você</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">{test.results[result].title}</h2><p className="mt-6 text-base leading-8 text-[#51433d]">{test.results[result].text}</p><div className="mt-8 flex flex-wrap items-center gap-4"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#d72f39] px-6 py-4 text-xs font-bold uppercase tracking-[.16em] text-white transition-transform hover:-translate-y-1">Quero receber as novidades da MALU</a><button type="button" onClick={restart} className="text-xs font-bold uppercase tracking-[.16em] text-[#d72f39] underline underline-offset-4">Refazer teste</button></div></div>}</section></div></main></>
}

