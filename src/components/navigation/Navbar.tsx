import Link from 'next/link'
import StdImage from '../atom/StdImage'
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter()

    console.log(router);

    const isActive = (href: string) => router.pathname === href;

    console.log(isActive);

    return (
        <div id="myHeader" className="bg-white px-2 sm:px-4 py-2.5 sticky h-[75px] lg:h-[95px] w-full z-20 top-0 left-0 shadow-sm">
            <div className="w-full container flex flex-wrap justify-between items-center mx-auto">
                <div className="mt-[6px] mx-[18px] lg:my-[13px] xl:mx-[18px]">
                    <Link href='/'>
                        <StdImage
                            src='/assets/images/logo/dayspring-logo-blue.png'
                            // className='m-4'
                            className="h-[45px] lg:h-[45px] xl:h-[55px] w-auto object-contain"
                            width={0}
                            height={45} alt={'dayspring-logo'} />
                    </Link>

                </div>
                <div className="flex md:order-2">
                    <div className="hidden lg:flex">
                        <Link href='/admission' className="flex items-center justify-center w-[130px] h-[40px] xl:w-[169px] xl:h-[49px] mr-[25px] px-[20px] py-[8px] xl:px-[25.5px] xl:py-[14px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out">
                            <span className="mr-[11px]">Admission</span>
                            <FaArrowRight className="w-[13.54px] h-[11.89px]" />
                        </Link>
                        <a
                            href="https://portal.dayspringacademy.co"
                            target="_blank"
                            className="flex items-center justify-center w-[130px] h-[40px] xl:w-[169px] xl:h-[49px] mr-[25px]  px-[25.5px] py-[14px] bg-white border border-blue-primary text-blue-primary text-sm xl:text-lg rounded-full hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out"
                        >
                            <span className="mr-[11px]">Log In</span>
                            <FaArrowRight className="w-[13.54px] h-[11.89px]" />
                        </a>
                    </div>
                </div>
                <div className="justify-between items-center w-full xl:flex md:w-auto md:order-1">
                    <ul className={`nav-menu`}>
                        <li className=''>
                            <Link href="/" className={isActive('/') ? 'active-navlink' : 'hover-navlink'}>
                                Home
                            </Link>
                        </li>
                        <li className='hover-navlink'>
                            <Link href="/about" className={isActive('/about') ? 'active-navlink' : 'hover-navlink'}>
                                About
                            </Link>
                        </li>
                        <li className='hover-navlink'>
                            <Link href="/gallery" className={isActive('/gallery') ? 'active-navlink' : 'hover-navlink'}>
                                Gallery
                            </Link>
                        </li>
                        <li className='hover-navlink'>
                            <Link
                                href="/contact" className={isActive('/contact') ? 'active-navlink' : 'hover-navlink'}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar