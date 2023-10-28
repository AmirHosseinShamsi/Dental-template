import React from 'react';
import classes from "./SliderButton.module.css";

const SliderButton = ({title = "" , color = "blue"}) => {
    return (
        <>
            <button type="button"
                    className={`btn mx-1 rounded-1 text-uppercase px-sm-5 px-3 py-3  col-lg-5 col-12 mb-2 mb-lg-0 ${classes.sliderButton} ${color === "white" ? classes.sliderButtonWhite : classes.sliderButtonBlue}`}>{title}
                <i
                    className="fa-solid fa-arrow-right-long ms-2"></i>
            </button>
        </>
    );
};

export default SliderButton;