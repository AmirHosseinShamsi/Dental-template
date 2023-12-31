import React from 'react';
import classes from './DentistSection.module.css';
import DoctorCards from "../../../components/main-section/dentist-section/doctor-cards/DoctorCards.jsx";
import doctorImage from '../../../public/images/card-image1.webp';

const DentistSection = () => {
    const data = [{
        image: doctorImage,
        fullName: 'Dr. Alicia Henderson',
        position: 'dentist',
        socialMedia: [{
            icon: 'fa-brands fa-twitter',
        }, {
            icon: 'fa-brands fa-facebook',
        }, {
            icon: 'fa-brands fa-linkedin',
        }, {
            icon: 'fa-brands fa-telegram'
        }],
        about:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },{
        image: doctorImage,
        fullName: 'Dr. Alicia Henderson',
        position: 'dentist',
        socialMedia: [{
            icon: 'fa-brands fa-twitter',
        }, {
            icon: 'fa-brands fa-facebook',
        }, {
            icon: 'fa-brands fa-linkedin',
        }, {
            icon: 'fa-brands fa-telegram'
        }],
        about:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },{
        image: doctorImage,
        fullName: 'Dr. Alicia Henderson',
        position: 'dentist',
        socialMedia: [{
            icon: 'fa-brands fa-twitter',
        }, {
            icon: 'fa-brands fa-facebook',
        }, {
            icon: 'fa-brands fa-linkedin',
        }, {
            icon: 'fa-brands fa-telegram'
        }],
        about:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },{
        image: doctorImage,
        fullName: 'Dr. Alicia Henderson',
        position: 'dentist',
        socialMedia: [{
            icon: 'fa-brands fa-twitter',
        }, {
            icon: 'fa-brands fa-facebook',
        }, {
            icon: 'fa-brands fa-linkedin',
        }, {
            icon: 'fa-brands fa-telegram'
        }],
        about:"I am an ambitious workaholic, but apart from that, pretty simple person."
    },]
    return (
        <section className={classes.doctorSection}>
            <div className="p-0">
                <div className={`row m-0 ${classes.alignPadding}`}>
                    <span className={`col-12 text-uppercase text-center mb-2 ${classes.shortText}`}>Our doctors</span>
                    <h5 className={`col-12 text-capitalize text-center ${classes.headingText}`}>Qualified Dentist</h5>
                    <div className="row m-0 gx-3 flex-wrap justify-content-center">
                        {data.map((item, index) => {
                            return <DoctorCards data={{...item}}/>
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default DentistSection;