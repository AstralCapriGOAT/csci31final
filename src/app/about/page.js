import Navbar from '../components/Navbar'
export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent />
      </div>
    </div>
  )
}
