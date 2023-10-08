import React from 'react';
import classes from './DoctorCards.module.css';

const DoctorCards = ({data}) => {
    return (
        <div className={`col-lg-3 col-sm-6 col-12 ${classes.cards}`}>
            <div className="card card-body text-center row m-0 border-0">
                <img src={data.image} className={`p-0 ${classes.doctorsImage}`} alt="card-image"/>
                <h5 className="card-title text-capitalize mb-3 mt-4 card-title-h5 col-12">{data.fullName}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-uppercase card-subtitle-h6 col-12">{data.position}</h6>
                <div className="col-12 mt-3">
                    <div className="row m-0 justify-content-center justify-content-sm-between">
                        <div className="icon-first btn mx-2 mx-sm-0"><i className="fa-brands fa-twitter"></i></div>
                        <div className="icon-first btn mx-2 mx-sm-0"><i className="fa-brands fa-facebook"></i></div>
                        <div className="icon-first btn mx-2 mx-sm-0"><i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="icon-first btn ms-2 ms-sm-0"><i className="fa-brands fa-telegram"></i></div>
                    </div>
                </div>
                <p className="card-text col-12 mt-3 mb-4">{data.about}</p>
            </div>
        </div>
    );
};

export default DoctorCards;