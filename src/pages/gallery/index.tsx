import { CallToAction, Layout } from '@/components'
import React from 'react'

const GalleryPage = () => {
    return (
        <Layout title={'Dayspring Gallery | Dayspring EduTech platform'} keywords={'Dayspring, Gallery'} description={'Take a walk through this visual representation of some of our school activities and facilities.'}>
            <div>
                <CallToAction />
            </div>
        </Layout>
    )
}

export default GalleryPage