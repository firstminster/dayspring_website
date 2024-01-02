import React from 'react'
import StdImage from '../atom/StdImage'

const OurValue = () => {
    return (
        <section
            // variants={staggerContainer}
            // initial="hidden"
            // whileInView="show"
            // viewport={{ once: false, amount: 0.25 }}
            className="lg:mt-[97px]"
        >
            <div className="container mx-auto flex flex-col items-center justify-center lg:justify-between ">
                <div
                    // variants={fadeIn("right", "tween", 1 * 0.2, 1)}
                    className=""
                >
                    <StdImage
                        width={0}
                        height={0}
                        src='/assets/images/stickers/spiral-arow.png'
                        alt="spiral-arrow"
                        className="invisible lg:visible relative -top-[5px] -left-[20rem] h-auto w-[250px] object-contain "
                    />
                </div>
                <h1 className=" text-xl lg:text-[32px] font-semibold mb-[49px] text-center">
                    Our Values
                </h1>
                <div className="flex flex-wrap lg:flex-nowrap lg:flex-row items-center lg:items-start justify-center">
                    {/* Discipline */}
                    <div
                        //   variants={fadeIn("up", "tween", 0.5, 0.6)}
                        className="flex flex-col items-center sm:mr-14"
                    >
                        <StdImage
                            width={0}
                            height={0}
                            src='/assets/images/stickers/discipline.png'
                            alt="discipline"
                            className=" h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] object-cover"
                        />
                        <h2 className="text-[16px] lg:text-2xl font-medium my-[17px]">
                            Discipline
                        </h2>
                        <p className="w-[304px] h-[110px] text-sm lg:text-lg text-center">
                            By teaching important life lessons and instilling core values in
                            them early on, we are able to produce students who embody true
                            discipline at all times.
                        </p>
                    </div>
                    {/* Academic-competence */}
                    <div
                        //   variants={fadeIn("up", "tween", 0.7, 0.6)}
                        className="flex flex-col items-center lg:mr-14"
                    >
                        <StdImage
                            width={0}
                            height={0}
                            src='/assets/images/stickers/academic-competence.png'
                            alt="academic-competence"
                            className="h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] object-cover"
                        />
                        <h2 className="text-[16px] lg:text-2xl font-medium my-[17px]">
                            Academic Competence
                        </h2>
                        <p className="w-[280px] h-[105px] text-sm lg:text-lg text-center">
                            We take pride in the fact our students perform excellently well in
                            their studies, both in internal and external examinations.
                        </p>
                    </div>
                    {/* Leadership */}
                    <div
                        //   variants={fadeIn("up", "tween", 0.9, 0.6)}
                        className="flex flex-col items-center"
                    >
                        <StdImage
                            width={0}
                            height={0}
                            src='/assets/images/stickers/leadership.png'
                            alt="leadership"
                            className="h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] object-cover"
                        />
                        <h2 className="text-[16px] lg:text-2xl font-medium my-[17px]">
                            Leadership
                        </h2>
                        <p className="w-[306px] h-[84px] text-sm lg:text-lg text-center">
                            We train our students to become leaders who would one day go forth
                            to lead nations and change the world for the better.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValue