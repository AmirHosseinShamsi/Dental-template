import React from 'react';
import classes from './ButtonAd.module.css';
const ButtonAd = ({text}) => {
    return (
        <div className="col-lg-4 col-12">
            <button type="button"
                    className={`btn py-3 py-sm-4 px-5 btn-primary rounded-1 text-center text-uppercase border-0 ${classes.buttonAd}`}>
                {text}
            </button>
        </div>
    );
};

export default ButtonAd;