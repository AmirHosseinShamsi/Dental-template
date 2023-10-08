import React from 'react';
import clinicImage from '../../../public/images/Welcome to our clinic.webp';
import classes from './IntroduceSection.module.css';
import EmojiCards from "../../../components/main-section/introduce-section/emoji-cards/EmojiCards.jsx";
const IntroduceSection = () => {
    return (
        <article className="container-lg p-0">
                <div className="row m-0">
                    <div className="col-5 bg-white p-0 d-none d-md-block">
                        <img
                        src={clinicImage}
                        className={`img-fluid w-100 ${classes.introduceImage}`} alt="clinic-image"/>
                    </div>
                    <div className="col-md-7 col-12 ps-4">
                        <div className="row m-0 h-100 align-content-center py-5 py-lg-0">
                            <h6 className={`text-uppercase col-12 ${classes.shortText}`}>WELCOME TO OUR DENTAL CLINIC</h6>
                            <h2 className={`text-capitalize col-12 mt-1 ${classes.headingText}`}>Toothcare is a Dental Clinic and Innovative Approach
                                to
                                Treatment</h2>
                            <p className={`text-capitalize col-12 mb-5 text-muted mt-3 ${classes.description}`}>Far far away, behind the word
                                mountains,
                                far from the countries
                                Vokalia
                                and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                                coast of the Semantics, a large language ocean.</p>
                            <div className="col-12">
                                <div className="row g-3">
                                    <EmojiCards/>
                                    <EmojiCards/>
                                    <EmojiCards/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </article>
    );
};

export default IntroduceSection;