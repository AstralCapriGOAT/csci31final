import Navbar from './components/Navbar'
import { createClient } from '@supabase/supabase-js'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/Footer'
import { findCards } from './utils/supabase-client'

export const revalidate = 15
export default async function Home() {
  // let { data: cards, error } = await supabase.from('cards').select('id') OLD
  const cards = await findCards()

  console.log('cards: ', cards)

  // define pagetitle, pagecontent and check other vercel errors.
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Spaceport" />
        <PageContent defaultContent="this is default content" /> {/* defaults not passing */}
        <h1>what happens here?</h1>
        <div classname="text-white">
          <p>This is a failed landing page for Star Wars Geography.</p>
          <p>You can explore the incomplete menus if you like . . .</p>
        </div>
        <div className="flex gap-6 w-full my-6 flex-wrap">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} subtitle={card.subtitle} description={card.description} />
          ))}
          <Card />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}
