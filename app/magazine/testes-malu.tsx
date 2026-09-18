"use client"

import { useMemo, useState } from "react"

const whatsappNumber = "5518997453135"
const testMessage = "CRIS, Acabei de responder o teste na MALU MAGAZINE e quero muito receber as novidades baseadas no meu perfil! Me ajuuuuuuuuda! ❤️😍"

const tests = [
  {
    id: "estilo",
    eyebrow: "Teste 01 · Comportamento",
    title: "Qual é a sua energia hoje?",
    intro: "Escolha o que mais parece com você e descubra a curadoria MALU que combina com o seu momento.",
    questions: [
      { label: "Para um dia corrido, você escolhe...", options: ["Uma base clássica que nunca falha", "Uma cor que muda meu humor", "Um detalhe delicado e romântico", "A produção mais inesperada do armário"] },
      { label: "Quando recebe um convite de última hora...", options: ["Vou no meu vestido de confiança", "Aproveito para experimentar algo novo", "Escolho uma peça que me faça sentir especial", "Monto um look que ninguém está esperando"] },
    ],
    results: ["Seu perfil é clássico com personalidade. A MALU separa peças versáteis para acompanhar sua rotina sem apagar quem você é.", "Seu perfil é solar e livre. A MALU tem cores e formas para colocar sua energia em evidência.", "Seu perfil é romântico e atento aos detalhes. A MALU encontra delicadezas que fazem cada look contar uma história.", "Seu perfil é ousado e autoral. A MALU acompanha suas escolhas fora do óbvio."]
  },
  {
    id: "fase",
    eyebrow: "Teste 02 · Horóscopo",
    title: "Que look combina com sua fase?",
    intro: "Nem toda fase pede a mesma roupa. Responda e descubra o que as estrelas e a MALU prepararam para você.",
    questions: [
      { label: "Sua semana está pedindo mais...", options: ["Leveza e praticidade", "Coragem para mudar", "Aconchego e presença", "Brilho e movimento"] },
      { label: "A peça que faria seu dia melhor seria...", options: ["Um conjunto fácil de combinar", "Uma cor que eu nunca usei", "Um tecido gostoso no corpo", "Algo marcante para sair da rotina"] },
    ],
    results: ["Sua fase pede leveza. A MALU escolhe por você peças que deixam a agenda mais gostosa de viver.", "Sua fase pede transformação. A MALU traz novidades para você virar a chave com cor e confiança.", "Sua fase pede acolhimento. A MALU encontra conforto com aquele toque bonito que muda tudo.", "Sua fase pede celebração. A MALU separa peças para você aparecer e aproveitar cada convite."]
  },
  {
    id: "coracao",
    eyebrow: "Teste 03 · Amor",
    title: "O que seu coração escolheria?",
    intro: "Entre um encontro, um recomeço e um tempo só seu, descubra a peça que conversa com o seu desejo.",
    questions: [
      { label: "Hoje, seu coração quer...", options: ["Um encontro sem pressa", "Começar uma história nova", "Me escolher primeiro", "Dizer sim ao inesperado"] },
      { label: "Você se sente mais você quando veste...", options: ["Algo que valoriza minha silhueta", "Uma produção completamente nova", "Meu conforto com um toque de beleza", "Uma peça que chama atenção"] },
    ],
    results: ["Seu coração escolhe presença. A MALU encontra peças para aquele encontro que merece ser lembrado.", "Seu coração escolhe recomeço. A MALU celebra a sua próxima versão com novidades cheias de intenção.", "Seu coração escolhe você. A MALU acredita que se arrumar para si também é uma grande história de amor.", "Seu coração escolhe aventura. A MALU acompanha seus planos com peças prontas para viver o inesperado."]
  },
]

export function TestesMalu() {
  const [activeTest, setActiveTest] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<number | null>(null)
  const test = tests[activeTest]
  const progress = result === null ? (answers.length / test.questions.length) * 100 : 100
  const whatsappUrl = useMemo(() => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(testMessage)}`, [])

  function chooseAnswer(index: number) {
    const nextAnswers = [...answers, index]
    if (nextAnswers.length === test.questions.length) {
      setAnswers(nextAnswers)
      setResult(nextAnswers.reduce((sum, answer) => sum + answer, 0) % test.results.length)
    } else {
      setAnswers(nextAnswers)
    }
  }

  function startTest(index: number) {
    setActiveTest(index)
    setAnswers([])
    setResult(null)
  }

  return (
    <section id="testes" className="mt-8 border-2 border-[#d72f39] bg-[#d72f39] p-6 text-white sm:p-10 lg:p-12">
      <div className="flex flex-col gap-4 border-b border-white/30 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.28em] text-[#f7efe5]">Testes MALU</p><h2 className="mt-3 max-w-3xl font-serif text-4xl leading-none sm:text-6xl">Descubra o seu jeito MALU.</h2></div><p className="max-w-xs text-sm leading-relaxed text-white/80">Responda, encontre seu perfil e receba novidades escolhidas para você.</p></div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{tests.map((item, index) => <button key={item.id} type="button" onClick={() => startTest(index)} className={`text-left p-5 transition-all hover:-translate-y-1 ${activeTest === index ? "bg-[#211b18] text-white" : "bg-[#f0d9c4] text-[#211b18]"}`}><p className="text-xs font-bold uppercase tracking-[.18em] opacity-70">{item.eyebrow}</p><h3 className="mt-3 font-serif text-2xl leading-tight">{item.title}</h3><p className="mt-2 text-sm opacity-75">{item.intro}</p></button>)}</div>
      <div className="mt-8 bg-[#f7efe5] p-5 text-[#211b18] sm:p-8" aria-live="polite"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-[.18em]"><span>{test.eyebrow}</span><span>{result === null ? `${answers.length}/${test.questions.length}` : "Resultado"}</span></div><div className="mt-4 h-1 bg-[#e6cabb]"><div className="h-full bg-[#d72f39] transition-all" style={{ width: `${progress}%` }} /></div>{result === null ? <div className="mt-8"><h3 className="font-serif text-3xl sm:text-4xl">{test.questions[answers.length].label}</h3><div className="mt-6 grid gap-3 sm:grid-cols-2">{test.questions[answers.length].options.map((option, index) => <button key={option} type="button" onClick={() => chooseAnswer(index)} className="border-2 border-[#211b18] p-4 text-left text-sm transition-colors hover:bg-[#211b18] hover:text-white">{option}</button>)}</div></div> : <div className="mt-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d72f39]">Seu resultado MALU</p><h3 className="mt-3 font-serif text-4xl leading-tight">Você tem uma curadoria esperando por você.</h3><p className="mt-4 max-w-2xl text-base leading-relaxed text-[#51433d]">{test.results[result]}</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-[#d72f39] px-6 py-4 text-center text-xs font-bold uppercase tracking-[.18em] text-white transition-transform hover:-translate-y-1">Quero receber as novidades da MALU</a><button type="button" onClick={() => { setAnswers([]); setResult(null) }} className="ml-3 mt-4 text-xs font-bold uppercase tracking-[.15em] text-[#d72f39] underline underline-offset-4">Refazer teste</button></div>}</div>
    </section>
  )
}

