import React from 'react';
import classes from './RightSection.module.css';
import Cards from "../../../../components/main-section/take-appointment/right-section/cards/Cards.jsx";

const RightSection = () => {
    return (
        <div className="col-lg-6 col-12 bg-light">
            <div className="row m-0 justify-content-center">
                <div className={`col-10 p-0 ${classes.parentSection}`}>
                    <span className={`text-uppercase col-12 ${classes.topTextStyle}`}>LEARN ANYTHING</span>
                    <h6 className={`display-6 text-capitalize mb-5 col-12 text-black ${classes.headingTextStyle}`}>We
                        Offer Best Dental Services</h6>
                    <div className="cards-elements row m-0">
                        <Cards icon="fa-solid fa-display" heading="Easy Booking" description="Far far away, behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts."/>
                        <Cards icon="fa-solid fa-user-doctor" heading="Easy Booking" description="Far far away, behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts."/>
                        <Cards icon="fa-solid fa-gift" heading="Easy Booking" description="Far far away, behind the word mountains far from the countries Vokalia and Consonantia, there live the blind texts."/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default RightSection;