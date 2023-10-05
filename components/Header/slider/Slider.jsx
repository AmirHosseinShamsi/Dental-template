import React from 'react';
import Image1 from '../../../public/images/carousel-image1.webp';
import Image2 from '../../../public/images/carousel-image2.webp';
import classes from './Slider.module.css';

const Slider = () => {
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
                <div className="carousel-item position-relative active">
                    <img src={Image1} className={`w-100 ${classes.carouselImage}`} alt="..."/>
                    <div className={`overlay position-absolute top-0 col-lg-6 col-12 ${classes.backdrop}`}>
                        <div className="row m-0 text-white justify-content-center h-100 align-content-center">
                                    <h5 className={`display-5 col-10 mb-4 text-center text-lg-start ${classes.carouselHeading}`}>Dentist
                                        Services <br/> that You Can Trust
                                    </h5>
                                    <p className={`col-10 mb-4 text-center text-lg-start ${classes.carouselDescription}`}>Far far away,
                                        behind the
                                        word mountains, far from the
                                        countries Vokalia
                                        and Consonantia,
                                        there live the blind texts.</p>
                                    <div
                                        className="col-12 col-sm-10 justify-content-lg-start justify-content-md-center d-md-flex d-block mb-4">
                                        <div className="row m-0">
                                            <button type="button"
                                                    className={`btn mx-1 rounded-1 text-uppercase px-sm-5 px-3 py-3  col-lg-6 col-12 mb-2 mb-lg-0 ${classes.servicesButton}`}
                                                    style={{fontSize: '12px'}}>see our services <i
                                                className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                            <button type="button"
                                                    className={`btn mx-1 rounded-1 text-uppercase px-sm-5 px-3 py-3 col-lg-5 col-12 ${classes.courseButton}`}
                                                    style={{fontSize: '12px'}}>view course <i
                                                className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
/*                <div className="carousel-item position-relative">
                    <img src={Image2} className={`d-block w-100 ${classes.carouselImage}`} alt="..."/>
                    <div className="overlay position-absolute top-0">
                        {/!*<div className="row m-0">
                                <div className="col-lg-6 col-12 opacity-for-div" style={{height:'100vh'}}>
                                    <div className="row m-0 text-white justify-content-center h-100 align-content-center">
                                        <h5 className="display-5 col-10 mb-4 carousel-h5-text text-center text-lg-start">A Brighter
                                            Dental <br/> Experienced
                                        </h5>
                                        <p className="col-10 mb-4 carousel-p-text text-center text-lg-start">Far far away, behind the
                                            word mountains, far from the
                                            countries Vokalia
                                            and Consonantia,
                                            there live the blind texts.</p>
                                        <div className="buttons-carou col-12 col-sm-10  justify-content-lg-start justify-content-md-center d-md-flex d-block mb-4">
                                            <div className="row m-0">
                                                <button type="button"
                                                        className="btn btn-color-back1 mx-1 rounded-1 text-uppercase px-sm-5 px-3 py-3  col-lg-6 col-12 mb-2 mb-lg-0"
                                                        style={{fontSize:'12px'}}>make an appointment <i
                                                    className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                                <button type="button"
                                                        className="btn btn-color-back2 mx-1 rounded-1 text-uppercase px-sm-5 px-3 py-3 col-lg-5 col-12"
                                                        style={{fontSize:'12px'}}>view course <i
                                                    className="fa-solid fa-arrow-right-long ms-2"></i></button>
                                            </div>

                                        </div>

                                    </div>


                                </div>
                            </div>*!/}
                    </div>
                </div>
            </div>
        </div>*/
    );
};
export default Slider;