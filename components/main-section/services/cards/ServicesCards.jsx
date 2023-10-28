import React from 'react';
import classes from './ServicesCards.module.css';

const ServicesCards = ({data}) => {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="row m-0 border bg-light py-4 px-1 justify-content-center border-0 rounded-1">
                <div className={`text-center col-12 mb-4 ${classes.iconSection}`}>
                    <span className={`${data.icon} ${classes.iconStyle}`}></span>
                </div>
                <div className="col-12 text-center">
                    <h6 className={classes.cardHeading}>{data.heading}</h6>
                    <p className={`text-muted ${classes.cardDescription}`}>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;