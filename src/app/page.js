import Navbar from './components/Navbar'
import { createClient } from '@supabase/supabase-js'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/footer'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://vaqdcjrivplagaprhqbr.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
 // console.log({ SUPABASE_SERVICE_ROLE_KEY })

export const revalidate = 15
export default async function Home() {
  let { data: cards, error } = await supabase.from('cards').select('id')

  console.log('cards: ', cards)

  // define pagetitle, pagecontent and check other vercel errors.
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div className="flex gap-6 w-full my-6 flex-wrap">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} subtitle={card.subtitle} description={card.description} />
          ))}
        </div>
        <div className="m-9 w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}
