import StdImage from '../atom/StdImage'

interface HeaderIntroProps {
    title: string;
    leadText: string;
    imgSrc: any;
    imgAlt: string;
    sticker1: any;
    sticker2: any;
}

const HeaderIntro = ({
    title,
    leadText,
    imgSrc,
    imgAlt,
    sticker1,
    sticker2,
}: HeaderIntroProps) => {
    return (
        <section className=" flex flex-col items-center justify-start text-white bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid h-[503px] lg:h-[684px] w-screen">
            <div className="absolute">
                <StdImage
                    src={sticker1}
                    alt="sticker1"
                    className="hidden lg:inline-block relative top-[50px] left-[28rem] lg:left-[-25rem] h-[144.11px] w-[136.16px] object-contain"
                    width={0}
                    height={0}
                />
                <StdImage

                    src={sticker2}
                    alt="sticker2"
                    className="hidden lg:inline-block relative top-[50px] left-[28rem] lg:left-[26rem]  h-[144.11px] w-[136.16px] object-contain"
                />
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold mt-[4rem] lg:mt-[4rem] ">
                {title}
            </h1>
            <p className="text-center mt-[21px] text-base lg:text-2xl mx-5 w-[300px] lg:w-[683px]">
                {leadText}
            </p>
            <StdImage
                src={imgSrc}
                alt={imgAlt}
                className="relative top-[50px] rounded-[20px] object-cover w-[307px] h-[280px] sm:w-[450px]  md:w-[550px]  lg:w-[1062px] lg:h-[507px]"
            />
        </section>
    )
}

export default HeaderIntro