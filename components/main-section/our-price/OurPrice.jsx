import React from 'react';
import PriceCard from "./price-card/PriceCard.jsx";
import classes from './OurPrice.module.css';
const OurPrice = () => {
    return (
        <section className={classes.priceContainer}>
            <div className="container">
                <div className="text-center mb-5">
                    <span className={`text-uppercase ${classes.headText}`}>our pricing</span>
                    <h6 className={`text-capitalize ${classes.descriptionText}`}>Pricing & Packages</h6>
                </div>
                <div className="row m-0 g-3">
                    <div className="col-lg-3 col-md-6 col-12">
                        <PriceCard head="basic plan" description="$60"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <PriceCard head="basic plan" description="$60"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <PriceCard head="basic plan" description="$60"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <PriceCard head="basic plan" description="$60"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPrice;