import React from 'react';
import classes from './HamburgerIcon.module.css';
const HamburgerIcon = () => {
    return (
        <>
            <button className={`navbar-toggler border-0 ${classes.hamburgerButton}`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    );
};

export default HamburgerIcon;