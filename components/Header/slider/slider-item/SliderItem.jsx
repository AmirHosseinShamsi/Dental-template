import React from 'react';
import classes from './SliderItem.module.css';
import SliderButton from "components/Header/slider/slider-item/button/SliderButton.jsx";

const SliderItem = ({data}) => {
    return (
        <div className={`carousel-item position-relative ${data.isActive ? 'active' : ''}`}>
            <img src={data.imageSrc} className={`w-100 ${classes.carouselImage}`} alt="..."/>
            <div className={`overlay position-absolute top-0 col-lg-6 col-12 ${classes.backdrop}`}>
                <div className="row m-0 text-white justify-content-center h-100 align-content-center">
                    <h5 className={`display-5 col-10 mb-4 text-center text-lg-start ${classes.carouselHeading}`}>{data.heading}
                    </h5>
                    <p className={`col-10 mb-4 text-center text-lg-start ${classes.carouselDescription}`}>{data.description}</p>
                    <div
                        className="col-12 col-sm-10 justify-content-lg-start justify-content-md-center d-md-flex d-block mb-4">
                        <div className="row m-0">
                            <SliderButton color="blue" title={data.firstBtnTitle}/>
                            <SliderButton color="white" title={data.secondBtnTitle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default SliderItem;