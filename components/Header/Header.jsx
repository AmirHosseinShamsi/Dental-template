import React from 'react';
import TopNavbar from "../../components/Header/top-navbar/TopNavbar.jsx";
import Slider from "../../components/Header/slider/Slider.jsx";
import MainNavbar from "../../components/Header/main-navbar/MainNavbar.jsx";

const Header = () => {
    return (
        <div>
            <TopNavbar/>
            <MainNavbar/>
            <Slider/>
        </div>
    );
};

export default Header;