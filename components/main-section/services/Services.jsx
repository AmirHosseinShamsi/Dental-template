import React from 'react';
import classes from './Services.module.css';
import ServicesCards from "../../../components/main-section/services/cards/ServicesCards.jsx";
const Services = () => {
    const data = [{
        icon:'fa-solid fa-tooth',
        heading:'Tooth Protection',
        description:'Far far away, behind the word mountains, far from th countries Vokalia and Consonantia, there live the blind texts.',
    },{
        icon:'fa-solid fa-stethoscope',
        heading:'Dental Implants',
        description:'Far far away, behind the word mountains, far from th countries Vokalia and Consonantia, there live the blind texts.',
    },{
        icon:'fa-solid fa-face-grimace',
        heading:'Dental Care',
        description:'Far far away, behind the word mountains, far from th countries Vokalia and Consonantia, there live the blind texts.',
    },{
        icon:'fa-solid fa-briefcase-medical',
        heading:'Teeth Whitening',
        description:'Far far away, behind the word mountains, far from th countries Vokalia and Consonantia, there live the blind texts.',
    },{
        icon:'fa-solid fa-syringe',
        heading:'Dental Caculus',
        description:'Far far away, behind the word mountains, far from th countries Vokalia and Consonantia, there live the blind texts.',
    },{
        icon:'fa-solid fa-face-laugh-wink',
        heading:'Tooth Removal',
        description:'Far far away, behind the word mountains, far from th countries Vokalia and Consonantia, there live the blind texts.',
    },{
        icon:'fa-solid fa-face-smile',
        heading:'Removal of Tartar',
        description:'Far far away, behind the word mountains, far from th countries Vokalia and Consonantia, there live the blind texts.',
    },{
        icon:'fa-solid fa-hospital-user',
        heading:'Tooth Inspection',
        description:'Far far away, behind the word mountains, far from th countries Vokalia and Consonantia, there live the blind texts.',
    }]
    return (
        <section className={`${classes.servicesSection}`}>
            <div className="container-lg p-0">
                <div className={`row m-0 ${classes.align}`}>
                    <span className={`col-12 text-center text-uppercase ${classes.shortText}`}>services</span>
                    <h5 className={`col-12 text-center text-capitalize mb-5 ${classes.heading}`}>Toothcare Services</h5>
                    <div className="col-12">
                        <div className="row m-0 g-3">
                            {data.map((item , index)=>{
                                return <ServicesCards data={{...item}}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;