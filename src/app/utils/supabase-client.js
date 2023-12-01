import { createClient } from '@supabase/supabase-js'

export function getClient() {
  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    'https://vaqdcjrivplagaprhqbr.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY,
  )
  console.log(process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY)
  return supabase
}

export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('countries').insert(card)
  // implement https://supabase.com/docs/reference/javascript/insert
}

export async function findCards() {
  const supabase = getClient()
  const { data: cards, error } = await supabase.from('cards').select()
  return cards
  // implements https://supabase.com/docs/reference/javascript/select
}