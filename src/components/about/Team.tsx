import React from 'react'
import CarouselTeam from './component/CarouselTeam'

const Team = () => {
    return (
        <section className="container mx-auto mt-[59px] lg:mt-[90px]">
            <h1 className="text-xl lg:text-[32px] font-semibold lg:mb-[30px] text-center">
                Administration
            </h1>
            <CarouselTeam />
        </section>
    )
}

export default Team