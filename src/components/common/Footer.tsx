import StdImage from '@/components/atom/StdImage'
import { LogoBlueBg } from '../../../public/assets'
import Link from 'next/link'

function Footer() {
    return (
        <section className="bg-contain bg-[url('/src/assets/img/patterns/pattern-doodle-white-mobile.webp')] lg:bg-[url('/src/assets/img/patterns/Pattern-doodle-white.png')] bg-black w-screen h-[1050px] lg:h-[513px] mt-[65px]">
            <div className=" container mx-auto flex flex-col justify-center items-center text-white px-[64px] 2xl:px-[182px] z-10 ">
                <div className=" flex flex-wrap flex-col justify-center lg:flex-row lg:items-start lg:justify-between w-full mt-[74px] text-xs ">
                    {/* logo */}
                    <StdImage
                        src={LogoBlueBg}
                        alt="logo-bg-blue"
                        className="w-[185px] h-[80px] object-contain "
                        width={0}
                        height={0}
                    />
                    {/* School */}
                    <ul className="space-y-[13px] mt-[53px] lg:mt-0">
                        <li className="text-quick-silver mb-[15px]">School</li>
                        <li className="">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="">
                            <Link href="/gallery">Gallery</Link>
                        </li>
                        {/* <li className="">
              <Link href="#">Tuition</Link>
            </li> */}
                        <li className="">
                            <Link href="/contact">Contact Us</Link>
                        </li>
                        <li className="">
                            <Link href="#"></Link>
                            Careers
                        </li>
                        <li
                            className=""
                            onClick={() =>
                                window.open(
                                    "https://portal.dayspringacademy.co/login",
                                    "_blank"
                                )
                            }
                        >
                            <Link href="#">Staffs</Link>
                        </li>
                    </ul>
                    {/* Press */}
                    <ul className="space-y-[13px] mt-[30px] lg:mt-0">
                        <li className="text-quick-silver mb-[15px]">Press</li>
                        <li className="">Upcoming Events</li>
                        <li className="">Blogs</li>
                    </ul>
                    {/* Socials */}
                    <ul className="space-y-[13px] mt-[30px] lg:mt-0">
                        <li className="text-quick-silver mb-[15px]">Socials</li>
                        <li
                            className="cursor-pointer"
                            onClick={() => window.open("//twitter.com/", "_blank")}
                        >
                            Twitter
                        </li>
                        <li
                            className="cursor-pointer"
                            onClick={() => window.open("//linkedin.com/", "_blank")}
                        >
                            LinkedIn
                        </li>
                        <li
                            className="cursor-pointer"
                            onClick={() => window.open("//instagram.com/", "_blank")}
                        >
                            Instagram
                        </li>
                        <li
                            className="cursor-pointer"
                            onClick={() => window.open("//facebook.com/", "_blank")}
                        >
                            Facebook
                        </li>
                    </ul>
                    {/* Contact */}
                    <ul className="space-y-[13px] mt-[30px] lg:mt-0">
                        <li className="text-quick-silver mb-[15px]">Contact</li>
                        <li className="">+234 913 4299 572</li>
                        <li className="">info@dayspringacademy.co</li>
                        <li className="">admission@dayspringacademy.co</li>
                        <li className="w-[207px]">
                            Plot 27/29 E.C Ezeka Crescent, World Bank Housing Estate, Aba,
                            Abia State.
                        </li>
                    </ul>
                </div>

                <div className="w-full mt-[42px] lg:mt-[163px]">
                    <hr className="border border-blue-primary" />
                    <div className="text-white flex flex-col lg:flex-row justify-between mt-[38px] text-sm lg:text-[15px]">
                        <p className="">
                            Copyright &copy; {new Date().getFullYear()}{" "}
                            <span className="text-blue-primary ">Dayspring Academy</span>.
                        </p>
                        <p className="mt-[28px] lg:mt-0">All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer