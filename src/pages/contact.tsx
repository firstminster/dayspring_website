import { ContactForm, ContactMap, Layout } from '@/components'
import React from 'react'

const ContactPage = () => {
    return (<Layout title={'Dayspring Contact Us | Dayspring EduTech platform'} keywords={'Dayspring, Contact Us'} description={'Welcome to Dayspring'}>
        <section className="container mx-auto mt-[78px] ">
            <div className="flex items-start justify-center flex-wrap ">
                <ContactForm />
                <ContactMap />
            </div>
        </section>
    </Layout>
    )
}

export default ContactPage