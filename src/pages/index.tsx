import OurValue from '@/components/home/OurValue'
import Slider from '@/components/home/Slider'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Layout from '@/components/layout/Layout'

import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title={'Dayspring Home | Dayspring EduTech platform'} keywords={'Dayspring, Home'} description={'Welcome to Dayspring'}>
      <>
        <div className="relative">
          <Slider />
        </div>
        <WhyChooseUs />
        <OurValue />
      </>

    </Layout>
  )
}
