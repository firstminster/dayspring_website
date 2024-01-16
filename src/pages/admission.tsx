import { AdmissionHeader, Layout } from '@/components'
import { Ruler, SchoolBag } from '../../public/assets'

const AdmissionPage = () => {
    return (
        <Layout title={'Dayspring Admission | Dayspring EduTech platform'} keywords={'Dayspring, Admission'} description={'To enrol your child at Dayspring Academy, kindly assist them in filling the form below. This should take 5 minutes or less.'}>
            <div>
                <AdmissionHeader schoolBag={SchoolBag} ruler={Ruler} />
            </div>
        </Layout>
    )
}

export default AdmissionPage