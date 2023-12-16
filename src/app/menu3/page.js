import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import { planetData } from '../components/Card'

// console.log('planetData in Menu3:', planetData)

export default function Menu3() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Lush/Dense Biomes" />
        {/* <PageContent /> */}
        <Card key={0} {...planetData[0]} />
        <Card key={1} {...planetData[1]} />
        <Card key={2} {...planetData[2]} />
      </div>
    </div>
  )
}
