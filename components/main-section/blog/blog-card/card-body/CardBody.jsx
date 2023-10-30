import React from 'react';
import classes from './CardBody.module.css';

const CardBody = ({writer , date , comments , title , description}) => {
    return (
        <>
            <p className={`text-center ${classes.cardEmoji}`}>
                <span className={`text-uppercase p-0 ${classes.blogTag}`}>
                    <i className={`fa-solid fa-calendar-days me-2 ${classes.blogTagIcon}`}></i>
                    {writer}
                </span>
                <span className={`text-uppercase text-center p-0 ${classes.blogTag}`}>
                    <i className={`fa-solid fa-calendar-days me-2 ${classes.blogTagIcon}`}></i>
                    {date}
                </span>
                <span className={`text-uppercase p-0 ${classes.blogTag}`}>
                    <i className={`fa-solid fa-comment me-2 ${classes.blogTagIcon}`}></i>
                    {comments}
                </span>
            </p>
            <div className="row m-0">
                <h3 className={`text-capitalize mb-4 col-12 ${classes.headCardText}`}>{title}</h3>
                <p className={`text-capitalize mb-5 col-12 ${classes.descriptionCardText}`}>{description}</p>
            </div>
        </>
    );
};

export default CardBody;