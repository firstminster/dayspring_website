import CountUp from "react-countup";

const Metrics = () => {
    return (
        <section className=" bg-cover lg:bg-contain bg-[url('/src/assets/img/patterns/pattern-doodle-white-metrics-mobile.webp')] lg:bg-[url('/src/assets/img/patterns/metrics-bg.webp')] bg-blue-primary mt-[50px] lg:mt-[110px] h-[379px] lg:h-[163px] w-full flex justify-center items-center py-[51px]">
            <div
                className={`container mx-auto absolute h-auto flex flex-col lg:flex-row justify-center items-center text-white space-y-[41px] lg:space-y-0 lg:space-x-[169px] z-10`}
            >
                <div className="text-center">
                    <h2 className="text-[40px] font-semibold -mb-3">
                        <CountUp start={200} end={5000} duration={4} />+
                    </h2>
                    <p className="text-lg font-light">Alumnis</p>
                </div>
                <div className="text-center">
                    <h2 className="text-[40px] font-semibold -mb-3">
                        <CountUp start={5} end={70} duration={4} />+
                    </h2>
                    <p className="text-lg font-light">Certified Tutors</p>
                </div>
                <div className="text-center">
                    <h2 className="text-[40px] font-semibold -mb-3">
                        <CountUp start={5} end={99} duration={4} />%
                    </h2>
                    <p className="text-lg font-light">Success Rate</p>
                </div>
            </div>
        </section>
    )
}

export default Metrics