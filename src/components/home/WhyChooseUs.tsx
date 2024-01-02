import React from 'react'
import StdImage from '../atom/StdImage'

const WhyChooseUs = () => {
    return (
        <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center mt-[90px]">
            <div className="">
                <StdImage
                    // placeholderSrc="bulb-sticker"
                    // effect="blur" // opacity | black-and-white
                    src='/assets/images/people/sec-student-laptop.png'
                    alt="students"
                    width={301}
                    height={0}
                    className=" w-[301px] h-[340px] lg:w-[450px] lg:h-[550px] xl:w-[500px] xl:h-[575px] object-cover rounded-2xl"
                />
            </div>
            <div className=" lg:ml-[53px] mt-[36px] lg:mt-0">
                <h2
                    //   variants={fadeIn("left", "tween", 1 * 0.2, 1)}
                    className="absolute -top-[3rem] inset-x-0 text-center lg:text-left lg:static text-[20px] lg:text-[32px] font-semibold text-rusty-red lg:mb-[10px] xl:mb-[20px] "
                >
                    Why Choose Us?
                </h2>
                <div
                    //   variants={fadeIn("left", "tween", 1 * 0.3, 1)}
                    className="flex items-center justify-center"
                >
                    <span className="bg-rusty-red h-[160px] lg:h-[175px] w-[4px] mr-[16px] lg:mr-[36px]"></span>
                    <div className="mt-[10px]">
                        <h3 className="text-base lg:text-xl xl:text-2xl font-medium mb-2">
                            Innovative Teaching
                        </h3>
                        <p className="w-[300px] lg:w-[450px] xl:w-[530px] text-sm lg:text-base xl:text-lg pb-[10px]">
                            Asides curating curriculums that are broad and flexible, our
                            teachers create a nurturing and stimulating atmosphere for
                            students to learn and grow comfortable in their own learning
                            patterns.
                        </p>
                    </div>
                </div>
                <div
                    //   variants={fadeIn("left", "tween", 1 * 0.4, 1)}
                    className="flex items-center justify-center"
                >
                    <span className="bg-jungle-green h-[155px] w-[4px] mr-[16px] lg:mr-[36px]"></span>
                    <div className="pt-[10px]">
                        <h3 className="text-base lg:text-xl xl:text-2xl font-medium mb-2">
                            Conducive environment
                        </h3>
                        <p className="w-[300px] lg:w-[450px] xl:w-[530px] text-sm lg:text-base xl:text-lg pb-[10px]">
                            We offer our students a multicultural and nurturing environment
                            that allows them to develop their talents as well as receive the
                            finest learning experience.
                        </p>
                    </div>
                </div>
                <div
                    //   variants={fadeIn("left", "tween", 1 * 0.5, 1)}
                    className="flex items-center justify-center"
                >
                    <span className="bg-medium-orchid h-[145px] w-[4px] mr-[16px] lg:mr-[36px]"></span>
                    <div className="pt-[10px]">
                        <h3 className="text-base lg:text-xl xl:text-2xl font-medium mb-2">
                            Holy-Spirit Guided
                        </h3>
                        <p className="w-[300px] lg:w-[450px] xl:w-[530px] text-sm lg:text-base xl:text-lg pb-[10px]">
                            Our qualitative education system is built on sound biblical
                            principles that further help them to know and love God more
                            everyday.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs