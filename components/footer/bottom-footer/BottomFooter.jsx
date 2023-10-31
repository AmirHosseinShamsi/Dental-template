import React from 'react';
import classes from './BottomFooter.module.css';
const BottomFooter = () => {
    return (
        <div className={`bottom-footer w-100 text-center py-5 ${classes.bottomFooterContainer}`}>
            <p className={`m-0 ${classes.bottomFooterContainer}`}>Copyright ©2022 All rights reserved | This template is cloned By AmirHossein Shamsi , thanks to colorlib</p>
        </div>
    );
};

export default BottomFooter;