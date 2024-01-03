import Link from 'next/link'
import StdImage from '../atom/StdImage'
import { FaArrowRight } from 'react-icons/fa'
import { Facility, FacilityArrow, Teacher, TeacherArrow } from '../../../public/assets'

const TeachersAndFacilities = () => {
    return (
        <section className="container mx-auto flex flex-col items-center mt-[69px] xl:mt-[0px]" >
            <div className="hidden xl:block" >
                <StdImage
                    src={TeacherArrow}
                    alt="teacher-arrow"
                    className="hidden xl:inline-block relative xl:top-[110px] left-[28rem] xl:left-[30rem]  h-[109px] w-[109px] object-contain"
                    width={0}
                    height={0}
                />
            </div>
            {/* teacher section */}
            <div className="flex flex-wrap items-center justify-center">
                <div >
                    <StdImage
                        src={Teacher}
                        alt="teacher"
                        className=" w-[350px] h-[400px] lg:w-[480px] lg:h-[480px] object-fill rounded-2xl"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="md:ml-[37px]" >
                    <h2 className="text-xl lg:text-4xl font-medium mt-[30px] lg:mt-0">
                        Our teachers{" "}
                        <span className="inline-block lg:block">are the best</span>
                    </h2>
                    <p className="text-sm lg:text-xl mt-[23px] w-[350px] lg:w-[492px]">
                        Our teachers share our passion for educational excellence and are
                        driven by the desire to develop students academically, spiritually,
                        physically and socially.
                    </p>
                    <Link
                        href="/admission"
                        className="flex items-center justify-center w-[180px] h-[37px] lg:w-[238px] lg:h-[49px] mr-[25px] px-[20px] py-[8px] mt-[23px] bg-blue-primary text-white text-[16px] xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out"
                    >
                        <span className="mr-[11px]">Enrol Now</span>
                        <FaArrowRight className="w-[13.54px] h-[11.89px]" />
                    </Link>
                </div>
            </div>
            <div

                className="hidden xl:block"
            >
                <StdImage
                    src={FacilityArrow}
                    alt="facility-arrow"
                    className="hidden xl:inline-block relative top-[70px] right-[36rem] h-[109px] w-[109px] object-contain"
                    width={0}
                    height={0}
                />
            </div>
            {/* facility section */}
            <div className="flex flex-wrap-reverse items-center mt-[63px] xl:-mt-[50px] justify-center ">
                <div className="md:mr-[37px] px-5 lg:px-0" >
                    <h2 className=" text-xl lg:text-4xl font-medium mt-[30px] lg:mt-0">
                        Modern and excellent{" "}
                        <span className="inline-block lg:block">school facilities</span>
                    </h2>
                    <p className="text-sm lg:text-xl mt-[23px] w-[350px] lg:w-[492px] ">
                        All of our facilities are designed to encourage innovative teaching
                        and improve the quality of education our students receive.
                    </p>
                    <Link
                        href="/about"
                        className="flex items-center justify-center w-[180px] h-[37px] lg:w-[238px] lg:h-[49px] mr-[25px] px-[20px] py-[8px] mt-[23px] bg-blue-primary text-white text-[16px] xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
                    >
                        <span className="mr-[11px]">Learn More</span>
                        <FaArrowRight className="w-[13.54px] h-[11.89px]" />
                    </Link>
                </div>
                <div >
                    <StdImage
                        src={Facility}
                        alt="facility"
                        className="w-[350px] h-[400px] lg:w-[480px] lg:h-[480px] object-fill rounded-2xl"
                        width={0}
                        height={0}
                    />
                </div>
            </div>
        </section>
    )
}

export default TeachersAndFacilities