import React from 'react';
import classes from './CarouselItem.module.css';
import image from '../../../../public/images/card-carousel-image1.webp'
const CarouselItem = () => {
    return (
        <div className="bg-white text-white me-2">
            <div className={`p-4 ${classes.textSection}`}>
                <p className={`text-capitalize ${classes.text}`}>Far far away, behind the word
                    mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className={`d-flex py-4 ${classes.imageSection}`}>
                <img className={classes.image} src={image} alt="card-carousel"/>
                <div className="align-self-center ms-3">
                    <h6 className={`text-uppercase ${classes.imageSectionHeading}`}>ROGER SCOTT</h6>
                    <span className={`text-uppercase ${classes.imageSectionDescription}`}>MARKETING MANAGER</span>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;