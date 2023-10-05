import React from 'react';
import classes from './Slider.module.css';
import SliderItem from "../../../components/Header/slider/slider-item/SliderItem.jsx";
import Image1 from '../../../public/images/carousel-image1.webp';
import Image2 from '../../../public/images/carousel-image2.webp';
const Slider = () => {
    const data = [{
        isActive: true,
        heading: 'Dentist Services that You Can Trust',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        firstBtnTitle:'see our services',
        secondBtnTitle:'view course',
        imageSrc:Image1,
    }, {
        isActive: false,
        heading: 'A Brighter Dental Experienced',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        firstBtnTitle: 'make an appointment',
        secondBtnTitle: 'view course',
        imageSrc:Image2,
    },
    ]
    return (
        <div id="carouselExampleIndicators" className={`carousel slide ${classes.carouselHeight}`} data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className={`active ${classes.carouselButton}`}
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2" className={classes.carouselButton}></button>
            </div>
            <div className="carousel-inner">
                {data.map((item , index)=>{
                    return <SliderItem key={index} data={{...item}}/>
                })}
            </div>
        </div>
    );
};
export default Slider;