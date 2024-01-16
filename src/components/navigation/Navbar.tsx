import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import StdImage from '../atom/StdImage'
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDetectOutsideClick } from './dropdown/useDetectOutsideClick';
import Dropdown from './dropdown/Dropdown';


const Navbar = () => {
    const router = useRouter()
    const [isMenuActive, setIsMenuActive] = useState(false);
    const menuActiveHandler = () => setIsMenuActive(!isMenuActive); // set isMenuActive to true
    const closeMobileMenuHandler = () => setIsMenuActive(false); // set isMenuActive to false

    // dropdown navigation menu
    const dropdownRef = useRef(null);
    const [isDropDownActive, setIsDropDownActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsDropDownActive(!isDropDownActive);

    const isActive = (href: string) => router.pathname === href;

    return (
        <div id="myHeader" className="bg-white px-2 sm:px-4 py-2.5 sticky h-[75px] lg:h-[95px] w-full z-20 top-0 left-0 shadow-sm">
            <div className="w-full container flex flex-wrap justify-between items-center mx-auto">
                <div className="mt-[6px] mx-[18px] lg:my-[13px] xl:mx-[18px]">
                    <Link href='/'>
                        <StdImage
                            src='/assets/images/logo/dayspring-logo-blue.png'
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
                    <div className="absolute top-0 right-0 lg:hidden m-6 cursor-pointer"
                        onClick={menuActiveHandler}
                    >
                        {isMenuActive ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 transition-all duration-300 ease"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 transition-all duration-300 ease"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </div>
                </div>
                <div className="justify-between items-center w-full xl:flex md:w-auto md:order-1">
                    <ul className={`nav-menu ${isMenuActive ? "active animate-fade-in-menu-left" : null
                        }`}>
                        <li className=''>
                            <Link href="/" onClick={closeMobileMenuHandler} className={isActive('/') ? 'active-navlink' : 'hover-navlink'}>
                                Home
                            </Link>
                        </li>
                        <li className='hover-navlink'>
                            <Link href="/about" onClick={closeMobileMenuHandler} className={isActive('/about') ? 'active-navlink' : 'hover-navlink'}>
                                About
                            </Link>
                        </li>
                        <li className='hover-navlink'>
                            <Link href="/gallery" onClick={closeMobileMenuHandler} className={isActive('/gallery') ? 'active-navlink' : 'hover-navlink'}>
                                Gallery
                            </Link>
                        </li>
                        {/* press - dropdown menu link for desktop */}
                        <li className="hidden lg:block" ref={dropdownRef}>
                            <button
                                // className="flex items-center"
                                onClick={onClick}
                                className={`${isActive('/blogs') ? 'active-navlink' : 'hover-navlink '} flex items-center`}
                            >
                                Press
                                <span>
                                    {!isDropDownActive ? (
                                        <MdKeyboardArrowDown
                                            className="hidden lg:block"
                                        // className={`${isActive('/blogs') ? 'active-navlink' : 'hover-navlink '} hidden lg:block`} 
                                        />
                                    ) : (
                                        <MdKeyboardArrowUp
                                            className="hidden lg:block"
                                        // className={`${isActive('/blogs') ? 'active-navlink' : 'hover-navlink '} hidden lg:block`}
                                        />
                                    )}
                                </span>
                            </button>
                            <div className={`menu ${isDropDownActive ? "active" : null}`}>
                                <Dropdown />
                            </div>
                        </li>
                        {/* press - menu link for mobile */}
                        <li className="block lg:hidden">
                            <Link
                                href="/blogs"
                                onClick={closeMobileMenuHandler}
                                className={isActive('/blogs') ? 'active-navlink' : 'hover-navlink'}
                            // className="flex items-center"
                            >
                                Press
                            </Link>
                        </li>
                        <li className='hover-navlink'>
                            <Link
                                href="/contact" onClick={closeMobileMenuHandler} className={isActive('/contact') ? 'active-navlink' : 'hover-navlink'}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <hr className="text-blue-primary border border-blue-primary w-[124px] lg:hidden" />
                        </li>
                        <li className="lg:hidden">
                            <Link
                                href="/admission"
                                onClick={closeMobileMenuHandler}
                                className={isActive('/admission') ? 'active-navlink' : 'hover-navlink'}
                            >
                                Admission
                            </Link>
                        </li>
                        <li className="lg:hidden">
                            <a
                                href="https://portal.dayspringacademy.co"
                                target="_blank"
                                className="hover-navlink"
                                onClick={closeMobileMenuHandler}
                            >
                                Log In
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar