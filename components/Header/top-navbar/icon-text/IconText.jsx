import React from 'react';
import classes from './IconText.module.css';
const IconText = ({data}) => {
    return (
        <div className="icon-navbar d-flex justify-content-lg-end justify-content-start">
            <div className={classes.iconSection}>
                <i className={data.iconType}></i>
            </div>
            <div className="pt-1 ms-1">
                <p className="text-capitalize m-0">{data.topText}</p>
                <strong className={`text-uppercase m-0 ${classes.textSection}`}>{data.bottomText}</strong>
            </div>
        </div>
    );
};

export default IconText;