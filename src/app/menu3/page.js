import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function Menu3() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Menu3" />
        <PageContent />
      </div>
    </div>
  )
}
