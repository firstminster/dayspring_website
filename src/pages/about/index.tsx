import { CallToAction, Layout, OurValue } from '@/components'
import { HeaderIntro } from '@/components/common'
import React from 'react'
import { BallFlag, PriPupilGroup, Stationary } from '../../../public/assets'

const AboutPage = () => {
    return (
        <Layout title={'Dayspring Home | Dayspring EduTech platform'} keywords={'Dayspring, About Us'} description={'Dayspring Academy founded in the year 2000 by late Engr./Elder & Mrs Friday Utaegbulem Harry. The existence of Dayspring Academy was a revelation of God to Mrs Harry to start a night school. It indeed started as a night school but then slowly progressed into a Nursery, Primary and Secondary school. The Bible passage, Luke 1:78-79, was what inspired the name, DAYSPRING ACADEMY.'}>
            <div>
                <HeaderIntro title={"About Us"}
                    leadText={
                        " We are raising the next generation of leaders who will go on to change the world with the love of God firmly rooted in their hearts."
                    }
                    imgSrc={PriPupilGroup}
                    imgAlt={"about-us-header"}
                    sticker1={Stationary}
                    sticker2={BallFlag} />
                <OurValue />
                <CallToAction />
            </div>
        </Layout>
    )
}

export default AboutPage