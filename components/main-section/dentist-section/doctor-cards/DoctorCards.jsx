import React from 'react';
import classes from './DoctorCards.module.css';
import SocialMedia from "../../../../components/main-section/dentist-section/doctor-cards/social-media/SocialMedia.jsx";

const DoctorCards = ({data}) => {
    return (
        <div className={`col-lg-3 col-sm-6 col-12 ${classes.cards}`}>
            <div className="card card-body text-center row m-0 border-0">
                <div>
                    <img src={data.image} className={`p-0 ${classes.doctorsImage}`} alt="card-image"/>
                </div>
                <h5 className={`card-title text-capitalize mb-3 mt-4 col-12 ${classes.doctorName}`}>{data.fullName}</h5>
                <h6 className={`card-subtitle mb-2 text-muted text-uppercase col-12 ${classes.doctorPosition}`}>{data.position}</h6>
                <div className="col-12 mt-3">
                    <div className="row m-0 justify-content-center justify-content-sm-between">
                        {data.socialMedia.map((item , index)=>{
                            return <SocialMedia data={{...item}}/>
                        })}
                    </div>
                </div>
                <p className={`col-12 mt-3 mb-4 ${classes.aboutSection}`}>{data.about}</p>
            </div>
        </div>
    );
};

export default DoctorCards;