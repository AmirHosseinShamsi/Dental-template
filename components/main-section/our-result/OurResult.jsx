import React from 'react';
import classes from './OurResult.module.css';
import Image1 from '../../../public/images/story-image1.webp'
import Image2 from '../../../public/images/story-image2.webp'
import Image3 from '../../../public/images/story-image3.webp'
import Image4 from '../../../public/images/story-image4.webp'
import PersonImages from "../../../components/main-section/our-result/person-images/PersonImages.jsx";
const OurResult = () => {
    return (
        <section className={classes.resultContainer}>
            <div className="row m-0">
                <div className="col-12 text-center mb-5">
                    <span className={`text-uppercase ${classes.headText}`}>stories</span>
                    <h6 className={`text-capitalize ${classes.descriptionText}`}>Result of our Treatment and Work</h6>
                </div>
                <div className="col-12 p-0">
                    <div className="row m-0">
                        <div className="col-12 col-md-3 p-0 position-relative">
                            <PersonImages age="france, 28 years" fullName="john johnson" image={Image1}/>
                        </div>
                        <div className="col-12 col-md-3 p-0 position-relative">
                            <PersonImages age="germany, 20 years" fullName="mila anderson" image={Image2}/>
                        </div>
                        <div className="col-12 col-md-3 p-0 position-relative">
                            <PersonImages age="england, 25 years" fullName="ashley karma" image={Image3}/>
                        </div>
                        <div className="col-12 col-md-3 p-0 position-relative">
                            <PersonImages age="spain, 30 years" fullName="jennifer austin" image={Image4}/>
                        </div>
{/*                        <div className="image-1-s col-12 col-md-3  p-0 position-relative">
                            <img src="img/story-image2.webp" className="col-3 img-saw" alt="image"/>
                                <div className="row m-0 bg-opsa text-center position-absolute bottom-0 w-100 py-3">
                                    <span className="col-12 mb-1" style="font-size: 13px;font-family: 'Roboto-Regular';">France, 28 years</span>
                                    <h6 className="col-12" style="font-size: 20px; font-family: 'Roboto-Medium';">John Johnson</h6>
                                </div>
                        </div>
                        <div className="image-1-s col-12 col-md-3  p-0 position-relative">
                            <img src="img/story-image3.webp" className="col-3 img-saw" alt="image"/>
                                <div className="row m-0 bg-opsa text-center position-absolute bottom-0 w-100 py-3">
                                    <span className="col-12 mb-1" style="font-size: 13px;font-family: 'Roboto-Regular';">France, 28 years</span>
                                    <h6 className="col-12" style="font-size: 20px; font-family: 'Roboto-Medium';">John Johnson</h6>
                                </div>
                        </div>
                        <div className="image-1-s col-12 col-md-3  p-0 position-relative">
                            <img src="img/story-image4.webp" className="col-3 img-saw"/>
                                <div className="row m-0 bg-opsa text-center position-absolute bottom-0 w-100 py-3">
                                    <span className="col-12 mb-1" style="font-size: 13px;font-family: 'Roboto-Regular';">France, 28 years</span>
                                    <h6 class="col-12" style="font-size: 20px; font-family: 'Roboto-Medium';">John Johnson</h6>
                                </div>
                        </div>*/}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurResult;