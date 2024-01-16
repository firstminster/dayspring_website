import { CallToAction, Layout, PhotoGallery } from '@/components'
import { HeaderIntro } from '@/components/common'
import React from 'react'
import { GalleryHeroSec, Ruler, SchoolBag } from '../../public/assets'
import { slides } from '../../data/photos'

const GalleryPage = () => {
    return (
        <Layout title={'Dayspring Gallery | Dayspring EduTech platform'} keywords={'Dayspring, Gallery'} description={'Take a walk through this visual representation of some of our school activities and facilities.'}>
            <div>
                <HeaderIntro title={"Gallery"}
                    leadText={
                        "Take a walk through this visual representation of some of our school activities and facilities."
                    }
                    imgSrc={GalleryHeroSec}
                    imgAlt={"about-us-header"}
                    sticker1={SchoolBag}
                    sticker2={Ruler} />
                {/* Divide */}
                <DivideTop />
                {/* images */}
                <PhotoGallery slides={slides} />
                {/* Divide */}
                <DivideDown />
                <CallToAction />
            </div>
        </Layout>
    )
}

export default GalleryPage

// gallery top partition
const DivideTop = () => {
    return (
        <section >
            {/* Divide */}
            <div
                className="hidden lg:flex items-center justify-center relative top-[0px] mt-[130px] "
            >
                <span className="bg-rusty-red h-[4px] w-[60rem] xl:w-[1155.5px] text-center flex justify-center items-center" />
                <span className="bg-rusty-red h-[11px] w-[11px] rounded-full ml-5" />
            </div>
        </section>
    );
};

// gallery down partition
const DivideDown = () => {
    return (
        <section >
            {/* Divide */}
            <div
                className="hidden lg:flex items-center justify-center relative top-[0px] mt-10"
            >
                <span className="bg-rusty-red h-[4px] w-[60rem] xl:w-[1155.5px] text-center flex justify-center items-center" />
                <span className="bg-rusty-red h-[11px] w-[11px] rounded-full ml-5" />
            </div>
        </section>
    );
};