import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import classes from './CardCarousel.module.css';
import CarouselItem from "../../../components/main-section/card-carousel/carousel-item/CarouselItem.jsx";
const CardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <section className={classes.cardCarouselSection}>
            <div className="container p-0">
                <div className="row m-0">
                    <div className="col-12 text-center">
                        <span className={`text-uppercase ${classes.headingText}`}>terminal</span>
                        <h6 className={`text-capitalize ${classes.descriptionText}`}>Happy Customers</h6>
                    </div>
                    <div style={{marginTop:'100px'}} className="col-12 position-relative">
                        <Slider {...settings}>
                            <CarouselItem/>
                            <CarouselItem/>
                            <CarouselItem/>
                            <CarouselItem/>
                            <CarouselItem/>
                            <CarouselItem/>
                        </Slider>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CardCarousel;