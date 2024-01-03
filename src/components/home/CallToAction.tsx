import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'


const CallToAction = () => {
    return (
        <section className="bg-cover lg:bg-contain bg-[url('/src/assets/img/patterns/Pattern-doodle-black.webp')] bg-blue-primary container mx-auto flex justify-center items-center mt-[80px] h-[311px] lg:w-[1176px] lg:h-[298px] sm:rounded-2xl">
            <div className="absolute text-white flex flex-col justify-center items-center py-[46px]">
                <h2 className="text-2xl lg:text-4xl w-[340px] md:w-[450px] lg:w-[803px] text-center font-semibold px-5">
                    Provide standard education for your kids and watch them become the
                    successful leaders they were born to be.
                </h2>
                <Link
                    href="/admission"
                    className="flex items-center justify-center w-[180px] h-[37px] lg:w-[281px] lg:h-[49px] mt-[22px] bg-white text-blue-primary text-sm xl:text-lg rounded-full hover:bg-medium-orchid hover:text-white transition-all duration-300 ease-out "
                >
                    <span className="mr-[11px]">Start Now</span>
                    <FaArrowRight className="w-[13.54px] h-[11.89px]" />
                </Link>
            </div>
        </section>
    )
}

export default CallToAction