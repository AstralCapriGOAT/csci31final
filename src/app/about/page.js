import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import CardForm from '../components/CardForm'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent />
        <CardForm />
      </div>
    </div>
  )
}
