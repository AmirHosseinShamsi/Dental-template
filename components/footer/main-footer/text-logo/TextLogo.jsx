import React from 'react';
import classes from './TextLogo.module.css';

const TextLogo = () => {
    return (
        <div className="logo-footer bg-transparent">
            <a href="#" className="navbar-brand">
                <h3 className={`text-uppercase m-0 ${classes.head}`}>toothcare</h3>
                <p className={`text-uppercase m-0 ${classes.description}`}>dental clinic services</p>
            </a>
            <p className={`text-capitalize text-white mb-0 mt-4 ${classes.textExplanation}`}>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className="mt-3">
                <div className="row flex-row m-0">
                    <div className={`text-center btn ${classes.socialMedia}`}><i className={`fa-brands fa-twitter ${classes.socialMediaIcon}`}></i>
                    </div>
                    <div className={`text-center btn ms-2 ${classes.socialMedia}`}>
                        <i className={`fa-brands fa-facebook ${classes.socialMediaIcon}`}></i>
                    </div>
                    <div className={`text-center btn ms-2 ${classes.socialMedia}`}><i
                        className={`fa-brands fa-instagram ${classes.socialMediaIcon}`}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextLogo;