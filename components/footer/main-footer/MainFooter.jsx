import React from 'react';
import classes from './MainFooter.module.css';
import TextLogo from "../../../components/footer/main-footer/text-logo/TextLogo.jsx";
import List from "../../../components/footer/main-footer/list/List.jsx";
import BlogPost from "../../../components/footer/main-footer/blog-posts/BlogPost.jsx";
import Address from "../../../components/footer/main-footer/address/Address.jsx";

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
            <div className="container-xl">
                <div className="row m-0 bg-transparent">
                    <div className="col-md-6 col-lg">
                        <TextLogo/>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-md-0 mt-5">
                        <List title="Services" data={servicesListData}/>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-lg-0 mt-5">
                        <List title="Quick Links" data={QuickListData}/>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-lg-0 mt-5">
                        <div className="bg-transparent">
                            <h6 className={`text-white mb-4 text-capitalize ${classes.recentPostText}`}>recent posts
                            </h6>
                            <BlogPost/>
                            <BlogPost/>
                            <BlogPost/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg mt-lg-0 mt-5">
                        <h3 className={`text-capitalize text-white ${classes.haveQuestionText}`}>Have a Questions?</h3>
                        <Address/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainFooter;