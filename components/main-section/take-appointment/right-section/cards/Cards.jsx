import React from 'react';
import classes from './Cards.module.css';
const Cards = ({icon = "fa-solid fa-display" , heading , description}) => {
    return (
            <div className={`col-12 my-1 d-flex p-3 bg-white ${classes.cardStyle}`}>
                <div className={`align-self-center ${classes.cardIcon}`}>
                    <i className={icon}></i>
                </div>
                <div className="txt-cards ms-3">
                    <p className={`text-capitalize mt-2 mb-1 text-black ${classes.cardHeading}`}>{heading}</p>
                    <p className={`text-capitalize mt-3 mb-1 ${classes.cardDescription}`}>{description}</p>
                </div>
            </div>
    );
};

export default Cards;