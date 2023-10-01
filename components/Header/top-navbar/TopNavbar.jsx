import React from 'react';
import classes from './TopNavbar.module.css';
const TopNavbar = () => {
    return (
        <div className="p-4 p-md-3">
            <div className="container-md p-0">
                <div className="row m-0 align-items-center">
                    <div className="col-12 col-lg-3 text-start text-md-center text-lg-start">
                        <a href="#" className="navbar-brand">
                            <h3 className={`text-uppercase m-0 ${classes.textLogo}`}>toothcare</h3>
                            <p className={`text-uppercase m-0 ${classes.textDescription}`}>dental clinic services</p>
                        </a>
                    </div>
                    <div className="navlinks-a col-12 col-lg-9 mt-3 mt-md-0">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 col-md-4">
                                <div className="icon-navbar d-flex justify-content-lg-end justify-content-start">
                                    <div className="icon-nav">
                                        <i className="fa-solid fa-clock"></i>
                                    </div>
                                    <div className="text-nav pt-1 ms-1">
                                        <p className="text-capitalize m-0">Monday-friday</p>
                                        <strong className="text-uppercase m-0">8Am-8Pm</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="icon-navbar d-flex justify-content-lg-center justify-content-start">
                                    <div className="icon-nav">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="text-nav pt-1 ms-1">
                                        <p className="text-capitalize m-0">Call us</p>
                                        <strong className="text-uppercase m-0">+2 392 3929 210</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="icon-navbar d-flex justify-content-lg-start justify-content-start">
                                    <div className="icon-nav">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="text-nav pt-1 ms-1">
                                        <p className="text-capitalize m-0">location</p>

                                        <strong className="text-uppercase m-0 col-6 col-md-12 text-wrap">San Francisco,
                                            California,
                                            USA</strong>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;