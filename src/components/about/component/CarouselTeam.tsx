import React, { Component } from "react";
import Slider from "react-slick";
import { Team1, Team2, Team3, Team4 } from "../../../../public/assets";
import StdImage from "@/components/atom/StdImage";

// { props: {} | Readonly<{}> }

class CustomSlide extends Component<any | any> {
    render() {
        const { index, ...props }: any = this.props;
        return <div {...props}></div>;
    }
}

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 5000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        return (
            <div className="slickteam">
                <Slider {...settings}>
                    <CustomSlide className="itm" index={1}>
                        <div className="bg">
                            <StdImage src={Team1} className="img-fluid" alt="Imageteam" />
                        </div>
                        <div className="desc">
                            <div className="name ">Maureen C. Harry</div>
                            <div className="title">Director</div>
                        </div>

                    </CustomSlide>

                    <CustomSlide className="itm" index={2}>
                        <div className="bg">
                            <StdImage src={Team2} className="img-fluid" alt="Imageteam" width={0}
                                height={0} />
                        </div>
                        <div className="desc">
                            <div className="name">Blessing Onuoha</div>
                            <div className="title">Vice Principal</div>
                        </div>

                    </CustomSlide>

                    <CustomSlide className="itm" index={3}>
                        <div className="bg">
                            <StdImage src={Team3} className="img-fluid" alt="Imageteam" width={0}
                                height={0} />
                        </div>
                        <div className="desc">
                            <div className="name">Mbata Leonard</div>
                            <div className="title">Dean of Studies</div>
                        </div>

                    </CustomSlide>

                    <CustomSlide className="itm" index={4}>
                        <div className="bg">
                            <StdImage src={Team4} className="img-fluid " alt="Imageteam" width={0}
                                height={0} />
                        </div>
                        <div className="desc">
                            <div className="name">Favour Nwachukwu</div>
                            <div className="title">Head Of Departments</div>
                        </div>

                    </CustomSlide>
                </Slider>
            </div>
        );
    }
}



