import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import StdImage from '../atom/StdImage'
import Link from "next/link";

// Slider data
const sliderData = [
    {
        _id: 1,
        title: "Help your child become the best version of themselves",
        desc: "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",
        image: '/assets/images/hero/Hero1.png',
        bgColor:
            "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
        bgImage: '/assets/images/logo/Hero-gradient-bg.png',
        sticker1: '/assets/images/stickers/Calculator.png',
        sticker2: '/assets/images/stickers/Globe.png',
        sticker3: '/assets/images/stickers/Bulb.png',
        sticker4: '/assets/images/stickers/Books.png',
    },
    {
        _id: 2,
        title: "Help your child become the best version of themselves",
        desc: "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",

        image: '/assets/images/hero/Hero2.png',
        bgColor:
            "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
        bgImage: '/assets/images/logo/Hero-gradient-bg.png',
        sticker1: '/assets/images/stickers/Calculator.png',
        sticker2: '/assets/images/stickers/Globe.png',
        sticker3: '/assets/images/stickers/Bulb.png',
        sticker4: '/assets/images/stickers/Books.png',
    },
    {
        _id: 3,
        title: "Help your child become the best version of themselves",
        desc: "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",

        image: '/assets/images/hero/Hero3.png',
        bgColor:
            "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
        bgImage: '/assets/images/logo/Hero-gradient-bg.png',
        sticker1: '/assets/images/stickers/Calculator.png',
        sticker2: '/assets/images/stickers/Globe.png',
        sticker3: '/assets/images/stickers/Bulb.png',
        sticker4: '/assets/images/stickers/Books.png',
    },
    {
        _id: 4,
        title: "Help your child become the best version of themselves",
        desc: "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",

        image: '/assets/images/hero/Hero4.png',
        bgColor:
            "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
        bgImage: '/assets/images/logo/Hero-gradient-bg.png',
        sticker1: '/assets/images/stickers/Calculator.png',
        sticker2: '/assets/images/stickers/Globe.png',
        sticker3: '/assets/images/stickers/Bulb.png',
        sticker4: '/assets/images/stickers/Books.png',
    },
    {
        _id: 5,
        title: "Help your child become the best version of themselves",
        desc: "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",

        image: '/assets/images/hero/Hero5.png',
        bgColor:
            "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
        bgImage: '/assets/images/logo/Hero-gradient-bg.png',
        sticker1: '/assets/images/stickers/Calculator.png',
        sticker2: '/assets/images/stickers/Globe.png',
        sticker3: '/assets/images/stickers/Bulb.png',
        sticker4: '/assets/images/stickers/Books.png',
    },
];

// initialize timer
const delay = 4500;

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number | any>(0);
    const timeoutRef = useRef<any>(null);

    // clean-up timeout
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentSlide((prevIndex: number) =>
                    prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [currentSlide]);
    return (
        <section className="overflow-hidden">
            <div
                className={`whitespace-nowrap transition-all duration-1000 ease-in-out `}
                style={{ transform: `translate3d(${-currentSlide * 100}%, 0, 0)` }}
            >
                {sliderData.map((item, index) => {
                    const { _id, bgColor } = item;
                    return (
                        // background-image
                        <div
                            key={_id}
                            className={` h-[880px] w-full lg:h-[684px] lg:w-screen  ${bgColor} inline-block`}
                        />
                    );
                })}
            </div>
            {/* slider-content */}
            <div className="absolute top-[35px] lg:top-[90px] inset-x-0">
                {sliderData.map((item, idx) => {
                    const {
                        _id,
                        image,
                        title,
                        desc,
                        sticker1,
                        sticker2,
                        sticker3,
                        sticker4,
                    } = item;

                    return (
                        <div
                            key={_id}
                            className="transition-all duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(${-currentSlide * 100}%, 0, 0)`,
                            }}
                        >
                            {idx === currentSlide ? (
                                // slider-content
                                <div className="flex flex-col lg:flex-row items-center justify-center">
                                    <StdImage
                                        src={sticker3}
                                        alt="bulb"
                                        width={80.81}
                                        height={0}
                                        className="hidden xl:block xl:relative top-[-13rem] left-[78rem] w-[80.81px] h-[95.3px] animate-fade-in-left"
                                    />
                                    <StdImage
                                        src={sticker4}
                                        alt="books"
                                        width={93.03}
                                        height={0}
                                        className="hidden xl:block xl:relative top-[13rem] left-[75rem] w-[93.03px] h-[82.77px] animate-fade-in-left"
                                    />

                                    <div className="text-white text-center lg:text-left  lg:animate-fade-in-left">
                                        {/* desktop-view */}
                                        <h1 className="block text-3xl lg:text-4xl xl:text-6xl w-[261px] lg:w-[390px] xl:w-[647px] font-semibold animate-fade-in-left lg:animate-none">
                                            {title}
                                        </h1>
                                        {/* desktop-view */}
                                        <p className="block mt-[31px] w-[261px] lg:w-[380px] xl:w-[585px] text-base xl:text-2xl animate-fade-in-left lg:animate-none">
                                            {desc}
                                        </p>{" "}
                                        <Link
                                            href="/about"
                                            className="absolute top-[45rem] inset-y-0 lg:static flex items-center text-black justify-center bg-white w-[238px] h-[49px] px-[55.5px] py-[14px] mt-[35px] rounded-full border hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out animate-fade-in-left lg:animate-none"
                                        >
                                            <span className="mr-[11px] text-lg"> Learn More</span>
                                            <FaArrowRight className="w-[13.54px] h-[11.89px]" />
                                        </Link>
                                    </div>
                                    {/* content-image */}
                                    <StdImage
                                        src={image}
                                        alt="little-girl"
                                        width={289}
                                        height={0}
                                        className="mt-[33px] h-[384px] w-[289px] lg:h-[450px] lg:w-[350px] xl:h-[500px] xl:w-auto lg:ml-[94px] animate-fade-in-left lg:animate-fade-in-left"
                                    />

                                    <StdImage
                                        src={sticker2}
                                        alt="globe"
                                        width={115}
                                        height={0}
                                        className="hidden xl:block xl:relative top-[13rem] right-[38rem] w-[115px] h-[125.55px] animate-fade-in-left"
                                    />

                                    <StdImage
                                        src={sticker1}
                                        alt="calculator"
                                        width={85.75}
                                        height={0}
                                        className="hidden xl:block xl:relative top-[-13rem] right-[43rem] w-[85.75px] h-[96.05px] animate-fade-in-left"
                                    />
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>

            {/* slider-buttons */}
            <div className="absolute top-[53rem] lg:top-[40rem] right-0 lg:inset-x-0 text-center">
                {sliderData.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full cursor-pointer inline-block m-1 lg:m-2 ${currentSlide === idx ? " bg-blue-primary" : "bg-white"
                            }`}
                        onClick={() => {
                            setCurrentSlide(idx);
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default Slider