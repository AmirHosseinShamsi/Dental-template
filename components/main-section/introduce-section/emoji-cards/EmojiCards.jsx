import React from 'react';
import classes from './EmojiCards.module.css';
const EmojiCards = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="row m-0 border border-info rounded-1 bg-light py-2 bg-transparent">
                <div className={`col-3 ${classes.smileIcon}`}>
                    <i className="fa-regular fa-face-smile-wink"></i>
                </div>
                <div className="col-8 ms-2">
                    <h5 className={classes.heading}>3,000</h5>
                    <span className={classes.description}>HAPPY PATIENTS</span>
                </div>
            </div>
        </div>
    );
};

export default EmojiCards;