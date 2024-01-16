import { CallToAction, Layout, OurMission, OurValue, Team } from '@/components'
import { HeaderIntro } from '@/components/common'
import React from 'react'
import { BallFlag, PriPupilGroup, Stationary } from '../../public/assets'

const AboutPage = () => {
    return (
        <Layout title={'Dayspring About Us | Dayspring EduTech platform'} keywords={'Dayspring, About Us'} description={'We are raising the next generation of leaders who will go on to change the world with the love of God firmly rooted in their hearts.'}>
            <div>
                <HeaderIntro title={"About Us"}
                    leadText={
                        " We are raising the next generation of leaders who will go on to change the world with the love of God firmly rooted in their hearts."
                    }
                    imgSrc={PriPupilGroup}
                    imgAlt={"about-us-header"}
                    sticker1={Stationary}
                    sticker2={BallFlag} />
                <OurMission />
                <OurValue />
                <Team />
                <CallToAction />
            </div>
        </Layout>
    )
}

export default AboutPage