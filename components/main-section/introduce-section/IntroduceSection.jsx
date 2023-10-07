import React from 'react';
import clinicImage from 'public/images/Welcome to our clinic.webp';
import classes from './IntroduceSection.module.css';
const IntroduceSection = () => {
    return (
        <article className="container-lg p-0">
                <div className="row m-0 ">
                    <div className="col-5 bg-white p-0 d-none d-md-block">
                        <img
                        src={clinicImage}
                        className={`img-fluid w-100 ${classes.introduceImage}`} alt="clinic-image"/>
                    </div>
                    {/*<div className="col-md-7 col-12 ps-4">
                        <div className="row m-0 h-100 align-content-center py-5 py-lg-0">
                            <h6 className="text-uppercase col-12 ta-blog">WELCOME TO OUR DENTAL CLINIC</h6>
                            <h2 className="text-capitalize col-12 ts-blog mt-1">Toothcare is a Dental Clinic and Innovative Approach
                                to
                                Treatment</h2>
                            <p className="text-capitalize col-12 mb-5 text-muted tp-blog mt-3">Far far away, behind the word
                                mountains,
                                far from the countries
                                Vokalia
                                and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                                coast of the Semantics, a large language ocean.</p>
                            <div className="col-12">
                                <div className="row g-3">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="row m-0 border border-info rounded-1 bg-light py-2 bg-transparent">
                                            <div className="inside-ico col-3">
                                                <i className="fa-regular fa-face-smile-wink"></i>
                                            </div>
                                            <div className="txt-inside col-8 ms-2">
                                                <h5 className="wwe">3,000</h5>
                                                <span>HAPPY PATIENTS</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="row m-0 border border-info rounded-1 bg-light py-2 bg-transparent">
                                            <div className="inside-ico col-3">
                                                <i className="fa-regular fa-face-smile-wink"></i>
                                            </div>
                                            <div className="txt-inside col-8 ms-2">
                                                <h5 className="wwe">3,000</h5>
                                                <span>HAPPY PATIENTS</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="row m-0 border border-info rounded-1 bg-light py-2 bg-transparent">
                                            <div className="inside-ico col-3">
                                                <i className="fa-regular fa-face-smile-wink"></i>
                                            </div>
                                            <div className="txt-inside col-8 ms-2">
                                                <h5 className="wwe">3,000</h5>
                                                <span>HAPPY PATIENTS</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
        </article>
    );
};

export default IntroduceSection;