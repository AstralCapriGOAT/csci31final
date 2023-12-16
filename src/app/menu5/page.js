import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import { planetData } from '../components/Card'

export default function Menu5() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Hot/Dry Biome" />
        <PageContent />
        <Card key={0} {...planetData[6]} />
        <Card key={1} {...planetData[7]} />
        <Card key={2} {...planetData[8]} />
      </div>
    </div>
  )
}
