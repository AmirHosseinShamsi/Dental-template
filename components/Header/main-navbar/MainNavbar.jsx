import React from 'react';
import HamburgerIcon from "../../../components/Header/main-navbar/hamburger-icon/HamburgerIcon.jsx";
import classes from './MainNavbar.module.css';
import ListItem from "../../../components/Header/main-navbar/list-item/ListItem.jsx";

const MainNavbar = () => {
    const data = [{
        href: '#',
        text: 'Home'
    }, {
        href: '#',
        text: 'Dentist'
    }, {
        href: '#',
        text: 'About'
    }, {
        href: '#',
        text: 'Services'
    }, {
        href: '#',
        text: 'Pricing'
    }, {
        href: '#',
        text: 'Blog'
    }, {
        href: '#',
        text: 'Contact'
    },]
    return (
        <nav className="navbar navbar-expand-lg bg-light border p-0">
            <div className="container-fluid container-lg p-0 px-lg-2">
                <button
                    className={`btn text-white border-0 rounded-0 text-uppercase order-lg-last ${classes.appointmentButton}`}
                    role="button">make an
                    appointment
                </button>
                <HamburgerIcon/>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav p-2 order-5 order-lg-0 ${classes.fontType}`}>
                        {data.map((item, index) => {
                            return <ListItem data={item} index={index} key={index}/>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;