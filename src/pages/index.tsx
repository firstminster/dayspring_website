import { Layout, Metrics, OurValue, Slider, WhyChooseUs, TeachersAndFacilities, ParentsReview, StudentReview, BlogList, CallToAction } from '@/components'

export default function Home() {
  return (
    <Layout title={'Dayspring Academy Aba: Premier Nursery, Primary, and Secondary School in Abia, Nigeria'} keywords={'Nursery, Primary, Secondary School Aba, Best School in Aba, Nigeria, Education in Abia State, Dayspring Academy Abia, Top-rated School Nigeria, Academic Excellence Aba, Quality Education Nursery Abia, Leading Secondary School Aba, Learning Environment Abia'} description={'Discover excellence in education at Dayspring Academy in Aba, Abia State. We provide quality nursery, primary, and secondary education, fostering academic achievement in a conducive learning environment. Choose Dayspring Academy for top-notch education in Nigeria.'}>
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
