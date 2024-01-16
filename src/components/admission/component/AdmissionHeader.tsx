import StdImage from "@/components/atom/StdImage";
import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useSelector } from "react-redux";

const AdmissionHeader = ({ ruler, schoolBag }: any) => {
    // section global state
    //   const {
    //     section: { result },
    //   } = useSelector((state) => state.section);

    // assigned the admission fee to a variable
    //   const admissionFee = result?.admissionFee;

    return (
        <>
            <section className="flex flex-col items-center justify-center text-white bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid w-screen h-[280px]">
                <div className="absolute">
                    <StdImage
                        src={schoolBag}
                        alt="sticker1"
                        className="hidden lg:inline-block relative top-[5px] left-[28rem] lg:left-[-25rem] h-[144.11px] w-[136.16px] object-contain"
                        width={0}
                        height={0}
                    />
                    <StdImage
                        src={ruler}
                        alt="sticker1"
                        className="hidden lg:inline-block relative top-[5px] left-[28rem] lg:left-[25rem]  h-[144.11px] w-[136.16px] object-contain"
                        width={0}
                        height={0}
                    />
                    {/* <LazyLoadImage
            placeholderSrc="schoolBag-img"
            effect="blur" // opacity | black-and-white
            src={schoolBag}
            alt="schoolBag"
            className="hidden lg:inline-block relative top-[5px] left-[28rem] lg:left-[-25rem] h-[144.11px] w-[136.16px] object-contain"
          /> */}
                    {/* <LazyLoadImage
            placeholderSrc="ruler-img"
            effect="blur" // opacity | black-and-white
            src={ruler}
            alt="ruler"
            className="hidden lg:inline-block relative top-[5px] left-[28rem] lg:left-[25rem]  h-[144.11px] w-[136.16px] object-contain"
          /> */}
                </div>

                <h1 className="text-4xl lg:text-6xl font-semibold">Admissions</h1>
                <p className="text-center mt-[21px] text-base lg:text-2xl px-[30px] ">
                    To enrol your child at Dayspring Academy, kindly assist <br />
                    them in filling the form below. This should take <br /> 5 minutes or
                    less.
                </p>
            </section>

            <section className="container mx-auto flex flex-col items-center justify-center">
                {/* Notice */}
                <div className="my-[27px]">
                    <p className="text-base lg:text-lg text-center px-[20px]">
                        On completing this form, you will be required to pay a registration
                        fee of
                        {/* ₦{admissionFee ? admissionFee : "0.0"} */}
                    </p>
                </div>
            </section>
        </>
    );
};

export default AdmissionHeader;
