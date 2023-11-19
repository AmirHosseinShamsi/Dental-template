import React from 'react';
import Brand from "../../../components/Header/top-navbar/brand/Brand.jsx";
import IconText from "../../../components/Header/top-navbar/icon-text/IconText.jsx";

const TopNavbar = () => {
    const data = [{
        iconType: 'fa-solid fa-clock',
        topText: 'Monday - Friday',
        bottomText: '8AM - 8PM',
        className:'justify-content-lg-end'
    }, {
        iconType: 'fa-solid fa-phone',
        topText: 'Call Us',
        bottomText: '+2 392 3929 210',
        className:'justify-content-lg-center'
    }, {
        iconType: 'fa-solid fa-location-dot',
        topText: 'Location',
        bottomText: 'san francisco, california , usa',
        className:'justify-content-lg-start'
    }
    ]
    return (
        <div className="p-4 p-md-3">
            <div className="p-0 container-md">
                <div className="row m-0 align-items-center">
                    <div className="col-12 text-start text-md-center col-lg-2 text-lg-start">
                        <Brand href="#" heading="toothcare" description="dental clinic services"/>
                    </div>
                    <div className="col-12 mt-3 mt-md-0 col-lg-10">
                        <div className="row m-0 justify-content-between align-items-center">
                            {data.map((item, index) => {
                                return <div className="col-12 col-md-4 p-0" key={index}>
                                    <IconText data={item}/>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;