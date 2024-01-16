import { Layout, Metrics, OurValue, Slider, WhyChooseUs, TeachersAndFacilities, ParentsReview, StudentReview, BlogList, CallToAction } from '@/components'

export default function Home() {
  return (
    <Layout title={'Dayspring Home | Dayspring Academy official website'} keywords={'Dayspring, Home, EduTech, School, Aba, Abia state, Nigeria'} description={'Welcome to Dayspring Academy'}>
      <>
        <div className="relative">
          <Slider />
        </div>
        <WhyChooseUs />
        <OurValue />
        <Metrics />
        <TeachersAndFacilities />
        {/* <ParentsReview />
        <StudentReview />
        <BlogList />
        <UpcomingEvents /> */}
        <CallToAction />
      </>

    </Layout>
  )
}
