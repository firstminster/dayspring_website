import { Layout, Metrics, OurValue, Slider, WhyChooseUs } from '@/components'
import { TeachersAndFacilities } from '@/components/home'

export default function Home() {
  return (
    <Layout title={'Dayspring Home | Dayspring EduTech platform'} keywords={'Dayspring, Home'} description={'Welcome to Dayspring'}>
      <>
        <div className="relative">
          <Slider />
        </div>
        <WhyChooseUs />
        <OurValue />
        <Metrics />
        <TeachersAndFacilities />
      </>

    </Layout>
  )
}
