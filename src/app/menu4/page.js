import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import { planetData } from '../components/Card'

export default function Menu4() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Ice/Rocky Biome" />
        <PageContent />
        <Card key={0} {...planetData[3]} />
        <Card key={1} {...planetData[4]} />
        <Card key={2} {...planetData[5]} />
      </div>
    </div>
  )
}
