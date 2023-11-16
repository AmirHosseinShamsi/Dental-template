import React from 'react';
import classes from './PersonImages.module.css';
const PersonImages = ({image , age , fullName}) => {
    return (
        <div className={classes.parentOfImage}>
            <img src={image} className={`col-3 ${classes.imageStyles}`} alt="image"/>
            <div className={`row m-0 text-center position-absolute bottom-0 w-100 py-3 ${classes.opacityBackground}`}>
                <span className={`col-12 mb-1 ${classes.ageStyles}`}>{age}</span>
                <h6 className={`col-12 ${classes.nameStyles}`}>{fullName}</h6>
            </div>
        </div>
    );
};

export default PersonImages;