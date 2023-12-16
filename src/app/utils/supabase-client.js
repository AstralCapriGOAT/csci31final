import { createClient } from '@supabase/supabase-js'

export function getClient() {
  // Create a single supabase client for interacting with your database
  // ERASE BEFORE COMMIT

  // TURN THIS ON BEFORE COMMIT
  const supabase = createClient('https://vaqdcjrivplagaprhqbr.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  console.log(process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase
}

// go over what card elements are needed
export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('cards').insert(card)
  // implement https://supabase.com/docs/reference/javascript/insert
}

export async function findCards() {
  const supabase = getClient()
  const { data: cards, error } = await supabase.from('cards').select()
  return cards || []
  // implements https://supabase.com/docs/reference/javascript/select
}
