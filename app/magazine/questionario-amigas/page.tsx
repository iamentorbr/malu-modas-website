import type { Metadata } from "next"
import QuestionnaireForm from "./questionnaire-form"

export const metadata: Metadata = {
  title: "Questionário Amigas da MALU | MALU Magazine",
  description: "Uma conversa especial para ajudar a MALU a criar novidades para você.",
  robots: { index: false, follow: false },
}

export default function PrivateQuestionnairePage() {
  return (
    <main className="min-h-screen bg-[#f7efe5] px-5 py-8 text-[#211b18] sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-4xl">
        <a href="/magazine" className="text-xs font-bold uppercase tracking-[.2em] text-[#d72f39]">← MALU MAGAZINE</a>
        <header className="mt-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-[#d72f39]">Convite especial · Amigas da MALU</p>
          <h1 className="mt-4 font-serif text-5xl leading-[.9] sm:text-7xl">Ajude a MALU a escolher o próximo capítulo.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#51433d]">Este questionário é reservado para quem recebeu o link. Conte o que você quer ver, vestir e viver nos próximos meses.</p>
        </header>
        <QuestionnaireForm />
      </div>
    </main>
  )
}
