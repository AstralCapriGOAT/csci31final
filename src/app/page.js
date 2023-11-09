import Navbar from './components/Navbar'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://vaqdcjrivplagaprhqbr.supabase.co', process.env.SUPABASE_SECRET)

export const revalidate = 15
export default async function Home() {
  let { data: cards, error } = await supabase.from('cards').select('id')

  console.log('cards: ', cards)

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div className="flex gap-6 w-full my-6 flex-wrap">
          {cards.map((card) => (
            <Card title={card.title} subtitle={card.subtitle} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  )
}
