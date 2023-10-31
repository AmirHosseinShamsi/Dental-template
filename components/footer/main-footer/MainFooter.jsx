import React from 'react';

const MainFooter = () => {
    return (
        <div className="top-footer w-100">
            <div className="container-md">
                <div className="row m-0 bg-transparent gx-4">
                    <div className="col-lg-2 mt-lg-0 col-12">
                        <div className="logo-footer bg-transparent">
                            <a href="#" className="navbar-brand">
                                <h3 className="text-uppercase m-0 h2-footer-text">toothcare</h3>
                                <p className="text-uppercase m-0 p-footer-text">dental clinic services</p>
                            </a>
                            <p className="text-capitalize text-white mb-0 mt-4"
                               style="color: white;font-family: 'Roboto-Regular'; text-align: justify;">A small river named
                                Duden flows by their
                                place and
                                supplies it with
                                the necessary regelialia.</p>
                            <div className="icon-s-w mt-3">
                                <div className="row m-0">
                                    <div className="icon-first-footer-sec text-center btn"><i className="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="icon-first-footer-sec text-center btn ms-2">
                                        <i className="fa-brands fa-facebook"></i>
                                    </div>
                                    <div className="icon-first-footer-sec text-center btn ms-2"><i
                                        className="fa-brands fa-instagram"></i>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                    {/*<div className="col-lg-2 mt-lg-0 col-md-6 mt-5">
                        <div className="services-footer bg-transparent">
                            <h6 className="text-capitalize" style="font-size: 18px;color: white;font-family: 'Roboto-Bold';">
                                Services</h6>
                            <ul className="list-group border-0 mt-3 rounded-0 bg-transparent">
                                <li className="list-group-item bg-transparent ps-0 align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>tooth protection
                                </li>
                                <li className="list-group-item bg-transparent ps-0 align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>dental implants
                                </li>
                                <li className="list-group-item bg-transparent ps-0 align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>Dental Care
                                </li>
                                <li className="list-group-item bg-transparent ps-0 align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>Teeth Whitening
                                </li>
                                <li className="list-group-item bg-transparent ps-0 align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>Dental Calculus
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-lg-0 col-md-6 mt-5">
                        <div className="quick-links-footer bg-transparent">
                            <h6 className="text-capitalize" style="font-size: 18px;color: white;font-family: 'Roboto-Bold';">
                                quick links</h6>
                            <ul className="list-group border-0 mt-3 rounded-0">
                                <li className="list-group-item ps-0 bg-transparent align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>home
                                </li>
                                <li className="list-group-item ps-0 bg-transparent align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>about
                                </li>
                                <li className="list-group-item ps-0 bg-transparent align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>services
                                </li>
                                <li className="list-group-item ps-0 bg-transparent align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>dentist & conditions
                                </li>
                                <li className="list-group-item ps-0 bg-transparent align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>blog
                                </li>
                                <li className="list-group-item ps-0 bg-transparent align-items-center-center border-0 p-2"
                                    style="color: var(--main-white);font-family: 'Roboto-Medium';"><span
                                    className="fa-solid fa-arrow-right-long me-2"></span>contact
                                </li>


                            </ul>
                        </div>
                    </div>
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