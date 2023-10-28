import React from 'react';
import classes from "./Advertisement.module.css";
import ButtonAd from "./button-ad/ButtonAd.jsx";
import TextAd from "./text-ad/TextAd.jsx";

const Advertisement = () => {
    return (
        <section className={classes.adContainer}>
            <div className="container-sm">
                <div className="row m-0 py-5">
                    <TextAd head="book your appointment" description="do not wait make an appointment!"/>
                    <ButtonAd text="make an appointment"/>
                </div>
            </div>
        </section>
    );
};

export default Advertisement;