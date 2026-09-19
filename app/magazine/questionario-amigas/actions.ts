"use server"

import { createClient } from "@/lib/supabase/server"

export type QuestionnaireData = {
  firstName: string
  age: number
  wantsToSee: string[]
  preferredClothes: string[]
  clothingOccasions: string[]
  preferredColors: string[]
  stylePreferences: string[]
  favoriteFabric: string
  clothingSize: string
  plansToTravel: string
  shoppingFrequency: string
  magazineInterest: string
}

export async function submitQuestionnaire(data: QuestionnaireData) {
  const firstName = data.firstName.trim().slice(0, 60)
  const age = Number(data.age)
  if (!firstName || !Number.isInteger(age) || age < 13 || age > 120) return { ok: false, error: "Confira seu primeiro nome e sua idade." }
  if (!data.wantsToSee.length || !data.preferredClothes.length || !data.clothingOccasions.length || !data.preferredColors.length || !data.stylePreferences.length || !data.favoriteFabric || !data.clothingSize || !data.plansToTravel || !data.shoppingFrequency || !data.magazineInterest) return { ok: false, error: "Responda todas as perguntas para enviar sua opinião." }

  const finalMessage = `Obrigada, ${firstName}! Seu olhar ajuda a MALU a criar uma revista cada vez mais sua. Nas próximas semanas, escolha o que desperta sua curiosidade, vista o que faz você se sentir bem e deixe espaço para uma novidade inesperada. A MALU vai ouvir suas respostas para trazer conteúdos e escolhas que acompanhem sua vida real.`
  const supabase = await createClient()
  const { error } = await supabase.from("malu_magazine_questionnaires").insert({
    first_name: firstName,
    age,
    wants_to_see: data.wantsToSee.slice(0, 6),
    preferred_clothes: data.preferredClothes.slice(0, 8),
    clothing_occasions: data.clothingOccasions.slice(0, 7),
    preferred_colors: data.preferredColors.slice(0, 7),
    style_preferences: data.stylePreferences.slice(0, 7),
    favorite_fabric: data.favoriteFabric.slice(0, 80),
    clothing_size: data.clothingSize.slice(0, 30),
    plans_to_travel: data.plansToTravel.slice(0, 80),
    shopping_frequency: data.shoppingFrequency.slice(0, 80),
    magazine_interest: data.magazineInterest.slice(0, 80),
    final_message: finalMessage,
  })
  if (error) return { ok: false, error: "Não foi possível enviar agora. Tente novamente." }
  return { ok: true, message: finalMessage }
}
