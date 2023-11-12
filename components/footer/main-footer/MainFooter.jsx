import React from 'react';
import classes from './MainFooter.module.css';
import TextLogo from "../../../components/footer/main-footer/text-logo/TextLogo.jsx";
import List from "../../../components/footer/main-footer/list/List.jsx";

const MainFooter = () => {
    const servicesListData = [{
        text: 'tooth protection'
    }, {
        text: 'dental implants'
    }, {
        text: 'Dental Care'
    }, {
        text: 'teeth whitening'
    }, {
        text: 'dental calculus'
    },]

    const QuickListData = [{
        text: 'home'
    }, {
        text: 'about'
    }, {
        text: 'services'
    }, {
        text: 'dentist & conditions'
    }, {
        text: 'blog'
    }, {
        text: 'contact'
    },]
    return (
        <div className={`w-100 ${classes.topFooter}`}>
            <div className="container-md">
                <div className="row m-0 bg-transparent gx-4">
                    <div className="col-lg-2 mt-lg-0 col-12">
                        <TextLogo/>
                    </div>
                    <div className="col-lg-2 mt-lg-0 col-md-6 mt-5">
                        <List title="Services" data={servicesListData}/>
                    </div>
                    <div className="col-lg-2 mt-lg-0 col-md-6 mt-5">
                        <List title="Quick Links" data={QuickListData}/>
                    </div>
                    {/*
                    <div className="col-lg-3 mt-lg-0 col-md-6 mt-5">
                        <div className="recent-post-footer bg-transparent">
                            <h6 className="text-white mb-4 text-capitalize"
                                style="font-size: 18px;font-family: 'Roboto-Medium';">recent posts</h6>
                            <div className="item-1-f row m-0 bg-transparent">
                                <img src="img/card-image2.webp" className="p-0 rounded col-2"
                                     style="width: 50px; height: 50px;background-size:cover;background-position: center;object-fit: cover;">
                                    <div className="text-date col-10">
                                        <ul className="list-group d-flex flex-row">
                                            <li className="list-group-item bg-transparent border-0  px-0"
                                                style="font-size: 12px;color:white ;">
                                                <span className="fa fa-solid fa-calendar me-1"></span>Jan. 18, 2021
                                            </li>
                                            <li className="list-group-item bg-transparent border-0  px-0 text-capitalize ms-2"
                                                style="font-size: 12px;color:white;"><span
                                                className="fa fa-solid fa-user me-1"></span>Admin
                                            </li>
                                        </ul>
                                        <h3 className="text-capitalize"
                                            style="font-size: 16px;color:white;font-family: 'Roboto-Medium';">
                                            Creativity and Inspiration</h3>
                                    </div>
                            </div>
                            <div className="item-1-f row m-0 bg-transparent mt-2">
                                <img src="img/card-image2.webp" className="p-0 rounded col-2"
                                     style="width: 50px; height: 50px;background-size:cover;background-position: center;object-fit: cover;">
                                    <div className="text-date col-10">
                                        <ul className="list-group d-flex flex-row">
                                            <li className="list-group-item bg-transparent border-0  px-0"
                                                style="font-size: 12px;color:white ;">
                                                <span className="fa fa-solid fa-calendar me-1"></span>Jan. 18, 2021
                                            </li>
                                            <li className="list-group-item bg-transparent border-0  px-0 text-capitalize ms-2"
                                                style="font-size: 12px;color:white;"><span
                                                className="fa fa-solid fa-user me-1"></span>Admin
                                            </li>
                                        </ul>
                                        <h3 className="text-capitalize"
                                            style="font-size: 16px;color:white;font-family: 'Roboto-Medium';">
                                            Creativity and Inspiration</h3>
                                    </div>
                            </div>
                            <div className="item-1-f row m-0 bg-transparent mt-2">
                                <img src="img/card-image2.webp" className="p-0 rounded col-2"
                                     style="width: 50px; height: 50px;background-size:cover;background-position: center;object-fit: cover;">
                                    <div className="text-date col-10">
                                        <ul className="list-group d-flex flex-row">
                                            <li className="list-group-item bg-transparent border-0  px-0"
                                                style="font-size: 12px;color:white ;">
                                                <span className="fa fa-solid fa-calendar me-1"></span>Jan. 18, 2021
                                            </li>
                                            <li className="list-group-item bg-transparent border-0  px-0 text-capitalize ms-2"
                                                style="font-size: 12px;color:white;"><span
                                                className="fa fa-solid fa-user me-1"></span>Admin
                                            </li>
                                        </ul>
                                        <h3 className="text-capitalize"
                                            style="font-size: 16px;color:white;font-family: 'Roboto-Medium';">
                                            Creativity and Inspiration</h3>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-lg-0 col-md-6 mt-5">
                        <div className="have-a-question-footer bg-transparent">
                            <h3 className="text-capitalize text-white" style="font-size: 18px;font-family: 'Roboto-Medium';">
                                Have a Questions?</h3>
                            <p className="text-capitalize" style="font-size: 15px;color: white; font-family: 'Roboto-Regular';">
                                <span className="fa-solid fa-map me-2"></span>
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </p>
                            <p class="text-capitalize" style="font-size: 15px;color: white; font-family: 'Roboto-Regular';">
                                <span class="fa-solid fa-phone me-2"></span>
                                +2 392 3929 210

                            </p>
                            <p class="text-capitalize" style="font-size: 15px;color: white; font-family: 'Roboto-Regular';">
                                <span class="fa-solid fa-mail-bulk me-2"></span>
                                info@yourdomain.com
                            </p>
                        </div>
                    </div>*/}
                </div>

            </div>
        </div>
    );
};

export default MainFooter;