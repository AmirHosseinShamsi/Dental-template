import React from 'react';
import Brand from "../../../components/Header/top-navbar/brand/Brand.jsx";
import IconText from "../../../components/Header/top-navbar/icon-text/IconText.jsx";

const TopNavbar = () => {
    const data = [{
        iconType: 'fa-solid fa-clock',
        topText: 'test',
        bottomText: 'test2'
    }, {
        iconType: 'fa-solid fa-clock',
        topText: 'test',
        bottomText: 'test2'
    }, {
        iconType: 'fa-solid fa-clock',
        topText: 'test',
        bottomText: 'test2'
    }
    ]
    return (
        <div className="p-4 p-md-3">
            <div className="p-0 container-md">
                <div className="row m-0 align-items-center">
                    <div className="col-12 text-start text-md-center col-lg-3 text-lg-start">
                        <Brand href="#" heading="toothcare" description="dental clinic services"/>
                    </div>
                    <div className="col-12 mt-3 mt-md-0 col-lg-9">
                        <div className="row justify-content-between align-items-center">
                            {data.map((item, index) => {
                                return <div className="col-12 col-md-4">
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