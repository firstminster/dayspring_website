import { Layout, Metrics, OurValue, Slider, WhyChooseUs, TeachersAndFacilities, CallToAction, ParentsReview, StudentReview, BlogList, UpcomingEvents } from '@/components'

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
        {/* <ParentsReview />
        <StudentReview />
        <BlogList />
        <UpcomingEvents /> */}
        <CallToAction />
      </>

    </Layout>
  )
}
