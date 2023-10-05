import React from 'react';
import classes from './Brand.module.css';

const Brand = ({href = "", heading = "", description = ""}) => {
    return (
        <>
            <a href={href} className="navbar-brand">
                <h3 className={`text-uppercase m-0 ${classes.textLogo}`}>{heading}</h3>
                <p className={`text-uppercase m-0 ${classes.textDescription}`}>{description}</p>
            </a>
        </>
    );
};

export default Brand;