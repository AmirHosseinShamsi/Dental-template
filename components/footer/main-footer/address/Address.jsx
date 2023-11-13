import React from 'react';
import classes from './Address.module.css';
const Address = () => {
    return (
        <div className="bg-transparent">
            <p className={`text-capitalize ${classes.streetStyle}`}>
                <span className="fa-solid fa-map me-2"></span>
                203 Fake St. Mountain View, San Francisco, California, USA
            </p>
            <p className={`text-capitalize ${classes.streetStyle}`}>
                <span className="fa-solid fa-phone me-2"></span>
                +2 392 3929 210
            </p>
            <p className={`text-capitalize ${classes.streetStyle}`}>
                <span className="fa-solid fa-mail-bulk me-2"></span>
                info@yourdomain.com
            </p>
        </div>
    );
};

export default Address;