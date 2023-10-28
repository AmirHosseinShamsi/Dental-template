import React from 'react';
import classes from './Heading.module.css';
const Heading = ({text = "" , heading = ""}) => {
    return (
        <div className="col-10 mb-5 mt-4">
            <p className={`text-white text-uppercase ${classes.textDesign}`}>{text}</p>
            <h2 className={`text-white text-capitalize ${classes.headingDesign}`}>{heading}</h2>
        </div>
    );
};

export default Heading;