import React from 'react';
import classes from './TextAd.module.css';
const TextAd = ({head , description}) => {
    return (
        <div className="col-lg-8 col-12">
            <span className={`text-uppercase text-white ${classes.headText}`}>{head}</span>
            <h6 className={`text-capitalize mt-2 text-white ${classes.descriptionText}`}>{description}</h6>
        </div>
    );
};

export default TextAd;